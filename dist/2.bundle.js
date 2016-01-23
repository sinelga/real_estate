webpackJsonp([2],{

/***/ 224:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = {
	  path: 'modal',
	  //
	  //  getChildRoutes(location, cb) {
	  //	    require.ensure([], (require) => {
	  //	      cb(null, [
	  //	        require('./routes/Modal')
	  //
	  //	      ])
	  //	    })
	  //	  },

	  getComponent: function getComponent(location, cb) {
	    __webpack_require__.e/* nsure */(3, function (require) {
	      cb(null, __webpack_require__(225));
	    });
	  }
	};

/***/ },

/***/ 468:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = {
	  path: 'alldetails',
	  //
	  getChildRoutes: function getChildRoutes(location, cb) {
	    __webpack_require__.e/* nsure */(4, function (require) {
	      cb(null, [__webpack_require__(469)]);
	    });
	  },
	  getComponent: function getComponent(location, cb) {
	    __webpack_require__.e/* nsure */(6, function (require) {
	      cb(null, __webpack_require__(474));
	    });
	  }
	};

/***/ }

});