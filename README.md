Angular Schema Form CK Editor Add-on
======================================

This is an add-on for [Angular Schema Form](https://github.com/Textalk/angular-schema-form/).

[![Build Status](https://travis-ci.org/webcanvas/angular-schema-form-ckeditor.svg?branch=master)](https://travis-ci.org/webcanvas/angular-schema-form-ckeditor)
[![Bower version](https://badge.fury.io/bo/angular-schema-form-ckeditor.svg)](http://badge.fury.io/bo/angular-schema-form-ckeditor)


An awesome addition to Schema Form - now you can allow non devs to create bad html!. 
This add-on uses the CKEditor and an angular adapter to get it working,
[ckeditor](http://ckeditor.com/).
[ng-ckeditor](https://github.com/esvit/ng-ckeditor).


Installation
------------
The ckeditor is an add-on to the Bootstrap decorator. To use it, just include
`bootstrap-ckeditor.min.js` *after* `bootstrap-decorator.min.js`.

You'll need to load a few additional files to use ckeditor:

1. CKEditor
2. ng-ckeditor

Easiest way is to install is with bower, this will also include dependencies:
```bash
$ bower install angular-schema-form-ckeditor
```

Usage
-----
The ckeditor add-on adds a new form type, `ckeditor`, and a new default mapping.

|  Form Type     |  Becomes        |
|:--------------:|:---------------:|
|  ckeditor      |  WYSIWYG widget |


|  Schema                                     |  Default Form type  |
|:-------------------------------------------:|:-------------------:|
| "type": "string" and "format": "ckeditor"   |   ckeditor          |


Form Type Options
-----------------
The `ckeditor` form type takes an optional 'ckeditor' object. This object represents the configuration options for the editor

Here's an example:

```javascript
{
  key: "thehtmlwysiwyg",
  ckeditor: {
    skin: 'Moono'
  }
}
```
