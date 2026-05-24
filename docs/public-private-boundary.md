# Public / Private Boundary

## Public by design

The public repository may contain:

- generic legal-source schemas;
- official-source connector registries;
- deterministic scoring utilities;
- public versions or interoperability notes for JurisRank, RootFinder and Legal-Memespace;
- synthetic evaluation cases;
- high-level workflow guidance;
- examples that do not expose client strategy or private prompts.

## Private by design

The public repository must not contain:

- JustitIA production source code;
- private skills from `justitia-web`;
- production prompts or SRA routing weights;
- tenant data, client context, analytics or work product;
- legal opinions, memos, real pleadings or real contracts unless fully public;
- internal corpora, eval traces or model logs;
- IntegridAI / FLAISimulator proprietary scenarios;
- secrets, keys, endpoints or deployment config.

## Contribution rule

When in doubt, publish the **interface**, not the **method**:

- publish the schema for a legal source result;
- keep the proprietary ranking calibration private;
- publish a synthetic eval case;
- keep real firm/client examples private;
- publish a connector wrapper;
- keep paid workflow orchestration private.
