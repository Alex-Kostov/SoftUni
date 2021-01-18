function rotate(arr,r) {
  for (let i = 0; i < r; i++) {
      let el = arr.pop();
      arr.unshift(el);
  }
  console.log(arr.join(' '));
}
rotate(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15
);