# Runtastic-app [![Build Status](https://travis-ci.org/zzarcon/runtastic-app.svg?branch=master)](https://travis-ci.org/zzarcon/runtastic-app)

You can see the working live demo here --> http://runtastic-app.herokuapp.com
The app have some tests and it's integrated with Travis

## Technologies

* Ember.js
* Ember Data
* Ember cli
* SASS
* Bourbon
* Font Awesome
* Normalize.css
* Moment.js

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone https://github.com/zzarcon/runtastic-app.git` this repository
* `cd runtastic-app`
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

It uses Heroku for deploy the application. See https://github.com/tonycoco/heroku-buildpack-ember-cli