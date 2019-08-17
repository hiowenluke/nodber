
/** @name utils.sqlReplacement */
const fn = (sql, data) => {
	if (!data) return sql;

	Object.keys(data).forEach(key => {
		const reg = new RegExp(':\\b' + key + '\\b', 'g');
		sql = sql.replace(reg, '"' + data[key].replace('"', '\\"') + '"');
	});

	return sql;
};

module.exports = fn;
