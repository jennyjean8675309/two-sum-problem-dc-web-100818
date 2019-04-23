
//Given an array of numbers, return every pair of numbers that can be added up to a given target.

//let array = [2, 3, 4, 3, 6, 7]

//Clarify the problem
//find an example

//[5, -2, 4, 9, 1], target is 6

//Problem Solving
//1. break down what your brain is doing

//first, find all possible pairs ([5, -2], [5, 4], [5, 9], [5, 1], [-2, 4]...)
//second, find the sums of the pairs (3, 9, 14, 6, 2)
//when a pair adds to the target number, you know you've found a winner
//return an array of array pairs [[5, 1]]

//2. find the brute force solution

function bruteForceTwoSum(array, sum){
  let sumPairs = []
  for (let num of array){
    let curIndex = array.indexOf(num)
    let otherNums = array.slice(0, curIndex).concat(array.slice(curIndex + 1))
    for (otherNum of otherNums){
      if (num + otherNum === sum){
        sumPairs.push([num, otherNum])
      }
    }
  }
  let midLength = sumPairs.length / 2
  return sumPairs.slice(0, midLength)
}
