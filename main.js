/******************
 * YOUR CODE HERE *
 ******************/

function onlyOdds(nums) {
  const result = [];

  for (let i = 0; i < nums.length; i++) {
      if(nums[i] % 2 === 1) {
          result.push(nums[i]);
      }
  }
  return result;
}


function onlyEvens(nums) {
  const result = [];

  for (let i = 0; i < nums.length; i++) {
      if(nums[i] % 2 === 0) {
          result.push(nums[i]);
      }
  }
  return result;
}

function shortNamesOnly(names) {
  const shorter = [];

  for (let i = 0; i < names.length; i++) {
      if(names[i].length < 7) { 
          shorter.push(names[i]);
      }
  }
  return shorter;
}

function sNames(names) {
  const namesThatStartWithS = [];

  for (let i = 0; i < names.length; i++) {
      if((names[i][0]) === "S") { 
          namesThatStartWithS.push(names[i]);
      }
  }
  return namesThatStartWithS;
}
/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/


if (typeof onlyOdds === 'undefined') {
  onlyOdds = undefined;
}

if (typeof onlyEvens === 'undefined') {
  onlyEvens = undefined;
}

if (typeof shortNamesOnly === 'undefined') {
  shortNamesOnly = undefined;
}

if (typeof sNames === 'undefined') {
  sNames = undefined;
}


module.exports = {
  onlyOdds,
  onlyEvens,
  shortNamesOnly,
  sNames,
}
