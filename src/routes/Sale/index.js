module.exports = {
		  path: 'sale',
				
		  getChildRoutes(location, cb) {
		    require.ensure([], (require) => {
		      cb(null, [
		        require('./routes/Details')
	
		      ])
		    })
		  },

		  getComponent(location, cb) {
		    require.ensure([], (require) => {
		      cb(null, require('./components/Sale'))
		    })
		  }
		}