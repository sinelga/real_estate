webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },

/***/ 1:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(159);

	var _reactRouter = __webpack_require__(160);

	var _REAL_ESTATE_OBJS = __webpack_require__(218);

	var _REAL_ESTATE_OBJS2 = _interopRequireDefault(_REAL_ESTATE_OBJS);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/*eslint-disable no-unused-vars */

	var rootRoute = {
	  component: 'div',
	  childRoutes: [{
	    path: '/',
	    component: __webpack_require__(219),
	    childRoutes: [__webpack_require__(222), __webpack_require__(472), __webpack_require__(478),
	    //      require('./routes/Course'),
	    __webpack_require__(484), __webpack_require__(486)
	    //      require('./routes/Profile')
	    ]
	  }]
	};

	(0, _reactDom.render)(_react2.default.createElement(_reactRouter.Router, { history: _reactRouter.browserHistory, routes: rootRoute }), document.getElementById('content'));

	// I've unrolled the recursive directory loop that is happening above to get a
	// better idea of just what this huge-apps Router looks like, or just look at the
	// file system :)
	//
	// import { Route } from 'react-router'

	// import App from './components/App'
	// import Course from './routes/Course/components/Course'
	// import AnnouncementsSidebar from './routes/Course/routes/Announcements/components/Sidebar'
	// import Announcements from './routes/Course/routes/Announcements/components/Announcements'
	// import Announcement from './routes/Course/routes/Announcements/routes/Announcement/components/Announcement'
	// import AssignmentsSidebar from './routes/Course/routes/Assignments/components/Sidebar'
	// import Assignments from './routes/Course/routes/Assignments/components/Assignments'
	// import Assignment from './routes/Course/routes/Assignments/routes/Assignment/components/Assignment'
	// import CourseGrades from './routes/Course/routes/Grades/components/Grades'
	// import Calendar from './routes/Calendar/components/Calendar'
	// import Grades from './routes/Grades/components/Grades'
	// import Messages from './routes/Messages/components/Messages'

	// render(
	//   <Router>
	//     <Route path="/" component={App}>
	//       <Route path="calendar" component={Calendar} />
	//       <Route path="course/:courseId" component={Course}>
	//         <Route path="announcements" components={{
	//           sidebar: AnnouncementsSidebar,
	//           main: Announcements
	//         }}>
	//           <Route path=":announcementId" component={Announcement} />
	//         </Route>
	//         <Route path="assignments" components={{
	//           sidebar: AssignmentsSidebar,
	//           main: Assignments
	//         }}>
	//           <Route path=":assignmentId" component={Assignment} />
	//         </Route>
	//         <Route path="grades" component={CourseGrades} />
	//       </Route>
	//       <Route path="grades" component={Grades} />
	//       <Route path="messages" component={Messages} />
	//       <Route path="profile" component={Calendar} />
	//     </Route>
	//   </Router>,
	//   document.getElementById('example')
	// )

/***/ },

