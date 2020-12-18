function iterativeLog(arr) {
  idx = 0;
  arr.forEach(elem => {
    console.log(`${idx}: ${elem}`);
    idx++;
  })
}
