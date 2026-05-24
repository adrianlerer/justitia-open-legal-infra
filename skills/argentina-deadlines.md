# Skill: Argentina Deadlines

Public, sanitized protocol for calculating Argentine procedural and
administrative deadlines.

## Scope

Use for:

- judicial business days;
- administrative business days;
- calendar days;
- months and years;
- limitation and caducity warnings;
- suspensions such as judicial recess, mandatory mediation or SECLO when
  applicable.

## Inputs required

- jurisdiction and forum;
- matter type;
- act triggering the deadline;
- notification date and time;
- whether the date was electronic or physical;
- applicable recess or suspension;
- local holidays if relevant;
- whether the deadline is procedural, administrative or substantive.

## Output

1. Deadline rule and source.
2. Computation assumptions.
3. Day-by-day calculation when high risk.
4. Final date.
5. Verification flags.

## Safety

If any input is missing, do not give a definitive deadline. Provide a provisional
calculation and list missing assumptions.
