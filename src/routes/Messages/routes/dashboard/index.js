module.exports = {
  path: 'dashboard',
//
  getChildRoutes(location, cb) {
	    require.ensure([], (require) => {
	      cb(null, [
	        require('./routes/details')

	      ])
	    })
	  },
  
  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/Dashboard'))
    })
  }
}