/***/ 218:
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	global.REAL_ESTATE_OBJS = [{
	  id: 0,
	  name: 'Apartment',
	  type: 'apartment',
	  city: 'Espoo',
	  country: 'Finland',
	  total_area: 81.5,
	  actions: { action: [{ type: 'selling', price: 200000, images: { image: [{ id: 0, description: 'hole' }, { id: 1, description: 'kitchen' }, { id: 2, description: 'hole' }, { id: 3, description: 'hole' }, { id: 4, description: 'kitchen' }, { id: 5, description: 'kitchen' }, { id: 6, description: 'bathroom' }, { id: 7, description: 'WC' }, { id: 8, description: 'entrance' }, { id: 9, description: 'entrance' }] } }, { type: 'rent', price: 1000, images: { image: [{ id: 0, description: 'hole' }, { id: 1, description: 'kitchen' }, { id: 2, description: 'hole' }, { id: 3, description: 'hole' }, { id: 4, description: 'kitchen' }, { id: 5, description: 'kitchen' }, { id: 6, description: 'bathroom' }, { id: 7, description: 'WC' }, { id: 8, description: 'entrance' }, { id: 9, description: 'entrance' }] } }] },
	  announcements: [{
	    id: 0,
	    title: 'No class tomorrow',
	    body: 'There is no class tomorrow, please do not show up'
	  }],
	  assignments: [{
	    id: 0,
	    title: 'Build a router',
	    body: 'It will be easy, seriously, like 2 hours, 100 lines of code, no biggie',
	    grade: 'N/A'
	  }]

	}, {
	  id: 1,
	  name: 'Apartment',
	  type: 'apartment',
	  city: 'Saint Petersburg',
	  country: 'Russia',
	  total_area: 56,
	  actions: { action: [{ type: 'selling', price: 150000, images: { image: [{ id: 0, description: 'hole' }, { id: 1, description: 'kitchen' }, { id: 2, description: 'hole' }] } }, { type: 'rent', price: 800, images: { image: [{ id: 0, description: 'hole' }, { id: 1, description: 'kitchen' }, { id: 2, description: 'hole' }] } }] },
	  announcements: [{
	    id: 0,
	    title: 'Final exam next wednesday',
	    body: 'You had better prepare'
	  }],
	  assignments: [{
	    id: 0,
	    title: 'PropTypes',
	    body: 'They aren\'t for you.',
	    grade: '80%'
	  }, {
	    id: 1,
	    title: 'Iterating and Cloning Children',
	    body: 'You can totally do it.',
	    grade: '95%'
	  }]
	}];
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },

/***/ 219:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _Dashboard = __webpack_require__(220);

	var _Dashboard2 = _interopRequireDefault(_Dashboard);

	var _GlobalNav = __webpack_require__(221);

	var _GlobalNav2 = _interopRequireDefault(_GlobalNav);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*globals COURSES:true */

	var App = function (_React$Component) {
	  _inherits(App, _React$Component);

	  function App() {
	    _classCallCheck(this, App);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(App).apply(this, arguments));
	  }

	  _createClass(App, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_GlobalNav2.default, null),
	        this.props.children || _react2.default.createElement(_Dashboard2.default, { real_estate_objs: REAL_ESTATE_OBJS })
	      );
	    }
	  }]);

	  return App;
	}(_react2.default.Component);

	module.exports = App;

/***/ },

/***/ 220:
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
	          _reactRouter.Link,
	          { to: '/rent' },
	          _react2.default.createElement('img', { src: 'images/forrent-sign.jpg', width: '300' })
	        ),
	        _react2.default.createElement(
	          _reactRouter.Link,
	          { to: '/sale' },
	          _react2.default.createElement('img', { src: 'images/forsale-sign.jpg', width: '300' }),
	          ' '
	        )
	      );
	    }
	  }]);

	  return Dashboard;
	}(_react2.default.Component);

	exports.default = Dashboard;

/***/ },

