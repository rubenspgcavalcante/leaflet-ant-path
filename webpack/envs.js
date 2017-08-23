const env = type => val => process.env.NODE_ENV === type ? val : null;
const [dev, test, prod] = [env("development"), env("test"), env("production")];

module.exports = {dev, test, prod};