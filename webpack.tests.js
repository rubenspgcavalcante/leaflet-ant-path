// require all modules ending in "_test" from the
// current directory and all subdirectories
[
    require.context("./src/specs/", true, /\.unit\.js$/),
    require.context("./src/plugin/", true, /\.js$/)

].forEach(context => context.keys().forEach(context));

//# sourceMappingURL=webpack.tests.js.map