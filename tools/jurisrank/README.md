# JurisRank — Interoperability Notes

Canonical project:

- https://github.com/adrianlerer/jurisrank-core

This folder does not replace `jurisrank-core`. It provides a small compatibility
primitive and schema alignment for legal AI systems that want to consume
JurisRank-style authority signals.

The local primitive exposes only a simple, transparent baseline:

- court hierarchy;
- recency;
- official-source status;
- citation depth;
- negative treatment flag.

Use the canonical repository for the actual JurisRank open core.
