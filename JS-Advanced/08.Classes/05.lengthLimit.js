class Stringer {
  constructor(str, len) {
    this.innerString = str;
    this.innerLength = Number(len);
  }
  increase(length) {
    this.innerLength += length;
  }
  decrease(length) {
    if (this.innerLength - length < 0) {
      this.innerLength = 0;
    }
    else {
      this.innerLength -= length;
    }
  }
  toString() {
    if (this.innerLength <= 0) {
      this.innerLength = 0;
      return '...';
    } else {
      let end = this.innerString.length - this.innerLength;
      if (end > 0) {
        return this.innerString.slice(0, end) + '...';
      } else {
        return this.innerString;
      }
    }
  }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4);
console.log(test.toString()); // Test


