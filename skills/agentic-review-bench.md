# Skill: Agentic Review Bench

## Purpose

Use this skill when a legal AI output may become professional reliance, client
advice, a filing, a board decision, a compliance action, a negotiation position,
or a document that others will execute.

The goal is not to imitate any particular legal AI product. The portable lesson
is simpler: a legal output should pass through distinct review functions before
it becomes a real-world commitment.

## Review Lanes

Run the output through six lanes:

1. **Document graph**
   - Identify root nodes and dependencies.
   - Do not analyze a document as a flat list of paragraphs when meaning flows
     from definitions, higher norms, facts, remedies, procedural posture or
     annexes.

2. **Source verification**
   - Separate verified source, stable source, client document, inference and
     unresolved source gap.
   - Unsupported legal propositions should not be smoothed over by fluent prose.

3. **Adversarial review**
   - Ask how a counterparty, judge, regulator, auditor, board or claimant would
     attack the output.
   - Preserve material disagreement instead of forcing consensus.

4. **Decision translation**
   - State who must decide, what evidence is missing, what timing matters and
     what the cost of error is.

5. **Human gate**
   - Identify points that require a qualified professional or institutional
     actor before reliance.

6. **Transition gate**
   - Classify the output:
     - `PASS`: usable with ordinary professional review.
     - `REVIEW`: useful but incomplete.
     - `ESCALATE`: requires responsible human/institutional decision.
     - `BLOCK`: do not use for external reliance or action.

## Required Output

Return:

- document type;
- root nodes and critical dependencies;
- source-verification status;
- adversarial weaknesses;
- human gate if needed;
- transition state;
- next action.

## Public/Private Boundary

This skill is public and generic. It must not include client strategy, real
matter data, proprietary thresholds, private routing logic, tenant memory, or
firm-specific playbooks.
