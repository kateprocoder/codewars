// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.


function positiveSum(arr) {
    if(arr.length == null){
      return 0
    }
    let newArr = arr.filter((el) => el > 0)
     return newArr.reduce((acc, el) => acc + el, 0)
    
  }