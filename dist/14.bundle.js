webpackJsonp([14],{

/***/ 481:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _Dashboard = __webpack_require__(482);

	var _Dashboard2 = _interopRequireDefault(_Dashboard);

	var _ShowImages = __webpack_require__(483);

	var _ShowImages2 = _interopRequireDefault(_ShowImages);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Apartment = function (_React$Component) {
		_inherits(Apartment, _React$Component);

		function Apartment() {
			_classCallCheck(this, Apartment);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(Apartment).apply(this, arguments));
		}

		_createClass(Apartment, [{
			key: 'componentWillReceiveProps',

			//	  constructor(props){
			//		    super(props);
			//		    this.state = {
			//		      showimagesobj: Object
			//		     
			//		    }
			//		  }

			//	 <ShowImages apartmentobj ={apartment} />

			value: function componentWillReceiveProps() {
				console.log("Apartment receive props");
				console.log(this.props);
			}
		}, {
			key: 'componentDidMount',
			value: function componentDidMount() {

				console.log("mount Apartment");
			}
		}, {
			key: 'render',
			value: function render() {
				var apartment = REAL_ESTATE_OBJS[this.props.params.id];

				return _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(_Dashboard2.default, null),
					_react2.default.createElement(_ShowImages2.default, null),
					this.props.children
				);
			}
		}]);

		return Apartment;
	}(_react2.default.Component);

	module.exports = Apartment;

/***/ },

/***/ 482:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

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
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'h3',
	          null,
	          'Course Dashboard'
	        ),
	        _react2.default.createElement(
	          _reactRouter.Link,
	          { to: '/apartment/0/0' },
	          'Modal'
	        )
	      );
	    }
	  }]);

	  return Dashboard;
	}(_react2.default.Component);

	exports.default = Dashboard;

/***/ },

/***/ 483:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(160);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ShowImages = function (_React$Component) {
	  _inherits(ShowImages, _React$Component);

	  function ShowImages() {
	    _classCallCheck(this, ShowImages);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(ShowImages).apply(this, arguments));
	  }

	  _createClass(ShowImages, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps() {
	      console.log("Show Images receive props");
	      console.log(this.props);
	    }
	  }, {
	    key: 'render',
	    value: function render() {

	      console.log(this.props.apartmentobj);

	      console.log(this.props.children);

	      //			var images = [];
	      //			var apartment = this.props.apartmentobj;
	      //			for (var i = 0; i <  apartment.imagesnumber; i++) {
	      //
	      //				images.push(<li key={`${i}`}><img className='aparimg' src={`/images/${apartment.id}/${i}.jpg`}></img></li>);
	      //
	      //			}
	      return _react2.default.createElement(
	        'div',
	        null,
	        this.props.children,
	        _react2.default.createElement('ul', null),
	        _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(
	            _reactRouter.Link,
	            { to: '/apartment/0/imgid' },
	            'Modal'
	          )
	        )
	      );
	    }
	  }]);

	  return ShowImages;
	}(_react2.default.Component);

	exports.default = ShowImages;

/***/ }

});