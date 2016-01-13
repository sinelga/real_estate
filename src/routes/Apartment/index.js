module.exports = {
  path: '/apartment/:id',
  
  getChildRoutes(location, cb) {
	    require.ensure([], (require) => {
	      cb(null, [
	        require('./routes/Modalshow'),
	  
	      ])
	    })
	  },
   
  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/Apartment'))
    })
  }
}
