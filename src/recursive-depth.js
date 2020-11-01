const CustomError = require("../extensions/custom-error");

const newArray = (arr) => arr.some(item => Array.isArray(item));
module.exports = class DepthCalculator {
  calculateDepth( arr ) {
  	let dep = 1;
  	if (newArray(arr)){
  		const newSecondArr = arr.reduce((acc, cur) => acc.concat(cur),  []);
  		return dep + this.calculateDepth(newSecondArr);
  	}

  	return dep;


    throw new CustomError('Not implemented');
    
  }
};