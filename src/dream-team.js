const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members ) {
	if(!(members instanceof Array)) return false;
	const unsorted = [];
	for (let i = 0; i < members.length; i++) {
		if (typeof members === 'string') {
			const trimMemb = members[i].trim();
			unsorted.push(trimMemb[0].toUpperCase());
		}
	}
    return unsorted.sort().join('');
  throw new CustomError('Not implemented');

};
