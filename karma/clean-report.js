const istanbul = require("istanbul");
const path = require("path");
const collector = new istanbul.Collector();
const reporter = new istanbul.Reporter();

const remappedJson = require(path.resolve(__dirname, "../coverage/remapped.json"));
const coverage = Object.keys(remappedJson).reduce((result, source) => {
    // only keep js files under src/
    const sourceRegExp = /src\/plugin\/.*\.js$/;
    const matched = source.match(sourceRegExp);

    if (matched) {
        const realPath = matched[0];
        result[realPath] = remappedJson[source];
    }

    return result;
}, {});

collector.add(coverage);

reporter.add("lcovonly");
reporter.add("html");

reporter.write(
    collector,
    true,
    () => console.info("Report clean!")
);