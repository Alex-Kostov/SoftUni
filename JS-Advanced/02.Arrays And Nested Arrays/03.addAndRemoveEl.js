function solve(arr) {
  let newArr = [];
  let initialNum = 1;

  for (let i = 0; i < arr.length; i++) {
    let command = arr[i];

    if (command === 'add') {
      newArr.push(initialNum);
      initialNum++;
    } else if(command === 'remove') {
      let len = newArr.length - 1;
      newArr.splice(len, 1);
      initialNum++;
    }
  }
  if (newArr.length !== 0) {
    for (const num of newArr) {
      console.log(num);
    }
  } else {
    console.log('Empty');
  }
}
solve(['remove',
  'remove',
  'remove']
);