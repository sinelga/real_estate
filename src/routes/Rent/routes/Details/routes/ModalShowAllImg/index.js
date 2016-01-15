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
  
  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/ModalShowAllImg'))
    })
  }
}