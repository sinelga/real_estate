module.exports = {
		  path: 'rent',
				
		  getChildRoutes(location, cb) {
		    require.ensure([], (require) => {
		      cb(null, [
		        require('./routes/Details')
	
		      ])
		    })
		  },

		  getComponent(location, cb) {
		    require.ensure([], (require) => {
		      cb(null, require('./components/Rent'))
		    })
		  }
		}