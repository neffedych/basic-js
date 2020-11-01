const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
	if (sampleActivity === 'no-value') return false;
	if (sampleActivity !== 'string') return false;

	const activityNumber = parseFloat(sampleActivity);

	if (activityNumber === 0) return false;
	if (activityNumber < 0) return false;
	if (isNaN(activityNumber)) return false;
	if (activityNumber > MODERN_ACTIVITY) return false;
	
	const constNumber = 0.693;
	const k = constNumber / HALF_LIFE_PERIOD;
	const answer =  Math.ceil(Math.log(MODERN_ACTIVITY/activityNumber) / constNumber);
	return answer;


  throw new CustomError('Not implemented');
 
};