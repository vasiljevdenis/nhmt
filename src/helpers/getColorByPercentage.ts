export function getColorByPercentage(percentage: number): string {
  const startColor = [211, 47, 47];
  const endColor = [46, 125, 50];

  const red = Math.round(startColor[0] + (endColor[0] - startColor[0]) * percentage / 100);
  const green = Math.round(startColor[1] + (endColor[1] - startColor[1]) * percentage / 100);
  const blue = Math.round(startColor[2] + (endColor[2] - startColor[2]) * percentage / 100);

  return "#" + ((1 << 24) + (red << 16) + (green << 8) + blue).toString(16).slice(1);
}