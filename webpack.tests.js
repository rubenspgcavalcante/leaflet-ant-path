[
    require.context("./src/specs/", true, /\.unit\.js$/),
    require.context("./src/plugin/", true, /\.js$/)
].forEach(context => context.keys().forEach(context));