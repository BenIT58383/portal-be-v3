module.exports = {
	HOST: "us-cdbr-east-06.cleardb.net",
	USER: "b5e596b8f70c34",
	PASSWORD: "c6297ee8",
	DB: "heroku_06a1fbccef4a729",
	dialect: "mysql",

	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000,
	},
};
