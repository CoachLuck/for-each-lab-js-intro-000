function iterativeLog(arr) {
  idx = 0
  arr.forEach((elem) => {
    console.log(`${idx}: ${arr[idx]}`);
    idx++;
  })
}

function iterate(call) {
  arr = [" ", " ", " "]

  arr.forEach(call);

  return arr;
}

function doToArray(arr, call) {
  arr.forEach(call);
}
