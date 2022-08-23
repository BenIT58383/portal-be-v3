module.exports = {
	HOST: "us-cdbr-east-06.cleardb.net",
	USER: "bcb92c9cc9e61c",
	PASSWORD: "00662531",
	DB: "heroku_621240dae624e4a",
	dialect: "mysql",

	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000,
	},
};
