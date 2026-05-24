const ROOT_PATTERNS = [
  { root: 'falta_de_fuente', pattern: /(sin fuente|no surge|no verificad[oa]|verificar fuente|citation needed)/i },
  { root: 'hecho_no_acreditado', pattern: /(no acreditad|sin prueba|hecho controvertido|no consta)/i },
  { root: 'norma_erronea', pattern: /(norma inaplicable|articulo incorrecto|ley equivocada|jurisdiccion incorrecta)/i },
  { root: 'salto_inferencial', pattern: /(por lo tanto|en consecuencia|se sigue que|implica que)/i },
  { root: 'plazo_critico', pattern: /(plazo|caducidad|prescripcion|vencimiento|dias habiles|días hábiles)/i },
  { root: 'riesgo_probatorio', pattern: /(carga de la prueba|prueba|testigo|pericia|documental)/i }
];

export function findIssueRoots(text) {
  const roots = [];
  for (const item of ROOT_PATTERNS) {
    const match = text.match(item.pattern);
    if (match) {
      roots.push({
        root: item.root,
        matched: match[0],
        action: actionFor(item.root)
      });
    }
  }
  return roots;
}

function actionFor(root) {
  const actions = {
    falta_de_fuente: 'verify or remove the assertion',
    hecho_no_acreditado: 'separate fact, inference and proof gap',
    norma_erronea: 'check jurisdiction, version and article',
    salto_inferencial: 'make the legal inference explicit',
    plazo_critico: 'calculate from triggering act and calendar',
    riesgo_probatorio: 'identify burden and missing evidence'
  };
  return actions[root] || 'review manually';
}
