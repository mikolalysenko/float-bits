float-bits
==========
Pulls out an integer representation of the bits of a 32-bit float in javascript.  In C/C++, you would do most of this stuff using pointers, for example:

```C++
int float2int(float y) {
  return *(int*)&y;
}
```

## Install

    npm install float-bits
    
## Example

```javascript
> var fb = require("float-bits")
> fb(1.0)
1065353216
> fb.toInt(-1.0)
-1082130432
> fb.fromInt(-1054867456)
-10.0
> fb.toUint(31)
1106771968
> fb.fromUint(1056964608)
0.5
```

### `require("float-bits")(y)`
Returns a signed integer representing the bits of the float encoded by `y`.

### `require("float-bits").toInt(y)`
Same as `require("float-bits")`

### `require("float-bits").fromInt(y)`
Converts a signed integer reprsenting the bits of `y`

### `require("float-bits").toUint(y)`
Converts a float to an unsigned integer

### `require("float-bits").fromUint(y)`
Converts an unsigned integer to a float

# Credits
(c) 2013 Mikola Lysenko. MIT License