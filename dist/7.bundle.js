webpackJsonp([7],{372:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s=n(1),c=o(s),a=n(121),f=function(e){function t(){return r(this,t),u(this,Object.getPrototypeOf(t).apply(this,arguments))}return i(t,e),l(t,[{key:"componentDidMount",value:function(){console.log("mount Messages")}},{key:"componentWillReceiveProps",value:function(){console.log(" Messages receive props"),console.log(this.props)}},{key:"render",value:function(){return this.props.children,c["default"].createElement("div",null,c["default"].createElement("h2",null,"Messages"),c["default"].createElement(a.Link,{to:"/messages/dashboard"},"Modal"),this.props.children)}}]),t}(c["default"].Component);e.exports=f}});