/***/ 221:
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

	var dark = 'hsl(200, 20%, 20%)';
	var light = '#fff';
	var styles = {};

	styles.wrapper = {
	  padding: '10px 20px',
	  overflow: 'hidden',
	  background: dark,
	  color: light
	};

	styles.link = {
	  padding: 11,
	  color: light,
	  fontWeight: 200
	};

	styles.activeLink = {

	  background: light,
	  color: dark
	};

	var GlobalNav = function (_React$Component) {
	  _inherits(GlobalNav, _React$Component);

	  function GlobalNav(props, context) {
	    _classCallCheck(this, GlobalNav);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(GlobalNav).call(this, props, context));

	    _this.logOut = _this.logOut.bind(_this);
	    return _this;
	  }

	  _createClass(GlobalNav, [{
	    key: 'logOut',
	    value: function logOut() {
	      alert('log out');
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var user = this.props.user;

	      return _react2.default.createElement(
	        'div',
	        { style: styles.wrapper },
	        _react2.default.createElement(
	          'div',
	          { style: { float: 'left' } },
	          _react2.default.createElement(
	            _reactRouter.Link,
	            { to: '/', style: styles.link },
	            'Home'
	          ),
	          ' ',
	          _react2.default.createElement(
	            _reactRouter.Link,
	            { to: '/rent', style: styles.link, activeStyle: styles.activeLink },
	            'Rent'
	          ),
	          ' ',
	          _react2.default.createElement(
	            _reactRouter.Link,
	            { to: '/sale', style: styles.link, activeStyle: styles.activeLink },
	            'Sale'
	          ),
	          ' ',
	          _react2.default.createElement(
	            _reactRouter.Link,
	            { to: '/calendar', style: styles.link, activeStyle: styles.activeLink },
	            'Calendar'
	          ),
	          ' ',
	          _react2.default.createElement(
	            _reactRouter.Link,
	            { to: '/grades', style: styles.link, activeStyle: styles.activeLink },
	            'Grades'
	          ),
	          ' ',
	          _react2.default.createElement(
	            _reactRouter.Link,
	            { to: '/messages', style: styles.link, activeStyle: styles.activeLink },
	            'Messages'
	          ),
	          ' '
	        ),
	        _react2.default.createElement(
	          'div',
	          { style: { float: 'right' } },
	          _react2.default.createElement(
	            _reactRouter.Link,
	            { style: styles.link, to: '/profile' },
	            user.name
	          ),
	          ' ',
	          _react2.default.createElement(
	            'button',
	            { onClick: this.logOut },
	            'log out'
	          )
	        )
	      );
	    }
	  }]);

	  return GlobalNav;
	}(_react2.default.Component);

	GlobalNav.defaultProps = {
	  user: {
	    id: 1,
	    name: 'Ryan Florence'
	  }
	};

	exports.default = GlobalNav;

/***/ },

/***/ 222:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = {
			path: 'rent',

			getChildRoutes: function getChildRoutes(location, cb) {
					__webpack_require__.e/* nsure */(1, function (require) {
							cb(null, [__webpack_require__(223)]);
					});
			},
			getComponent: function getComponent(location, cb) {
					__webpack_require__.e/* nsure */(6, function (require) {
							cb(null, __webpack_require__(471));
					});
			}
	};

/***/ },

/***/ 472:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = {
			path: 'sale',

			getChildRoutes: function getChildRoutes(location, cb) {
					__webpack_require__.e/* nsure */(7, function (require) {
							cb(null, [__webpack_require__(473)]);
					});
			},
			getComponent: function getComponent(location, cb) {
					__webpack_require__.e/* nsure */(11, function (require) {
							cb(null, __webpack_require__(477));
					});
			}
	};

/***/ },

/***/ 478:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = {
	  path: '/apartment/:id',

	  getChildRoutes: function getChildRoutes(location, cb) {
	    __webpack_require__.e/* nsure */(12, function (require) {
	      cb(null, [__webpack_require__(479)]);
	    });
	  },
	  getComponent: function getComponent(location, cb) {
	    __webpack_require__.e/* nsure */(14, function (require) {
	      cb(null, __webpack_require__(481));
	    });
	  }
	};

/***/ },

/***/ 484:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = {
	  path: 'grades',
	  getComponent: function getComponent(location, cb) {
	    __webpack_require__.e/* nsure */(15, function (require) {
	      cb(null, __webpack_require__(485));
	    });
	  }
	};

/***/ },

/***/ 486:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = {
			path: 'messages',

			getChildRoutes: function getChildRoutes(location, cb) {
					__webpack_require__.e/* nsure */(16, function (require) {
							cb(null, [__webpack_require__(487)]);
					});
			},
			getComponent: function getComponent(location, cb) {
					__webpack_require__.e/* nsure */(20, function (require) {
							cb(null, __webpack_require__(491));
					});
			}
	};

/***/ }

});