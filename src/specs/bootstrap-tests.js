// require all modules ending in "_test" from the
// current directory and all subdirectories
const testsContext = require.context(".", true, /\.unit$/);
testsContext.keys().forEach(testsContext);
//# sourceMappingURL=bootstrap-tests.js.map