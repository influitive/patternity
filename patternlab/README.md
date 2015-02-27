## About the Node Version of Pattern Lab

The Node version of Pattern Lab is, at its core, a static site generator. It combines platform-agnostic assets, like the [Mustache](http://mustache.github.io/)-based patterns and the JavaScript-based viewer, with a Node-based "builder" that transforms and dynamically builds the Pattern Lab site. By making it a static site generator, the Node version of Pattern Lab strongly separates patterns, data, and presentation from build logic. The Node version is a work in progress, the [PHP version](https://github.com/pattern-lab/patternlab-php) should be seen as a reference for other developers to improve upon as they build their own Pattern Lab Builders in their language of choice.

### Getting Started

To run patternlab-node, just do the following from the command line at the root of patternlab-node: 

1. `npm install`
2. `npm install -g grunt-cli`
3. `gulp server`
4. Go to http://localhost:9001

This creates and hosts all patterns, the styleguide, and the pattern lab site.

### Command Line Interface

The following are gulp tasks you may execute:

##### `gulp lab`
Patternlab runs the full builder, compiling patterns, and constructing the front-end site. This is the default task.

##### `gulp patterns`
Compile the patterns only, outputting to ./public/patterns

##### `gulp prelab`
Runs pre-pattern-lab tasks 'clean', 'banner', and 'copy'

##### `gulp copy`
Copies static assets to './public'

##### `gulp` travis
Run the nodeunit test suite

##### `gulp version`
Retrieve the version of patternlab-node you have installed

##### `gulp help`
Get more information about patternlab-node, pattern lab in general, and where to report issues.

### Config Options

##### Watching Changes
To have patternlab-node watch for changes to either a mustache template, data, or stylesheets, run `grunt watch`. The `Gruntfile` governs what is watched. It should be easy to add scss or whatever preprocessor you fancy.

##### Nav Bar Controls
If you don't have a need for some of the nav-bar tools in the patternlab frontend, you can turn them off in `config.json`.

The current selection is as follows. It reflects support versus patternlab-php.

```
"ishControlsVisible": {
	"s": true,
	"m": true,
	"l": true,
	"full": true,
	"ranndom": true,
	"disco": true,
	"hay": true,
	"mqs": false,
	"find": false,
	"views-all": true,
	"views-annotations": true,
	"views-code": true,
	"views-new": true,
	"tools-all": true,
	"tools-follow": false,
	"tools-reload": false,
	"tools-shortcuts": false,
	"tools-docs": true
}
```

##### Verbose Mode
`patternlab.json` is a file created for debugging purposes. Set `debug` to true in `.config.json` to see all the secrets.

##### Pattern States
You can set the state of a pattern by including it in `config.json` too. The out of the box styles are in progress (orange), in review (yellow), and complete (green).
Pattern states should be lowercase and use hyphens where spaces are present.
```
"patternStates": {
	"colors" : "inprogress",
	"fonts" : "inreview",
	"three-up" : "complete"
}
```

##### Server
Running `gulp serve` will compile the patternlab front end and host it on <a href="http://localhost:9001">http://localhost:9001</a> by default. This can be changed in the `Gruntfile.js`

**Next steps: Livereload and watches**

### Under Active Development

[![Build Status](https://travis-ci.org/pattern-lab/patternlab-node.png?branch=master)](https://travis-ci.org/pattern-lab/patternlab-node) The Node version of Pattern Lab is under active development by [@bmuenzenmeyer](https://twitter.com/bmuenzenmeyer) and contributors. Pull requests welcome, but please take a moment to read the [guidelines](https://github.com/pattern-lab/patternlab-node/blob/master/CONTRIBUTING.md).

### Forward, To the Specification!

Dave Olsen has published the [specification](https://github.com/pattern-lab/the-spec/blob/draft/SPEC.md) for Pattern Lab ports. Development will be oriented toward compliance with this as the spec and the port mature together. 

### Is Pattern Lab a Platform or a Build Tool?

A lot of good conversation has revolved around whether Pattern Lab is a platform or a tool in the toolbox, part of a larger solution. It's my goal to #1) adhere to the specification and #2) meet the needs of both use cases.

If you want to only build the patterns, alter your `Gruntfile.js` patternlab task to the following:

```
grunt.registerTask('default', ['clean', 'concat', 'patternlab:only_patterns', /*'sass',*/ 'copy']);
```

This will output compiled patterns to ./public/patterns/

===

**THE FOLLOWING IS FROM THE PATTERNLAB-PHP PROJECT.  A LOT STILL APPLIES TO PATTERNLAB-NODE, BUT IT HAS NOT BEEN ADAPTED YET.  USE AT YOUR OWN PERIL**

===

### Demo

You can play with a demo of the front-end of the PHP version of Pattern Lab at [demo.pattern-lab.info](http://demo.pattern-lab.info).

### Getting Started

The PHP version of Pattern Lab should be relatively easy for anyone to get up and running. 

* [Requirements](https://github.com/pattern-lab/patternlab-php/wiki/Requirements)
* [Installing the PHP Version of Pattern Lab](https://github.com/pattern-lab/patternlab-php/wiki/Installing-the-PHP-Version-of-Pattern-Lab)
* [Generating the Pattern Lab Website for the First Time](https://github.com/pattern-lab/patternlab-php/wiki/Generating-the-Pattern-Lab-Website-for-the-First-Time)
* [Editing the Pattern Lab Website Source Files](https://github.com/pattern-lab/patternlab-php/wiki/Editing-the-Pattern-Lab-Website-Source-Files)
* [Using the Command-line Options](https://github.com/pattern-lab/patternlab-php/wiki/Using-the-Command-line-Options)

### Working with Patterns

Patterns are the core element of Pattern Lab. Understanding how they work is the key to getting the most out of the system. Patterns use [Mustache](http://mustache.github.io/) so please read [Mustache's docs](http://mustache.github.io/mustache.5.html) as well.

* [How Patterns Are Organized](https://github.com/pattern-lab/patternlab-php/wiki/How-Patterns-Are-Organized)
* [Adding New Patterns](https://github.com/pattern-lab/patternlab-php/wiki/Adding-New-Patterns)
* [Reorganizing Patterns](https://github.com/pattern-lab/patternlab-php/wiki/Reorganizing-Patterns)
* [Converting Old Patterns](https://github.com/pattern-lab/patternlab-php/wiki/Converting-Old-Patterns)
* ["Hiding" Patterns in the Navigation](https://github.com/pattern-lab/patternlab-php/wiki/Hiding-Patterns-in-the-Navigation)
* [Including One Pattern Within Another via Partials](https://github.com/pattern-lab/patternlab-php/wiki/Including-One-Pattern-Within-Another)
* [Linking Directly to a Pattern](https://github.com/pattern-lab/patternlab-php/wiki/Linking-Directly-to-a-Pattern)
* [Managing Assets for a Pattern: JavaScript, images, CSS, etc.](https://github.com/pattern-lab/patternlab-php/wiki/Managing-Assets-for-a-Pattern)
* [Modifying the Standard Header & Footer for Patterns](https://github.com/pattern-lab/patternlab-php/wiki/Modifying-the-Standard-Header-&-Footer-for-Patterns)

### Creating & Working With Dynamic Data for a Pattern

The PHP version of Pattern Lab utilizes Mustache as the template language for patterns. In addition to allowing for the [inclusion of one pattern within another](https://github.com/pattern-lab/patternlab-php/wiki/Including-One-Pattern-Within-Another) it also gives pattern developers the ability to include variables. This means that attributes like image sources can be centralized in one file for easy modification across one or more patterns. The PHP version of Pattern Lab uses a JSON file, `source/_data/data.json`, to centralize many of these attributes.

* [Introduction to JSON & Mustache Variables](http://github.com/pattern-lab/patternlab-php/wiki/Introduction-to-JSON-&-Mustache-Variables)
* [Overriding the Central `data.json` Values with Pattern-specific Values](https://github.com/pattern-lab/patternlab-php/wiki/Overriding-the-Central-%60data.json%60-Values-with-Pattern-specific-Values)
* [Linking to Patterns with Pattern Lab's Default `link` Variable](https://github.com/pattern-lab/patternlab-php/wiki/Linking-to-Patterns-with-Pattern-Lab's-Default-%60link%60-Variable)
* [Creating Lists with Pattern Lab's Default `listItems` Variable](https://github.com/pattern-lab/patternlab-php/wiki/Creating-Lists-with-Pattern-Lab's-Default-%60listItems%60-Variable)

### Using Pattern Lab's Advanced Features

By default, the Pattern Lab assets can be manually generated and the Pattern Lab site manually refreshed but who wants to waste time doing that? Here are some ways that the PHP version of Pattern Lab can make your development workflow a little smoother:

* [Watching for Changes and Auto-Regenerating Patterns](https://github.com/pattern-lab/patternlab-php/wiki/Watching-for-Changes-and-Auto-Regenerating-Patterns)
* [Auto-Reloading the Browser Window When Changes Are Made](https://github.com/pattern-lab/patternlab-php/wiki/Auto-Reloading-the-Browser-Window-When-Changes-Are-Made)
* [Multi-browser & Multi-device Testing with Page Follow](https://github.com/pattern-lab/patternlab-php/wiki/Multi-browser-&-Multi-device-Testing-with-Page-Follow)
