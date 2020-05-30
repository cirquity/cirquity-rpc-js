![CIRQUITY-LOGO](https://cirquity.com/img/logo-small.png)

# Cirquity RPC

[![NPM](https://nodei.co/npm/cirquity-rpc.png?downloads=true&stars=true)](https://nodei.co/npm/cirquity-rpc/)

![Prerequisite](https://img.shields.io/badge/node-%3E%3D8-blue.svg) [![Documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg)](https://cirquity.github.io/cirquity-rpc-js) [![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/cirquity/cirquity-rpc-js/graphs/commit-activity) [![License: GPL-3.0](https://img.shields.io/badge/License-AGPL--3.0-yellow.svg)](https://github.com/cirquity/cirquity-rpc-js/blob/master/LICENSE) [![Twitter: TurtlePay](https://img.shields.io/twitter/follow/cirquity.svg?style=social)](https://twitter.com/cirquity)

#### Master Build Status
[![Build Status](https://travis-ci.org/cirquity/cirquity-rpc-js.png?branch=master)](https://travis-ci.org/cirquity/cirquity-rpc-js) [![Build Status](https://ci.appveyor.com/api/projects/status/github/cirquity/cirquity-rpc?branch=master&svg=true)](https://ci.appveyor.com/project/cirquity/cirquity-rpc/branch/master)

This project is designed to make it very easy to interact with various RPC APIs available within the [Cirquity](https://cirquity.com) Project. This entire project uses [Javascript Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises) to make things fast, easy, and safe.

## Table of Contents

1. [Dependencies](#dependencies)
2. [Installation](#installation)
3. [Initialization](#initialization)
4. [Documentation](#documentation)

## Dependencies

* [NodeJS v8.x](https://nodejs.org) >= 8.x
* [Cirquity](https://github.com/cirquity/cirquity/releases) >= v0.4.1

## Installation

```bash
npm install --save cirquity-rpc
```

## Initialization

### Cirquityd
```javascript
const Cirquityd = require('cirquity-rpc').Cirquityd

const daemon = new Cirquityd({
  host: '127.0.0.1', // ip address or hostname of the Cirquityd host
  port: 18128, // what port is the RPC server running on
  timeout: 2000, // request timeout
  ssl: false, // whether we need to connect using SSL/TLS
  userAgent: 'cirquity-rpc/1.0.0' // specify a customer user-agent or use the default
})
```

### Wallet-API
```javascript
const CirquityAPI = require('cirquity-rpc').CirquityAPI

const wallet = new CirquityAPI({
  host: '127.0.0.1', // ip address or hostname of wallet-api host
  port: 18127, // port wallet-api is running on, default is 8070
  timeout: 5000, // how long to wait before timing out the connection
  ssl: false, // whether or not to connect through SSL
  password: 'password', // your rpc password
  defaultMixin: 3, // should be configured to the default mixin, or false if no default mixin is set
  defaultFee: 0.1, // the default fee of your network, in decimal not atomic units
  decimalDivisor: 100, // how many decimals will be used
  defaultUnlockTime: 0, // default unlock time
  userAgent: 'cirquity-rpc/1.0.0' // specify a customer user-agent or use the default
})
```

## Documentation

You can find the full documentation for this library [here](https://js-rpc.cirquity.com)

## License

```
Copyright (C) 2018-2019 Brandon Lehmann, The Cirquity Developers
Copyright (c) 2019-2020, Deeterd, The Cirquity Developers

Please see the included LICENSE file for more information.
```
