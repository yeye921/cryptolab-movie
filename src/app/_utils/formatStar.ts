export function formatStar(rate: number): number {
  const roundedRate = Math.round(rate * 10) / 10;
  return Math.floor(roundedRate / 2);
}
