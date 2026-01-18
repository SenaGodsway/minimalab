# How Modern Systems Fail: A Tour of Real Incidents

I spend a weird amount of time reading post-mortems. It started as morbid curiosity, but honestly, you learn more from other people's outages than from most architecture books.

Let's walk through some real failures and see what they teach us.

## The GitHub Outage That Lasted Hours (October 2018)

GitHub went down for over 24 hours. Not partially degraded. Down.

What happened? A routine network maintenance operation caused a 43-second connectivity loss between their US East Coast data center and their primary database cluster. 43 seconds.

That doesn't sound like much, right?

But in those 43 seconds, their database cluster couldn't reach the primary node. The cluster elected a new primary. Then the network came back. Now they had two primaries. Data was being written to both. The replication had diverged.

They had to spend hours carefully reconstructing which writes went where, replaying them in the correct order, and validating data integrity before they could bring things back.

**The lesson:** Network partitions don't just cause downtime. They can cause data inconsistency that takes way longer to fix than the original partition lasted. If your system can write to multiple places during a split, you need to think hard about what reconciliation looks like.

Also, 43 seconds can ruin your whole week.

## Stripe's API Outage (July 2019)

Stripe's API went down during a database migration. Payments couldn't process. For a company whose entire value proposition is "reliable payments," this was bad.

The interesting part wasn't the failure itself. It was the cascade.

They were migrating to a new database cluster. The migration process involved a cutover point where traffic would switch from old to new. Something went wrong during cutover. They decided to roll back to the old cluster.

But the rollback itself had issues. The old cluster had received some writes during the confused period. They needed to figure out which transactions had succeeded, which had failed, and which were in a weird in-between state.

**The lesson:** Your rollback plan is only as good as your last time testing it. And "rollback" in a distributed system isn't like hitting undo. State has changed. You need to know what state, and you need tooling to reconcile it.

## AWS us-east-1 Goes Down (2017)

A typo. That's what took down a significant chunk of the internet.

An engineer was debugging an issue with S3's billing system. They ran a command to remove a small number of servers. They made a typo. They removed way more servers than intended.

Those servers were part of the subsystem that manages S3's metadata. Without them, S3 couldn't complete new requests. And because roughly everything on the internet depends on S3 in some way, suddenly things started breaking everywhere. Websites couldn't load images. Services couldn't fetch configuration. It was a mess.

**The lesson:** Human error isn't the root cause. It's a symptom of a system that allows catastrophic mistakes to happen easily. After this, AWS added rate limits on how fast you can remove capacity, plus additional confirmation steps.

The real lesson is about guardrails. How easy is it to accidentally destroy your system? If one typo can take down production, that's an architecture problem, not a people problem.

## Cloudflare's Regex Catastrophe (July 2019)

A regular expression took down Cloudflare's entire network. CPU usage spiked to 100% across all their edge servers, globally, almost simultaneously.

The regex was part of their Web Application Firewall. It had been deployed without issues initially. But a rule update changed how it was being used, and suddenly it hit pathological cases that caused catastrophic backtracking.

Their CPU flatlined everywhere. And because they didn't have CPU-based circuit breakers, the system just sat there, maxed out, unable to process traffic.

**The lesson:** Regex is surprisingly dangerous. But more importantly, changes that seem minor can interact with existing code in unexpected ways. The regex hadn't changed. The context around it had.

Also, have circuit breakers. If something consumes 100% CPU, something should eventually kill it.

## Common Patterns I Keep Seeing

After reading hundreds of these, some patterns emerge:

**1. The cascade.**
Almost no major outage is a single failure. It's failure A, which caused failure B, which uncovered a bug in system C, which overwhelmed system D. The initial trigger is often minor. The cascade is what kills you.

**2. The untested recovery path.**
Systems often fail not during the initial problem but during the recovery. Rolling back has bugs. Failover doesn't work like it did in testing. The backup restore process has never actually been run.

**3. The configuration change.**
A shocking number of outages come from config changes, not code changes. Config often bypasses code review. It's "just data." But that data controls everything.

**4. The dependency you forgot about.**
"Wait, that service depends on this thing too?" Dependency maps are often incomplete. When something core goes down, you discover dependencies you didn't know existed.

**5. The monitoring blind spot.**
"Why didn't our alerts fire?" Because the alerting system depended on the thing that was down. Or because the alert thresholds were set based on normal conditions, not failure conditions.

## What Actually Prevents Outages

Here's what I've seen work:

**Chaos engineering.** Not the fancy Netflix-style stuff, but just regularly asking "what if X failed?" and actually testing it. Turn off that database replica and see what happens. Kill a random pod. You'll find problems before customers do.

**Slow rollouts.** Every major outage I've read could have been smaller if the change had been rolled out gradually. Deploy to 1% of traffic. Wait. Watch. Then expand. It's slower, but it's way faster than a 4-hour incident response.

**Boring technology in the critical path.** The payment system probably shouldn't be your testing ground for that new database you're excited about. Boring and reliable beats exciting and untested for things that really matter.

**Post-mortems that actually change things.** Most post-mortems identify action items. Most action items never get done. The companies that are best at reliability are the ones that actually follow through.

## Failure Is Normal

Here's the thing that surprised me most after reading all these: every company has outages. Google, Amazon, Stripe, Cloudflare. Everyone.

The difference between good and bad is not whether you fail. It's how fast you detect, how fast you recover, and whether you learn.

Systems will fail. The question is whether you've made failure survivable.
