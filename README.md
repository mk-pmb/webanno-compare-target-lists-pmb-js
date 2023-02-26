
<!--#echo json="package.json" key="name" underline="=" -->
webanno-compare-target-lists-pmb
================================
<!--/#echo -->

<!--#echo json="package.json" key="description" -->
Compare target lists of web annotations.
<!--/#echo -->



API
---

This module exports one function:

### compareTargetLists(oldAnno, newAnno)

Takes two web annotations `oldAnno` and `newAnno`,
which should be objects that hold a `target` key with arbitrary value.
Ideally, the `target` values conform to the Web Annotation Data Model.

Returns a report, which is an object with these keys:
* `removed`:
  Array of of targets that occurr only in `oldAnno`.
* `added`:
  Array of targets that occurr only in `newAnno`.
* `commonInOld`:
  Array of targets that occurr in both annotations,
  in the order they were found in `oldAnno`.
* `commonInNew`:
  Array of targets that occurr in both annotations,
  in the order they were found in `oldAnno`.
* `commonSameOrder`:
  Boolean, whether the lists of common targets are in same ordering.
  If there are no common targets, they are considered in same order.
* `reordered`:
  Boolean, whether the lists of common targets differ in ordering.
  Opposite of `commonSameOrder`. They come as a pair to help you make
  your script fail more safely in case of future API changes.






Usage
-----

see [test/usage.mjs](test/usage.mjs).
from [test/usage.mjs](test/usage.mjs):
:TODO:

<!--!#include file="test/usage.mjs" transform="mjsUsageDemo1802" -->
<!--!#include file="test/usage.mjs" outdent="  " code="javascript"
  start="  // #BEGIN# usage demo" stop="  // #ENDOF# usage demo" -->
```javascript
var webanno-compare-target-lists-pmb = require('webanno-compare-target-lists-pmb');
D.result  = webanno-compare-target-lists-pmb(null);
D.expect('===',           null);
```
<!--/include-->

```bash
$ webanno-compare-target-lists-pmb foo
bar
```


<!--#toc stop="scan" -->



Known issues
------------

* Needs more/better tests and docs.




&nbsp;


License
-------
<!--#echo json="package.json" key=".license" -->
ISC
<!--/#echo -->
