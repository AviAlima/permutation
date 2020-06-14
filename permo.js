class PremoGen {
  constructor(n) {
    this.initialSize = n;
    this.currMax = n;
    this.arrOfNums = this.getNArr(n);
  }

  getPermo() {
    const permotationArr = new Array(this.initialSize);
    for (let index = 0; index < this.initialSize; index++) {
      permotationArr[index] = this.popRandElement();
    }
    return permotationArr;
  }
  
  // Get Array [1,..,n]
  getNArr(n) {
    return [...Array(n+1).keys()].splice(1)
  }
  
  popRandElement() {
    const arrLength = this.currMax;
    const lastElementIndex = arrLength - 1;

    const randIndex = this.getRandNum(arrLength);
    const element = this.arrOfNums[randIndex];

    this.arrOfNums[randIndex] = this.arrOfNums[lastElementIndex];
    this.arrOfNums[lastElementIndex] = -1; // Just for easy debug
    this.currMax--;
  
    return element
  }
  
  // Get number between 0 to n-1
  getRandNum(n) {
    return Math.floor(Math.random() * n);
  }
}

module.exports = { PremoGen };
