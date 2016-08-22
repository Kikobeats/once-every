'use strict'

function createOnceEvery (times, func) {
  var orig = times

  function onceEvery () {
    if (!--times) {
      times = orig
      return func.apply(this, arguments)
    }
  }

  return onceEvery
}

module.exports = createOnceEvery
