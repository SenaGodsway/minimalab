# Designing APIs That Survive 5+ Years Without Breaking Clients

I've been on both sides of this. I've built APIs that lasted a decade with minimal breakage. I've also built APIs that needed breaking changes every six months and made everyone's life miserable.

Here's what I learned about the difference.

## The Basics That Actually Matter

### Version From Day One

I know this sounds obvious, but I've seen so many APIs launched without versioning because "we'll add it when we need it."

By the time you need it, you have clients depending on unversioned endpoints. Now you're stuck figuring out how to retrofit versioning without breaking them.

Just put `/v1/` in your paths from the start. Or use a header. Or whatever. The mechanism matters less than the existence of the mechanism.

When you do need v2, you'll thank past-you.

### Make Fields Optional or Have Defaults

Here's a subtle one. When you add a required field to a request, you break every client that doesn't send it.

But if you add an optional field with a sensible default, nobody breaks. Old clients keep working. New clients can opt into the new behavior.

This sounds simple, but it has design implications. Think hard about what should be required. The bar should be "the request literally makes no sense without this value."

### Never Remove or Rename Fields in Responses

You added a field called `userName` in 2019. In 2022 you realize it should really be `username` for consistency. The temptation to just rename it is strong.

Don't.

Someone out there is parsing `userName`. Their code will break. Maybe they're a small customer. Maybe they're your biggest enterprise client. You don't know.

Instead, add `username` as a new field. Keep both. Live with the inconsistency. Ugly but unbroken is better than elegant but broken.

If you really want to remove something, deprecate it. Document the deprecation. Give people a year. Then remove it. In v2.

## The Envelope Pattern

Wrap your responses in a consistent envelope. Something like:

```json
{
  "data": { ... the actual response ... },
  "meta": { ... pagination, timing, whatever ... }
}
```

Why? Because if you don't, you'll eventually need to add metadata and you won't have anywhere to put it without breaking clients who expect your top-level object to be the data.

I learned this the hard way with a list endpoint. Originally it returned:

```json
[
  { "id": 1, "name": "foo" },
  { "id": 2, "name": "bar" }
]
```

Then we needed pagination. But we couldn't just add `totalCount` and `nextPage` to an array response. We had to introduce a breaking change.

If we'd started with `{ "data": [...], "meta": {} }`, pagination would have been additive.

## Dates, Nulls, and Empty States

These three things cause more API pain than almost anything else.

### Dates

Use ISO 8601. Always. `2024-03-15T14:30:00Z`. Include the timezone, preferably UTC.

Not "March 15, 2024". Not a Unix timestamp. Not whatever your database's default format is.

ISO 8601 is unambiguous and parseable by every language. Just use it.

### Nulls vs. Absent vs. Empty

Is `null` different from not including the field? Is `""` (empty string) different from `null`?

You need to decide this upfront and be consistent.

My preference: absent means "not specified." Null means "explicitly set to nothing." For collections, use empty arrays, not null.

But honestly, the specific choice matters less than making a choice and sticking to it.

### Empty States

When there's no data, what do you return?

For a single resource that doesn't exist: 404.
For a list with no items: 200 with an empty array.
For a search with no results: 200 with an empty array.

I've seen APIs return 404 for empty search results. Please don't. "No results" is a valid response, not an error.

## Error Handling That Doesn't Suck

Errors are part of your API contract. They need the same thought as success responses.

Have a consistent error format:

```json
{
  "error": {
    "code": "INVALID_EMAIL",
    "message": "The email address provided is not valid",
    "details": { ... }
  }
}
```

Use meaningful error codes. Not just HTTP status codes. `INVALID_EMAIL` tells me what to fix. `400 Bad Request` tells me almost nothing.

Keep error codes stable. Clients will code against them. `INVALID_EMAIL` in 2020 should still be `INVALID_EMAIL` in 2025.

## Pagination Done Right

You will eventually have more data than fits in one response. Build pagination in from the start.

Cursor-based pagination is more resilient than offset-based. With offsets, if someone adds or removes items while a client is paginating, they'll skip or duplicate items. With cursors, you're always reading from a stable point.

A simple cursor approach:

```json
{
  "data": [ ... ],
  "meta": {
    "nextCursor": "abc123",
    "hasMore": true
  }
}
```

Clients pass `?cursor=abc123` to get the next page. They keep going until `hasMore` is false.

The cursor itself can be an opaque token that encodes whatever you need, ID, timestamp, whatever. Just make sure it's stable and doesn't break when your internal implementation changes.

## Rate Limiting and Quotas

If you don't have rate limits, you'll need them eventually. Better to design them in early.

Return rate limit info in headers:

```
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 73
X-RateLimit-Reset: 1710512400
```

When a client hits the limit, return 429 with a clear message about when they can retry.

Being explicit about limits prevents clients from accidentally hammering you. It also lets good clients back off gracefully.

## Documentation as Contract

Your documentation is part of your API. It's a promise.

If the docs say a field is a string, and you start returning an integer, you broke your contract. Even if it "works fine" for many clients.

Document edge cases. What happens on empty input? What are the limits? What errors can occur? Clients will build against your documented behavior, so be accurate.

And keep historical docs available. If someone is using v1 from 2019, they need the 2019 docs, not docs that have been updated for v3.

## When Breaking Changes Are Unavoidable

Sometimes you really do need to make a breaking change. Security issue. Fundamental design flaw. Regulatory requirement.

Here's how to minimize the pain:

1. Announce early. Months of warning, not weeks.
2. Provide migration guides. Not just "this changed" but "here's how to update your code."
3. Offer parallel running. Old and new endpoints available simultaneously.
4. Sunset gracefully. Deprecation warnings before removal.
5. Have a support path. Let enterprise clients reach out if they need help.

And honestly, just don't do it often. Every breaking change erodes trust. Make them rare enough that they're events, not routine.

## The Long View

Five years is a long time in software. Technologies change. Teams change. The world changes.

But an API that works today and still works in five years, that's something to be proud of.

The secret isn't fancy technology. It's discipline. Adding things is easy. Not breaking things is hard. Choose not-breaking every time you can.

Your future clients will thank you. And so will future-you, who won't be debugging why everything broke after what seemed like a minor change.
