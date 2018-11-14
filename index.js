module.exports = function (source, map) {
  this.callback(
    null,
    `export default function (Component) {
      if (!Component.options.beforeCreate) {
        Component.options.beforeCreate = function () {
          this.docs = ${JSON.stringify(source)}
        }
      } else {
        const beforeCreate = Component.options.beforeCreate
        Component.options.beforeCreate = function () {
          this.docs = ${JSON.stringify(source)}

          beforeCreate.bind(this)()
        }
      }
    }`,
    map
  )
}
