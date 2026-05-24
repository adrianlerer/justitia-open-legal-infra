export function classifyArgumentMove(sentence) {
  const text = sentence.toLowerCase();
  if (/(art\.|ley|codigo|código|reglamento|decreto)/.test(text)) return 'normative_premise';
  if (/(fallo|sentencia|jurisprudencia|precedente|ecli|fallos)/.test(text)) return 'precedential_support';
  if (/(el contrato|la clausula|la cláusula|el documento|consta)/.test(text)) return 'documentary_fact';
  if (/(por ende|por lo tanto|en consecuencia|de ello se sigue)/.test(text)) return 'inference';
  if (/(conviene|recomiendo|deberia|debería|estrategia|mitigar)/.test(text)) return 'strategic_recommendation';
  if (/(riesgo|contingencia|exposicion|exposición)/.test(text)) return 'risk_characterization';
  return 'unclassified';
}

export function morphLegalParagraph(paragraph) {
  const protectedParagraph = paragraph
    .replace(/\bart\./gi, 'art<dot>')
    .replace(/\barts\./gi, 'arts<dot>');

  return protectedParagraph
    .split(/(?<=[.!?])\s+/)
    .filter(Boolean)
    .map((sentence) => sentence.replace(/art<dot>/gi, 'art.').replace(/arts<dot>/gi, 'arts.'))
    .map((sentence) => ({
      sentence,
      move: classifyArgumentMove(sentence)
    }));
}
