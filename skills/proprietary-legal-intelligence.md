# Skill: Proprietary Legal Intelligence Gate

Public, sanitized gate for distinguishing generic legal AI assistance from
firm-specific or client-specific legal intelligence.

## Purpose

Legal AI systems should not treat a law firm's accumulated judgment as generic
model knowledge. Internal criteria, matter history, client context, drafting
preferences, negotiation patterns, risk tolerance, and validated work product
are proprietary legal intelligence.

## Use when the output may include

- matter history, strategy, risk tolerance, or client-specific facts;
- partner or practice-group judgment patterns;
- internal precedents, templates, red flags, or playbooks;
- drafting preferences, fallback clauses, negotiation positions, or counterparty
  patterns;
- compliance policies, risk matrices, third-party assessments, training traces,
  or board/compliance recommendations.

## States

- `PASS`: generic public legal/process knowledge only.
- `PROTECT`: proprietary intelligence is present and may be used only within
  authorized tenant, role, matter, and purpose boundaries.
- `ESCALATE`: external sharing, export, durable-memory promotion, or reuse
  beyond the original purpose requires review.
- `BLOCK`: public-model training, hidden vendor-level memory, cross-tenant reuse,
  or unauthorized disclosure is requested or implied.

## Required checks

1. Identify whether the output contains firm/client-specific legal intelligence.
2. Identify scope: tenant, matter, client, role, and purpose.
3. Confirm that public-model training and cross-tenant reuse are forbidden by
   default.
4. Confirm whether the output is internal, client-shareable, public, or requires
   sanitization.
5. Preserve exportability: the firm/client should be able to retrieve its
   structured intelligence in auditable form.

## Output

```json
{
  "state": "PASS | PROTECT | ESCALATE | BLOCK",
  "categories": [],
  "signals": [],
  "scope": {
    "tenant_scoped": true,
    "role_scoped": true,
    "matter_scoped": true,
    "purpose_scoped": true
  },
  "allowed_use": "",
  "public_model_training_allowed": false,
  "cross_tenant_reuse_allowed": false,
  "exportability_required": true,
  "next_action": ""
}
```
