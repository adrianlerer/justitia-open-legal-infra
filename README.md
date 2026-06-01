# JustitIA Open Legal Infrastructure

Public, reusable infrastructure for legal AI systems that need **official-source
grounding, citation hygiene, legal workflow schemas, and evaluation cases**.

This repository is the public layer around JustitIA. It does **not** contain the
private JustitIA application, production prompts, tenant logic, paid verticals,
client data, internal corpora, or professional templates.

## Why this exists

Legal AI is moving from chatbots to workflow systems: source retrieval, citation
validation, document review, matter context, evidence trails, and repeatable
evaluations. The useful public contribution is not a clone of a product. It is a
shared layer for safer legal AI:

- connectors to official legal sources;
- schemas for legal-source responses, proprietary-intelligence boundaries,
  agentic-review benches, execution-boundary invariants and legal-quant workflows;
- deterministic utilities for citation/evidence review;
- public versions of research tools;
- synthetic verification cases.

## What is public here

| Area | Contents |
|---|---|
| `schemas/` | JSON Schemas for source references, citations, tool responses, findings, proprietary-intelligence boundaries, agentic-review benches, execution-boundary invariants and legal-quant workflows |
| `connectors/` | Registry of MCP/legal data connectors for Argentina, Spain/UE and comparative work |
| `skills/` | Public, sanitized legal AI skills: grounding, deadlines, citation hygiene, administrative-law reliance gates, proprietary-intelligence gates, agentic-review benches, legal-quant operating model |
| `tools/jurisrank/` | Interoperability notes for the public JurisRank family |
| `tools/rootfinder/` | Interoperability notes for the public RootFinder family |
| `tools/legal-memespace/` | Interoperability notes for Legal-Memespace doctrine mapping |
| `evals/` | Synthetic control cases for legal AI verification |

## Related public projects

This repository is a hub. The canonical public projects remain separate:

- [jurisrank-core](https://github.com/adrianlerer/jurisrank-core): open core for legal citation network ranking and jurisprudential authority analysis.
- [RootFinder-Production](https://github.com/adrianlerer/RootFinder-Production): production-oriented RootFinder materials.
- [rootfinder-legal-ai](https://github.com/adrianlerer/rootfinder-legal-ai): legal AI issue-root analysis project.
- [peralta-metamorphosis](https://github.com/adrianlerer/peralta-metamorphosis): open-source algorithms from the JCLLT constitutional drift paper: JurisRank, RootFinder and Legal-Memespace.
- [Iusmorfos-dawkins-evolucion](https://github.com/adrianlerer/Iusmorfos-dawkins-evolucion): broader public Iusmorfos/evolutionary legal theory materials.

The small utilities under `src/` are lightweight compatibility primitives and
tests. They are not intended to replace those repositories.

## What stays private

- JustitIA production app and UI;
- private SRA routing, prompts and tenant configuration;
- proprietary Argentine/LatAm practice packs;
- client documents, client corpora and work product;
- firm-specific legal intelligence, matter memory, internal criteria, playbooks,
  drafting preferences, negotiation patterns and client risk tolerance;
- internal eval runs from real matters;
- IntegridAI / FLAISimulator proprietary scenarios;
- paid verticals such as directors/sindics and law-firm workflows.

See [docs/public-private-boundary.md](docs/public-private-boundary.md).

## Relationship to the ecosystem

This project is designed to complement, not replace:

- Anthropic's `claude-for-legal` pattern of legal plugins;
- Argentine community work such as `claude-for-legal-argentina`;
- MCP connectors for official sources such as InfoLEG, SAIJ, JUBA, Boletin Oficial
  and Normativa PBA;
- public legal AI applications such as Lavern, Mike and similar research tools.

The goal is interoperability: legal AI systems should be able to say where a
norm, case or factual finding came from, whether it was verified, and what still
requires human review.

## Quick start

```bash
npm test
```

The tests are intentionally small and dependency-free. They verify the public
deterministic utilities, not any private JustitIA behavior.

## Licensing

Code is licensed under Apache-2.0. Non-code legal workflow text, schemas and
public skills are released under CC BY-NC 4.0 unless a file states otherwise.
This keeps the infrastructure reusable while discouraging wholesale commercial
cloning of the legal methodology.

## Professional use

This repository provides engineering and legal-workflow infrastructure. It does
not provide legal advice. Outputs produced by any system using these materials
must be reviewed by a qualified lawyer before professional use.
