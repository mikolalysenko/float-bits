var fb = require("../bits")

require("tape")("float-bits", function(t) {

  t.equals(fb(1.0), 1065353216)
  t.equals(fb.toInt(-1.0), -1082130432)
  t.equals(fb.fromInt(-1054867456), -10.0)
  t.equals(fb.toUint(31), 1106771968)
  t.equals(fb.fromUint(1056964608), 0.5)

  t.end()
})