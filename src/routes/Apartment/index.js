module.exports = {
  path: 'apartment/:id',
  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/Apartment'))
    })
  }
}
