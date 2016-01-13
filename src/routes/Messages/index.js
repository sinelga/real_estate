
module.exports = {
		  path: 'messages',
				
		  getChildRoutes(location, cb) {
		    require.ensure([], (require) => {
		      cb(null, [
		        require('./routes/dashboard')
	
		      ])
		    })
		  },

		  getComponent(location, cb) {
		    require.ensure([], (require) => {
		      cb(null, require('./components/Messages'))
		    })
		  }
		}