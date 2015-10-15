# Call log module for Android

## Description

Module for quering phone call log.

## Accessing the module

To access this module from JavaScript, you would do the following:

    var falkolab_callog = require("com.falkolab.callog");

The falkolab_callog variable is a reference to the Module object.

## Reference


### function getLastOutgoingCall

Use to retreave last outgoing call number.

**Return:**

String

### function query

Use to query call log:

**Arguments:**


| Argument | Description |
| ----- | ----------- |
| projection | A list of which columns to return. Passing null will return all columns, which is inefficient.|
| selection | A filter declaring which rows to return, formatted as an SQL WHERE clause (excluding the WHERE itself). Passing null will return all rows for the given URI.|
| selectionArgs | You may include ?s in selection, which will be replaced by the values from `selectionArgs`, in the order that they appear in the selection. The values will be bound as Strings. |
| sortOrder | How to order the rows, formatted as an SQL ORDER BY clause (excluding the ORDER BY itself). Passing null will use the default sort order, which may be unordered. |

**Return:**

Array of object with keys that specified in `projection` argument.

## Usage

Week call log:
```js
var callogModule = require('com.falkolab.callog');
// one week
var d = new Date();
    d.setDate(d.getDate()-7);

var callog = callogModule.query(
    ['_id', callog.NUMBER, callog.TYPE],
    callog.DATE + ">?", [d.getTime()],
    callog.NUMBER + " asc"
);
Ti.API.info('Call Log:', JSON.stringify(callog));
```

Last outgoing call:
```js
Ti.API.info('Last outgoing call:', callogModule.getLastOutgoingCall());
```

## Author

**Andrey Tkachenko**  

email: falko.lab@gmail.com

twitter: @FalkoLab

## License

The MIT License (MIT)

Copyright (c) 2015 Andrey Tkachenko

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
