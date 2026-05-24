# Skill: Citation Hygiene

## Purpose

Identify unsupported, malformed or risky legal citations before a draft leaves
the workspace.

## Checks

- Does the cited norm exist?
- Is the article number plausible?
- Is the source official or private?
- Is the norm current, amended, repealed or future-effective?
- Is the jurisdiction correct?
- For cases: is there a court, date, case name, reporter/ECLI/source locator?
- Is the citation doing legal work or merely decorating the paragraph?

## Output

Classify each citation:

- `OK`: usable as drafted;
- `FIX`: citation likely real but format/source must be corrected;
- `VERIFY`: cannot confirm;
- `REMOVE`: unsupported or misleading.
