const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi( disksNumber, turnsSpeed) {

	const turns = (2 ** disksNumber) - 1;
	const turnsPerSecond = turnsSpeed / 3600;
	const Math.floor(seconds) = turns / turnsPerSecond;


	return {
		turns,
		seconds
	};


  throw new CustomError('Not implemented');
  
};
