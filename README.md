AdvTxt-readline
===============

A [node readline][readline] interface for [AdvTxt][advtxt], used for local 
testing of your adventures.


[readline]: http://nodejs.org/api/readline.html
[advtxt]: http://github.com/fardog/advtxt

Installation
------------

```
npm install advtxt
npm install advtxt-readline
```

Usage
-----

Just create a simple JavaScript file that includes your MongoDB connection 
string as well as the interface.

```
var mongoUrl = 'mongodb://username:password@localhost/advtxt-test';
var advtxt = new (require('advtxt'))(mongoUrl);
var advtxtreadline = require('advtxt-readline');

var AdvTxt = new advtxtreadline(advtxt);
```

Run that with `node` and you'll be prompted for a username. After that initial 
prompt, anything you enter will be sent directly to your AdvTxt instance.

History
-------

- **v0.0.2**
    - Update to AdvTxt v0.0.5-style replies.
- **v0.0.1**
    - Initial Release

The MIT License (MIT)
---------------------

Copyright (c) 2014 Nathan Wittstock

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

