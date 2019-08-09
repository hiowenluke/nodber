
const nodber = require('../../');

/** @name nodber.createDatabase */
const fn = async (databaseName) => {

	if (await nodber.isDatabaseExists(databaseName)) {
		return false;
	}

	await nodber.proxy(databaseName);
	return await nodber.isSuccessful();
};

module.exports = fn;
