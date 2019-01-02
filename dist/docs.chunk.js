webpackJsonp([0],{1175:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Component=void 0;var l,n=a(1183),r=(l=n)&&l.__esModule?l:{default:l};t.Component=r.default},1180:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=r(a(0)),n=r(a(1181));function r(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=e.id,a=e.title,r=e.children;return l.default.createElement("div",{id:t,className:"column is-10-desktop is-12-mobile"},l.default.createElement(n.default,{title:a},r))}},1181:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l,n=a(0),r=(l=n)&&l.__esModule?l:{default:l},u=a(2);var c=function(e){var t=e.title,a=e.icon,l=e.footerItems,n=e.onClick,u=e.children;return r.default.createElement("div",{className:"card"},t?r.default.createElement("header",{className:"card-header"},r.default.createElement("p",{className:"card-header-title"},t),r.default.createElement("a",{className:"card-header-icon"},a?r.default.createElement("span",{className:"icon"},r.default.createElement("i",{className:"fa fa-"+a})):null)):null,r.default.createElement("div",{className:"card-content"},r.default.createElement("div",{className:"content"},u)),l?r.default.createElement("footer",{className:"card-footer"},l.map(function(e){return r.default.createElement("a",{key:e,className:"card-footer-item",onClick:function(t){return n(e)}},e)})):null)};c.propTypes={title:u.string,icon:u.string},t.default=c},1182:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l,n=a(0),r=(l=n)&&l.__esModule?l:{default:l};t.default=function(e){var t=e.children;return r.default.createElement("small",null,r.default.createElement("span",{className:"icon is-small"},r.default.createElement("i",{className:"fa fa-info-circle"})),r.default.createElement("i",null,t))}},1183:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),n=a(0),r=c(n),u=c(a(1184));function c(e){return e&&e.__esModule?e:{default:e}}var i=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.PureComponent),l(t,[{key:"render",value:function(){return r.default.createElement("div",{className:"container"},r.default.createElement("h1",{className:"title"},"Introduction"),r.default.createElement("h2",{className:"subtitle"},"How to setup and basic configuration"),r.default.createElement("hr",null),r.default.createElement("div",{className:"columns"},r.default.createElement("div",{className:"column is-2"},r.default.createElement("aside",{className:"menu"},r.default.createElement("p",{className:"menu-label"},"General"),r.default.createElement("ul",{className:"menu-list"},u.default.map(function(e){var t=e.id,a=e.title;return r.default.createElement("li",{key:t},r.default.createElement("a",{href:"#"+t},a))})))),r.default.createElement("div",{className:"column is-10"},r.default.createElement("div",{className:"container"},u.default.map(function(e){var t=e.id,a=e.title,l=e.Component;return r.default.createElement(l,{key:t,id:t,title:a})})))))}}]),t}();t.default=i},1184:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=c(a(1185)),n=c(a(1186)),r=c(a(1187)),u=c(a(1189));function c(e){return e&&e.__esModule?e:{default:e}}t.default=[{id:"including-installing",title:"Including / Installing",Component:l.default},{id:"importing",title:"Importing",Component:n.default},{id:"using",title:"Using",Component:r.default},{id:"advanced",title:"Advanced",Component:u.default}]},1185:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=u(a(0)),n=u(a(1180)),r=u(a(407));function u(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=e.title,a=e.id;return l.default.createElement(n.default,{id:a,title:t},l.default.createElement("p",null,"If you're using without bundlers (like webpack and rollup), first include the script after Leaflet"),l.default.createElement("div",{className:"highlight"},l.default.createElement(r.default,{id:"including",language:"html"})),l.default.createElement("p",null,"The library can be downloaded directly in by this ",l.default.createElement("a",{href:"https://github.com/rubenspgcavalcante/leaflet-ant-path-bower/archive/master.zip"},"link ",l.default.createElement("span",{className:"icon is-small"},l.default.createElement("i",{className:"fa fa-download"}))),l.default.createElement("br",null),"Or can be downloaded using a package manager",l.default.createElement("small",null,l.default.createElement("i",null,"(available for npm and bower)"))),l.default.createElement("div",{className:"highlight"},l.default.createElement(r.default,{id:"installing",language:"shell"})))}},1186:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=u(a(0)),n=u(a(1180)),r=u(a(407));function u(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=e.title,a=e.id;return l.default.createElement(n.default,{id:a,title:t},l.default.createElement("p",null,"If you're using ",l.default.createElement("b",null,"ES5")," the AntPath will be inserted on the L global var"),l.default.createElement("div",{className:"highlight"},l.default.createElement(r.default,{id:"withConstructor"})),l.default.createElement("p",null,"You can use also, instead of the constructor, the factory:"),l.default.createElement("div",{className:"highlight"},l.default.createElement(r.default,{id:"withFactory"})),l.default.createElement("hr",null),l.default.createElement("p",null,"But in the case you're using ",l.default.createElement("b",null,"ES6"),", you can just import like this:"),l.default.createElement("div",{className:"highlight"},l.default.createElement(r.default,{id:"importing"})),l.default.createElement("p",null,"Or in the case you're using ",l.default.createElement("b",null,"browserify"),", you can require like this:"),l.default.createElement("div",{className:"highlight"},l.default.createElement(r.default,{id:"requiring"})))}},1187:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=i(a(0)),n=i(a(1180)),r=i(a(407)),u=i(a(1188)),c=i(a(1182));function i(e){return e&&e.__esModule?e:{default:e}}var d={header:["name","returns","description"],rows:[["pause()","boolean","Stops the animation"],["resume()","boolean","Resume the animation"],["reverse()",l.default.createElement("span",null,l.default.createElement("b",null,"this")," instance"),"Revert the animation"],["map(callback)","new AntPath or extended class","Iterates over the latlngs"]]};t.default=function(e){var t=e.title,a=e.id;return l.default.createElement(n.default,{id:a,title:t},l.default.createElement("p",null,"The Ant Path layer, both constructor and factory, can receive the same options of a common ",l.default.createElement("a",{href:"http://leafletjs.com/reference-1.2.0.html#polyline",target:"blank"},"Polyline ",l.default.createElement("span",{className:"icon is-small"},l.default.createElement("i",{className:"fa fa-external-link"}))," "),", plus the following options:"),l.default.createElement("div",{className:"highlight"},l.default.createElement(r.default,{id:"withOptions"}),l.default.createElement(c.default,null,"The above options are the default ones")),l.default.createElement("p",null,l.default.createElement("b",null,"Methods")),l.default.createElement(u.default,d))}},1188:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l,n=a(0),r=(l=n)&&l.__esModule?l:{default:l};t.default=function(e){var t=e.header,a=e.rows;return r.default.createElement("table",{className:"table is-striped is-bordered is-narrow is-fullwidth"},r.default.createElement("thead",null,r.default.createElement("tr",null,t.map(function(e){return r.default.createElement("th",{key:e},e)}))),r.default.createElement("tbody",null,a.map(function(e,t){return r.default.createElement("tr",{key:t},e.map(function(e,a){return r.default.createElement("td",{key:t+", "+a},e)}))})))}},1189:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=s(["regenerator-runtime"],["regenerator-runtime"]),n=s(["core-js"],["core-js"]),r=d(a(0)),u=d(a(1180)),c=d(a(407)),i=d(a(1182));function d(e){return e&&e.__esModule?e:{default:e}}function s(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var f=function(e){return"https://www.npmjs.com/package/"+e},o={"regenerator-runtime":f(l),"core-js/es6/symbol":f(n),"core-js/es6/reflect":f(n)};t.default=function(e){var t=e.id,a=e.title;return r.default.createElement(u.default,{id:t,title:a},r.default.createElement("p",null,"If you're using ",r.default.createElement("b",null,"ES6"),", you can enjoy some extra features of Leaflet AntPath "),r.default.createElement("hr",null),r.default.createElement("p",null,r.default.createElement("b",null,"Spread operator")),r.default.createElement("div",{className:"highlight"},r.default.createElement(c.default,{id:"spread"})),r.default.createElement("p",null,r.default.createElement("b",null,"The AntPath object is also iterable")),r.default.createElement("div",{className:"highlight"},r.default.createElement(c.default,{id:"iterate"})),r.default.createElement("p",null,r.default.createElement("b",null,"You can also extend the AntPath class")),r.default.createElement("div",{className:"highlight"},r.default.createElement(c.default,{id:"extend"})),r.default.createElement("p",null,r.default.createElement("b",null,'Or use the "map" method, simmilar to the ',r.default.createElement("a",{href:"https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/map",target:"blank"},"Array.map ",r.default.createElement("span",{className:"icon is-small"},r.default.createElement("i",{className:"fa fa-external-link"}))))),r.default.createElement("div",{className:"highlight"},r.default.createElement(c.default,{id:"functor"}),r.default.createElement(i.default,null,"The ant path acts as a ",r.default.createElement("b",null,"functor"),", so if you use this method by in a instance of an ",r.default.createElement("b",null,"extended class"),' (in this example, "myAntPath") the method return will also be a instance of the ',r.default.createElement("b",null,"extended class"),", and not the AntPath itself")),r.default.createElement("hr",null),r.default.createElement("h2",{className:"subtitle"},r.default.createElement("span",{className:"icon"},r.default.createElement("i",{className:"fa fa-warning"})),r.default.createElement("span",null,"Warning")),r.default.createElement("p",null,"If you pretend to use this features, you should install and use the following dependencies"),r.default.createElement("ul",{className:"list-group"},Object.keys(o).map(function(e){return r.default.createElement("li",{key:e,className:"list-group-item"},r.default.createElement("a",{href:o[e],target:"blank"},e," ",r.default.createElement("span",{className:"icon is-small"},r.default.createElement("i",{className:"fa fa-external-link"}))))})))}}});
//# sourceMappingURL=docs.chunk.js.map