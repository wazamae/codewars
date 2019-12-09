function oddRow(n) {
  const m = n*n - n + 1;
  return Array.from( { length: n }, (_,i) => m+i+i );
}

function oddRow1(n) {
  const m = n * (n - 1) + 1;
  return [...Array(n)].map((_, i) => m + 2 * i);
}