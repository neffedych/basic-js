const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(year, month, day) {

   if(typeof date !== 'object') return 'Unable to determine the time of year!';
   let checkFake = Date.now() - date;
   let result = new Date(date);
   let month = result.getMonth();

	if (month === 0) {
   	return 'winter';
   } else if (month === 1) {
   	return 'winter';
   }  else if (month === 2) {
   	return 'spring';
   } else if (month === 3) {
   	return 'spring';
   } else if (month === 4) {
   	return 'spring';
   } else if (month === 5) {
   	return 'summer';
   } else if (month === 6) {
   	return 'summer';
   } else if (month === 7) {
   	return 'summer';
   } else if (month === 8) {
   	return 'autumn';
   } else if (month === 9) {
   	return 'autumn';
   } else if (month === 10) {
   	return 'autumn';
   } else if (month === 11) {
   	return 'winter';
   }

  throw new CustomError('Not implemented');
    
};

//getMonth() - probably 
