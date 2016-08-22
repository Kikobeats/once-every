# once-every

![Last version](https://img.shields.io/github/tag/Kikobeats/once-every.svg?style=flat-square)
[![Build Status](https://img.shields.io/travis/Kikobeats/once-every/master.svg?style=flat-square)](https://travis-ci.org/Kikobeats/once-every)
[![Coverage Status](https://img.shields.io/coveralls/Kikobeats/once-every.svg?style=flat-square)](https://coveralls.io/github/Kikobeats/once-every)
[![Dependency status](https://img.shields.io/david/Kikobeats/once-every.svg?style=flat-square)](https://david-dm.org/Kikobeats/once-every)
[![Dev Dependencies Status](https://img.shields.io/david/dev/Kikobeats/once-every.svg?style=flat-square)](https://david-dm.org/Kikobeats/once-every#info=devDependencies)
[![NPM Status](https://img.shields.io/npm/dm/once-every.svg?style=flat-square)](https://www.npmjs.org/package/once-every)
[![Donate](https://img.shields.io/badge/donate-paypal-blue.svg?style=flat-square)](https://paypal.me/Kikobeats)

> Do something every `n` times.

## Install

```bash
$ npm install once-every --save
```

## Usage

```js
var onceEvery = require('once-every')

var fn = onceEvery(2, function () {
  console.log('hello world')
})

fn()
fn() //=> 'hello world'
fn()
fn() //=> 'hello world'
```

## API

### onceEvery(n, fn)

#### n

*Required*
Type: `number`

Count until `n` for do something.

#### fn

*Required*
Type: `function`

What do after count until `n`.

## License

MIT © [Kiko Beats](https://github.com/Kikobeats).
