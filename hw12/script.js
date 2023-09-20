function pow(num, degree) {
  if (degree === 0) {
    return 1;
  }

  return num * pow(num, degree - 1);
}

console.log(pow(1, 0));  // 1
console.log(pow(2, 3));  // 8
console.log(pow(3, 4));  // 81
console.log(pow(4, 5));  // 1024