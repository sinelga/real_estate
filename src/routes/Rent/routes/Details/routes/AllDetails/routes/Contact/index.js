module.exports = {
  path: 'contact',
//
//  getChildRoutes(location, cb) {
//	    require.ensure([], (require) => {
//	      cb(null, [
//	        require('./routes/Contact')
//
//	      ])
//	    })
//	  },
  
  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/Contact'))
    })
  }
}