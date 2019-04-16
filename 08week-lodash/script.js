let _ = require("lodash");
// _.chunk(), _.reverse(), _.without(), _.shuffle(), _.pebbles()
//*pebbles is not a thing
const chunk = () => {
  let arrChunk = [1, 2, 10, 5, 12, 8];
  let chunky = _.chunk(arrChunk, 2);
  //!will seperate the array into smaller arrays with 2 in each array
  console.log(`_.chunk`)
  console.log(arrChunk)

  console.log(chunky)
}
chunk()
//////////////////
const dropping = () => {
  let drop = [1, 2, 10, 5, 12, 8];
  let dropped = _.dropRight(drop, 2)
  //!will drop two off the end of the array
  console.log(`_.dropRight`);
  console.log(drop);
  console.log(dropped)
}
dropping()
////////////////////
const without = () => {
  let withy = [1, 2, 10, 5, 12, 8];
  let withOut = _.without(withy, 1,2)
  //!takes numbers off of the front of the array.. but I think it can only be 1 and 2 
  console.log(`_.without`);
  console.log(withy);
  console.log(withOut)

}
without()
/////////////
const shuffle = () => {
  let shuffle = [1, 2, 10, 5, 12, 8];
  let shuffling = _.shuffle(shuffle)
  //!literally just shuffles everything
  console.log(`_.shuffle`);
  console.log(shuffle);
  console.log(shuffling)

}
shuffle()
//////////////
const reverse = () => {
  let reverse = [1, 2, 10, 5, 12, 8];
  let reversing = _.reverse(reverse)
  //!Permanatly changes the array. Backwards
  console.log(`_.reverse`);
  console.log(reverse);
  console.log(reversing)

}
reverse()