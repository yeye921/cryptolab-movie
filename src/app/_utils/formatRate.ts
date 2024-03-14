export function formatRate(rate: number) {
  if (rate % 1 === 0 || (rate * 10) % 1 === 0) {
    return rate.toString();
  }

  const roundedRate = Math.round(rate * 1000) / 1000;
  return roundedRate.toFixed(2);
}
