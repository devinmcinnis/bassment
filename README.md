# bassment
A beginner's template for nodeJS, expressJS, stylus, jade, requireJS, and CoffeeScript

## Getting started
- install [foreman](https://github.com/ddollar/foreman)
- install [node.js 0.10.x](http://nodejs.org/)
- `npm install`
- start the server with `make`

## Quick start
- Font and styling choices under `stylus/partials/vars`
- Default page under `views/index.jade`

### What happens on load?
- Server starts through `coffee/server.coffee` which calls the default route at `routes.index`
- The default route is found in `coffee/routes/index.coffee` which supplies a document title and template (index) to render
- The `<title>` is set in `views/layout/base.jade`; the template is rendered from `views/index.jade`

## In the bassment
- [coffeescript](http://coffeescript.org/)
- [jade](http://jade-lang.com/)
- [stylus](http://learnboost.github.com/stylus/)
- [nib](http://github.com/visionmedia/nib/)
- [jQuery](http://jquery.com/)
- [requireJS](http://requirejs.org)

## Under the bassment
- Auto-compile CoffeeScript to JS
- Auto-compile stylus to CSS
- nodemon auto-restart the server when there's a change in server files (files under `/`, `/routes`)