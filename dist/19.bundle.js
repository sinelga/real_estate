webpackJsonp([19],{

/***/ 490:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(160);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Dashboard = function (_React$Component) {
			_inherits(Dashboard, _React$Component);

			function Dashboard() {
					_classCallCheck(this, Dashboard);

					return _possibleConstructorReturn(this, Object.getPrototypeOf(Dashboard).apply(this, arguments));
			}

			_createClass(Dashboard, [{
					key: 'componentDidMount',
					value: function componentDidMount() {

							console.log("mount Dashboard ");
					}
			}, {
					key: 'componentWillReceiveProps',
					value: function componentWillReceiveProps() {
							console.log(" Messages Dashboard receive props");
							console.log(this.props);
					}
			}, {
					key: 'render',
					value: function render() {
							return _react2.default.createElement(
									'div',
									null,
									_react2.default.createElement(
											'h2',
											null,
											'Dashboard'
									),
									_react2.default.createElement(
											_reactRouter.Link,
											{ to: '/messages/dashboard/details' },
											'Details'
									),
									this.props.children
							);
					}
			}]);

			return Dashboard;
	}(_react2.default.Component);

	module.exports = Dashboard;

/***/ }

});