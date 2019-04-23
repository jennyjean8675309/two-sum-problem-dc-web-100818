
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

//Big O for brute force - one nested loop - big O(n*2)

//3. other data structures
//sorting the array using merge sort first

function mergeSort(array){
  let midLength = array.length / 2
  let array1 = array.slice(0, midLength)
  let array2 = array.slice(midLength)

  if (array.length === 1){
    return array
  } else {
    return merge(mergeSort(array1), mergeSort(array2))
  }
}

function merge(array1, array2){
  let sorted = []
  let currentMin;

  while (array1.length !== 0 && array2.length !== 0){
    currentMin = findMinAndRemove(array1, array2)
    sorted.push(currentMin)
  }
  return sorted.concat(array1).concat(array2)
}

function findMinAndRemove(array1, array2){
  let minArray1 = array1[0]
  let minArray2 = array2[0]

  if (minArray1 < minArray2){
    return array1.shift()
  } else {
    return array2.shift()
  }
}

function binarySearchTwoSum(array, sum){
  let tree = buildTree(array)

  //implement a binary search for a matching pair on each number in the array

}

function buildTree(array){
  let sortedArray = mergeSort(array)
  let rootNode = { data: sortedArray[0], rightChild: null, leftChild: null }
  let remainingArray = sortedArray.slice(1)

  remainingArray.forEach(num => {
    //Here I'll insert each num of the array as a node in the binary tree
    if (num > rootNode[data] && rootNode[leftChild] === null){
      rootNode[data] = { data: num, rightChild: null, leftChild: null }
    } else if (){
      
    }
  })
}

console.log(binarySearchTwoSum([2, 3, 4, 3, 6, 7], 6))
