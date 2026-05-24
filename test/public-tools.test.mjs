import test from 'node:test';
import assert from 'node:assert/strict';
import { scoreAuthority } from '../src/jurisrank.mjs';
import { findIssueRoots } from '../src/rootfinder.mjs';
import { mapLegalMemespace } from '../src/legal-memespace.mjs';

test('JurisRank scores official supreme-court authority above trial-court authority', () => {
  const high = scoreAuthority({ court: 'CSJN', date: '2025-01-01', official: true, citationDepth: 7 });
  const low = scoreAuthority({ court: 'Juzgado de primera instancia', date: '2010-01-01', official: false, citationDepth: 1 });
  assert.equal(high.score > low.score, true);
});

test('Rootfinder detects missing sources and deadline risk', () => {
  const roots = findIssueRoots('La cita no verificada debe revisarse antes del vencimiento del plazo.');
  assert.deepEqual(roots.map((item) => item.root), ['falta_de_fuente', 'plazo_critico']);
});

test('Legal-Memespace primitive separates norm, inference and strategy', () => {
  const moves = mapLegalMemespace('El art. 1 de la ley establece el deber. En consecuencia, hay riesgo. Conviene mitigar.');
  assert.deepEqual(moves.map((item) => item.move), ['normative_premise', 'inference', 'strategic_recommendation']);
});
