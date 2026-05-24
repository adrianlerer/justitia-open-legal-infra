# Legal Source Connectors

This registry lists public or community legal-source connectors that can be used
by legal AI systems. Entries are descriptive: this repository does not vendor or
endorse third-party code automatically.

## Argentina

| Connector | Source | Use |
|---|---|---|
| InfoLEG MCP | National legislation | Literal statutory text, consolidated norms where available |
| SAIJ MCP | SAIJ | Norms, case law, thesaurus expansion, official/public legal content |
| SAIJ OCR MCP | SAIJ + OCR | Scanned PDFs and older legal materials |
| JUBA MCP | Buenos Aires Province case law | Provincial case-law retrieval |
| Boletin Oficial RA MCP | Boletin Oficial | Official publications and updates |
| [bopba-mcp](https://github.com/adrianlerer/bopba-mcp) | Boletin Oficial de la Provincia de Buenos Aires | Official PBA publications: laws, decrees, resolutions, edicts, tenders and notices |
| [ptn-mcp](https://github.com/voftec/ptn-mcp) | Procuracion del Tesoro de la Nacion | Administrative legal opinions, technical opinions and advisory doctrine from PTN |
| Normativa PBA MCP | Province of Buenos Aires legislation | Provincial legislation and regulations |
| Tesauro SAIJ | Controlled vocabulary | Semantic expansion for Argentine legal search |

## Spain and EU

| Connector | Source | Use |
|---|---|---|
| BOE adapter | BOE | Spanish consolidated legislation |
| CENDOJ adapter | Poder Judicial / CENDOJ | Spanish case law and ECLI resolution |
| EUR-Lex adapter | EUR-Lex | EU legislation and metadata |
| AEPD adapter | AEPD | Data protection guidance, decisions and sanctions |
| AEAT/DGT adapter | AEAT / DGT | Tax guidance and administrative criteria |

## Global / comparative

| Connector | Source | Use |
|---|---|---|
| Legal Data Hunter | Multi-jurisdiction legal index | Comparative legal retrieval and citation resolution |
| Moonlit | EU and global legal sources | Multi-jurisdiction regulatory and case-law research |
| Lawve MCP directory | MCP discovery | Marketplace/discovery for legal MCP servers |

## Connector response requirements

Every connector should return:

- source title;
- source type;
- jurisdiction;
- official/non-official flag;
- locator: article, page, paragraph, ECLI or URL;
- retrieval timestamp;
- hash if text is cached;
- status: verified, stable, needs verification or unverified.

See `schemas/legal-tool-response.schema.json`.

## BOPBA vs Normativa PBA

BOPBA and Normativa PBA should be treated as complementary sources:

- **BOPBA** verifies official publication: date, bulletin, section, PDF and
  publication evidence.
- **Normativa PBA** is better suited for consolidated legal text and normative
  lookup when available.

For production legal analysis, a publication found in BOPBA should not be
treated automatically as current consolidated law. Mark it as official
publication evidence, then verify current text, amendments and repeal status in
the best available consolidated source.

## PTN connector

PTN is a different type of authority. It is not a statute, decree or judgment.
It is administrative legal doctrine from the Procuracion del Tesoro de la
Nacion.

Use PTN for:

- federal administrative-law interpretation;
- state contracts and public-law opinions;
- consistency checks for executive-branch legal criteria;
- identifying advisory doctrine that may matter to agencies.

Do not use PTN as if it were binding case law or consolidated legislation. A PTN
opinion should be tagged as administrative doctrine and weighed against the
applicable statute, decree, regulation and judicial precedent.

Live endpoints reported by the maintainer:

- GitHub: https://github.com/voftec/ptn-mcp
- NPM: https://www.npmjs.com/package/ptn-mcp
- Vercel: https://ptn-mcp.vercel.app
- Prompts: https://ptn-mcp.vercel.app/prompts

## Safety rule

Connectors should expose public legal sources and sanitized metadata only. They
must not expose private client documents, privileged work product, tenant files,
API secrets or private JustitIA corpora.
