function odd_row(n) {
  let odd_array = [];
  let start = n ** 2 - n + 1;
  for (let i =0; i < n; i++) {
    odd_array.push(start + 2 * i);
  }
  console.log(odd_array);
}

odd_row(5);
