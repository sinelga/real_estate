module.exports = {
  path: ':imgid',
  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/ModalShowImage'))
    })
  }
}