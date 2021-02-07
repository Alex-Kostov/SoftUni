class Rectangle {
  constructor(width,height,color) {
    width;
    height;
    color;
  }
  calcArea(){
    return this.width * this.height;
  }
};

let rect = new Rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());







// Write a class for a rectangle object.
//  It needs to have a width (Number),
//   height (Number) and color (String) properties,
//    which are set from the constructor and a calcArea() method,
//     that calculates and returns the rectangle’s area.