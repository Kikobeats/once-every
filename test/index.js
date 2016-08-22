'use strict'

var onceEvery = require('..')

describe('once-every', function () {
  it('n times', function () {
    var n = 2
    var counter = 0

    var fn = onceEvery(n, function () {
      ++counter
    })

    fn()
    counter.should.be.equal(0)
    fn()
    counter.should.be.equal(1)

    fn()
    counter.should.be.equal(1)
    fn()
    counter.should.be.equal(2)
  })
})
