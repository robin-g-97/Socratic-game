import type {
  DialogueOption,
  Dimension,
  ResultBand,
  Scenario,
} from "@/types/scenario";

export type ScoreSummary = {
  totalScore: number;
  dimensionTotals: Record<Dimension, number>;
  resultBand: ResultBand;
};

export function calculateScore(
  scenario: Scenario,
  selectedOptions: DialogueOption[],
): ScoreSummary {
  const dimensionTotals = scenario.dimensions.reduce(
    (totals, dimension) => ({ ...totals, [dimension]: 0 }),
    {} as Record<Dimension, number>,
  );

  const totalScore = selectedOptions.reduce((total, option) => {
    dimensionTotals[option.dimension] += option.score;
    return total + option.score;
  }, 0);

  const resultBand =
    scenario.resultBands.find(
      (band) => totalScore >= band.min && totalScore <= band.max,
    ) ?? scenario.resultBands[scenario.resultBands.length - 1];

  return {
    totalScore,
    dimensionTotals,
    resultBand,
  };
}

export function formatDimensionName(dimension: Dimension): string {
  return dimension
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
