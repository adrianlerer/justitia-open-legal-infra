# Skill: Argentina Normative Grounding

Public, sanitized grounding protocol for Argentine legal AI work.

## Purpose

Before drafting a legal conclusion, determine whether cited Argentine authority
is:

- stable constitutional/codified law;
- ordinary statute requiring verification;
- decree, regulation, administrative rule or variable-value source requiring
  current retrieval;
- case law requiring official-source or document-source support.

## Required behavior

1. Detect explicit references to laws, decrees, resolutions, communications,
   cases, administrative authorities and court names.
2. Prefer official sources: InfoLEG, SAIJ, Boletin Oficial, official judiciary
   databases, provincial official sources.
3. Do not fabricate a case or norm to complete an argument.
4. If a citation cannot be verified, remove the unsupported citation and insert:
   `[VERIFICAR VIGENCIA: specific reason]`.
5. Separate source tags from confidence tags.

## Suggested tags

- `[Estable]`: constitutional/codified source that is stable and well known.
- `[Verificado]`: source retrieved and checked in this session.
- `[VERIFICAR FUENTE]`: source was not verified.
- `[Inferencia razonada]`: professional inference from verified or stable facts.
- `[documento cliente]`: fact extracted from user-provided material.

## Output block

End with:

```text
Fuentes verificadas:
- ...

Fuentes pendientes:
- [VERIFICAR VIGENCIA: motivo]

Brechas de prueba:
- ...
```
