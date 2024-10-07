const condition = (num) => num > 5;

const filter = (arr, fn) => {
  const result = [];
  for (element in arr) {
    if (fn(arr[element])) result.push(arr[element]);
  }

  return result;
};

const arr = [3, 6, 9, 2];
const result = filter(arr, condition);

console.log(`Удалены элементы из массива: ${result}`);