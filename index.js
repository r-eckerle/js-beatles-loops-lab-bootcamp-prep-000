// add solution here
function theBeatlesPlay(arrayMuscians, arrayInstruments) {
  var thisArray = []
  for(let i = 0; i < arrayMuscians.length; i++) {
    thisArray.push(arrayMuscians[i] + " plays " + arrayInstruments[i])
  }
  return thisArray
}

function johnLennonFacts(factsArray) {
  let i = 0
  var newArr = []
  while(i < factsArray.length) {
    newArr.push(factsArray[i] + "!!!")
    i++
  }
  return newArr
}