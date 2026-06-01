# Skill: Execution Boundary Invariants

## Purpose

Use this skill when a legal or compliance AI output may move from analysis into
real-world action: filing, signing, sending, reporting, sanctioning, approving,
terminating, disclosing, escalating, or committing an institution externally.

The core distinction is simple: a system that generates text is not the same as a
system that is permitted to act. Review must happen before execution, not only
after the fact through logs or explanations.

## Action Classes

Classify the output first:

- `representation`: explains, maps, summarizes or classifies.
- `recommendation`: suggests what a person or institution should do.
- `draft`: creates a document, notice, filing, clause, report or communication.
- `institutional_commitment`: would send, file, sign, approve, sanction,
  report, terminate, disclose or otherwise alter a legal/compliance state.

## Invariants

Before an output crosses into reliance or action, check:

1. `source_provenance`
   - Is the source, document, evidence or verification gap visible?

2. `delegated_authority`
   - Who is authorized to decide or commit: lawyer, client, board, officer,
     court, regulator, compliance function or other actor?

3. `uncertainty_state`
   - Does material uncertainty change workflow state rather than merely adding
     cautious prose?

4. `transition_gate`
   - Is there a clear state: `PASS`, `REVIEW`, `ESCALATE` or `BLOCK`?

5. `reversibility`
   - Is the output confined to internal draft/issue-map status if authority is
     missing?

## Required Output

Return:

- action class;
- satisfied and missing invariants;
- transition state;
- action that is allowed;
- action that is blocked;
- next step to make the output reliance-ready.

## Public/Private Boundary

This public skill contains only generic invariants and state vocabulary. Do not
include private thresholds, reviewer identities, tenant routing rules, client
matters, internal prompts, or firm-specific playbooks.
