import React from "react";
import DocSection from "./DocSection";
import CodeSnippet from "modules/ui/components/stateless/CodeSnippet";
import Table from "modules/ui/components/stateless/Table";
import Info from "./Info";

const table = {
  header: ["name", "returns", "description"],
  rows: [
    ["pause()", "boolean", "Stops the animation"],
    ["resume()", "boolean", "Resume the animation"],
    [
      "reverse()",
      <span>
        <b>this</b> instance
      </span>,
      "Revert the animation"
    ],
    [
      "map(callback)",
      "new AntPath or extended class",
      "Iterates over the latlngs"
    ]
  ]
};

export default ({ title, id }) => (
  <DocSection id={id} title={title}>
    <p>
      The Ant Path layer, both constructor and factory, can receive the same
      options of a common{" "}
      <a
        href="http://leafletjs.com/reference-1.2.0.html#polyline"
        target="blank"
      >
        Polyline{" "}
        <span className="icon is-small">
          <i className="fa fa-external-link" />
        </span>{" "}
      </a>
      (or vector given on <b>option.use</b>), plus the following options:
    </p>
    <div className="highlight">
      <CodeSnippet id="withOptions" />
      <Info>The above options are the default ones</Info>
    </div>
    <p>
      <b>Supported Vectors</b>
    </p>
    <p>With the <b>option.use</b>, you can use diferent types of vectors on AntPath:</p>
    <ul>
      {[
        [
          "https://leafletjs.com/reference-1.3.4.html#polyline",
          "L.polyline",
          " *default"
        ],
        ["https://leafletjs.com/reference-1.3.4.html#polygon", "L.polygon"],
        ["https://leafletjs.com/reference-1.3.4.html#rectangle", "L.rectangle"],
        ["https://leafletjs.com/reference-1.3.4.html#circle", "L.circle"],
        [
          "https://github.com/elfalem/Leaflet.curve",
          "L.curve",
          " *external lib"
        ]
      ].map(([link, title, info], idx) => (
        <li key={idx}>
          <a href={link} target="blank" rel="nofollow">
            {title}
          </a>
          {info ? <small className="has-text-grey">{info}</small> : null}
        </li>
      ))}
    </ul>
    <Info>Remember to give the proper path format to each one!</Info>
    <hr />
    <p>
      <b>Methods</b>
    </p>
    <Table {...table} />
  </DocSection>
);
