# From MVP to Scale: The Architectural Decisions I Regret (and the Ones I Don't)

Look, I've shipped products that started as weekend hacks and somehow turned into things serving millions of requests. Along the way, I made decisions that still haunt me. I also made decisions that I thought were shortcuts but actually saved us.

Let me be honest about both.

## The Shortcuts I Took (And Whether They Burned Me)

### Monolith First? Best Decision Ever.

Everyone told us to start with microservices. "You'll need to scale eventually," they said. "It'll be harder to break apart later."

We ignored them. We built a Django monolith.

Three years later, we're still running that monolith. We've extracted exactly two services from it. The rest? Still happily coupled together. And you know what? The deployment is simple. Debugging is simple. New engineers can understand the whole thing in a week.

The microservices hype is real, but the complexity cost is rarely mentioned upfront. If you're not Netflix, you probably don't need 47 services for your todo app.

### Skipping Database Migrations Properly

Okay, this one burned me bad.

In the early days, I would just modify tables directly in production. "It's fine, we only have like 200 users." I told myself we'd set up proper migrations later.

Later never came until it had to.

We ended up with three different versions of our schema across staging, production, and local dev. Nobody knew which was correct. We spent an entire sprint just reconciling the differences.

Just use migrations from day one. Even if it feels like overkill. Even if you have 12 users. Trust me.

### Hardcoding Configuration

I hardcoded API keys. I hardcoded feature flags. I hardcoded the number of items per page because "we'll never change it."

We changed it.

Some of these were fine, honestly. The items-per-page thing took 10 minutes to fix when we needed to. But the API keys? Those ended up in git history. We had to rotate everything and it was a whole thing.

The lesson isn't "never hardcode anything." It's more like, be intentional about what you're hardcoding and whether future-you will hate present-you for it.

## Tech Debt That Actually Mattered

Not all tech debt is equal. Some of it will actively slow you down. Some of it just sits there, being ugly but harmless.

Here's what actually mattered for us:

**Test coverage on critical paths.** We skipped tests for our payment flow because "we'll add them later." We had three billing bugs in production that cost us real money and real customer trust. This debt compounds fast.

**API contracts.** We changed our API responses without versioning because we controlled all the clients. Then we got our first enterprise customer who built against our API. Breaking changes became a massive coordination effort.

**Logging and observability.** For months, when something broke, our debugging process was basically "guess and pray." Adding proper structured logging felt like a chore, but it probably saved us 100 hours of debugging time over the next year.

## Tech Debt That Didn't Matter (Much)

**That one weird util function.** You know the one. It's got a TODO from 2019. It works. Nobody touches it. It's fine.

**Inconsistent naming conventions.** Yeah, some files are camelCase and some are snake_case. It's annoying. It has never caused a bug.

**The deprecated library we never migrated.** We've been "about to migrate" away from that old HTTP client for two years. It still works. The new one is marginally better. This migration would take a sprint. It's not worth it.

The pattern I've noticed: tech debt that affects developer velocity or system reliability matters a lot. Tech debt that's just aesthetically unpleasant can usually wait forever.

## When Rewrites Are Actually Worth It

I've seen maybe 30 proposed rewrites in my career. About 4 of them were good ideas.

Rewrites are worth it when:

**The current system genuinely cannot do what you need.** Not "it's hard to add features" but "it's architecturally impossible." We had a real-time system built on polling. We needed sub-second updates. No amount of optimization was going to fix that. Rewrite was the only option.

**Nobody understands the system anymore.** If the original authors are gone and the remaining team is afraid to touch core components, you've got a knowledge problem that compounds over time.

**The technology is actively dying.** Not "unpopular" but actually unsupported. Security patches stop coming. Dependencies become unmaintained. This is rare, but it happens.

Rewrites are NOT worth it when:

**You just want to use a new framework.** I've been guilty of this. "If we rewrite in Rust it'll be so much faster!" Maybe. But will it be fast enough to justify 6 months of work? Usually no.

**The system is ugly but functional.** Ugly systems that work are better than beautiful systems that don't exist yet.

**You're hoping to fix organizational problems with technology.** If your team has communication issues, a rewrite won't fix that. You'll just have communication issues in a new codebase.

## What I'd Do Differently

If I could go back to the MVP days, here's what I'd change:

1. Set up observability from week one. Logging, metrics, error tracking. Not perfect, just present.

2. Version the API immediately. Even if v1 is the only version for two years.

3. Write tests for the money path. Whatever touches payments, authentication, or core user data gets tests.

4. Everything else? Ship fast and fix later.

The trick isn't avoiding all tech debt. It's choosing which debt to take on intentionally, knowing the interest rate on each type.

Some debt you'll never pay back. And honestly, that's fine. Just don't be surprised when the bill comes due on the expensive stuff.
