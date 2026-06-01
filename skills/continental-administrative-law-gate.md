# Skill: Continental Administrative-Law Gate

Public, sanitized reliance gate for AI work involving administrative law in
Argentina, Spain, Latin America, France-inspired systems and other continental
public-law traditions.

## Purpose

Before treating an AI output as reliance-ready, check whether the answer uses
the correct public-law frame. Administrative-law analysis should not silently
collapse into private-law reasoning or U.S./common-law administrative-law
categories when the governing system is continental.

## Use when the matter involves

- administrative acts, regulations, licenses, permits, sanctions or fines;
- public procurement, public contracts, concessions, public works or public
  services;
- regulators, inspections, administrative proceedings or state-facing
  disclosures;
- administrative remedies, exhaustion, caducity/deadlines or judicial review;
- state liability or claims against public authorities.

## Required checks

1. Identify jurisdiction and legal family.
2. Identify the public-law object: act, regulation, sanction, license,
   procurement, public contract, public service, state liability, omission or
   other.
3. Check competence, legal basis, factual record, procedure, hearing rights,
   reasons, purpose, proportionality and equality.
4. Classify discretion: regulated power, ordinary discretion, technical
   discretion, emergency power or policy/regulatory choice.
5. Check remedies, exhaustion, deadlines, judicial forum and reversibility.
6. Flag common-law import risk if foreign administrative-law concepts are used
   as governing law rather than comparative references.

## Argentine baseline

For federal Argentine matters, start from the administrative-act validity
elements of Decreto-Ley 19.549/LNPA art. 7:

- competence;
- cause;
- object;
- procedure;
- motivation;
- purpose.

Also check presumption of legitimacy, ejecutoriedad, nullity/irregularity, due
process, reasonableness, proportionality, exhaustion, caducity and judicial
review path where relevant. For national state liability, verify the public-law
statute rather than assuming ordinary private-law liability rules.

## Verdicts

- `APPROVE`: correct administrative-law frame and enough record/source support.
- `APPROVE WITH CONSTRAINTS`: useful but local-law, source, deadline or record
  assumptions must be preserved.
- `ESCALATE`: rights, sanctions, public funds, procurement, state liability or
  regulated conduct are affected and the source/record/process is incomplete.
- `REJECT`: wrong legal family, invented authority, skipped mandatory process,
  hidden missing record, or reliance-ready advice without competent review.

## Failure modes

- treating public-law validity as ordinary contract analysis;
- treating agency expertise as unlimited authority;
- ignoring competence, procedure, record or reasons;
- ignoring remedies, exhaustion or deadlines;
- hiding uncertainty behind fluent public-law prose;
- importing common-law administrative-law doctrine into a civil-law system as
  governing law.
