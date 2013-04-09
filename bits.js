"use strict"

var FLOAT_VIEW  = new Float32Array(1)
  , INT_VIEW    = new Int32Array(FLOAT_VIEW.buffer)
  , UINT_VIEW   = new Uint32Array(FLOAT_VIEW.buffer)

function floatToInt(x) {
  FLOAT_VIEW[0] = x
  return INT_VIEW[0]
}

function intToFloat(x) {
  INT_VIEW[0] = x
  return FLOAT_VIEW[0]
}

function floatToUint(x) {
  FLOAT_VIEW[0] = x
  return UINT_VIEW[0]
}

function uintToFloat(x) {
  UINT_VIEW[0] = x
  return FLOAT_VIEW[0]
}

module.exports = floatToInt
module.exports.toInt = floatToInt
module.exports.fromInt = intToFloat
module.exports.toUint = floatToUint
module.exports.fromUint = uintToFloat