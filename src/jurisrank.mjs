export function scoreAuthority(input) {
  const court = courtScore(input.court || '');
  const recency = recencyScore(input.date);
  const official = input.official ? 1 : 0.55;
  const depth = Math.min(1, Math.max(0, Number(input.citationDepth || 0) / 10));
  const negative = input.negativeTreatment ? -0.3 : 0;

  const score = clamp((court * 0.38) + (recency * 0.18) + (official * 0.24) + (depth * 0.2) + negative);

  return {
    score,
    factors: {
      court,
      recency,
      official,
      citationDepth: depth,
      negativeTreatment: Boolean(input.negativeTreatment)
    }
  };
}

function courtScore(court) {
  const value = court.toLowerCase();
  if (/(csjn|corte suprema|tribunal supremo|supreme court)/.test(value)) return 1;
  if (/(tsj|tsjc|scba|superior tribunal|suprema corte)/.test(value)) return 0.86;
  if (/(camara|cámara|audiencia provincial|appeal)/.test(value)) return 0.68;
  if (/(juzgado|trial|first instance|primera instancia)/.test(value)) return 0.42;
  return 0.25;
}

function recencyScore(dateValue) {
  if (!dateValue) return 0.4;
  const year = new Date(dateValue).getUTCFullYear();
  if (!Number.isFinite(year)) return 0.4;
  const age = new Date().getUTCFullYear() - year;
  if (age <= 2) return 1;
  if (age <= 5) return 0.85;
  if (age <= 10) return 0.65;
  if (age <= 20) return 0.45;
  return 0.3;
}

function clamp(value) {
  return Math.max(0, Math.min(1, Number(value.toFixed(3))));
}
