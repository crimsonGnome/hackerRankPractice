function squares(a, b) {
  let floor = Math.sqrt(a);
  floor = Math.ceil(floor);
  let ceil = Math.sqrt(b);
  ceil = Math.floor(ceil);

  return ceil - floor + 1;
}

console.log(squares(3, 17));
