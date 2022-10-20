

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Feedback](#feedback)
- [Contributors](#contributors)
- [Build Process](#build-process)
- [Backers](#backers-)
- [Sponsors](#sponsors-)
- [Acknowledgments](#acknowledgments)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Introduction


A simple, lightweight API for StarWars characters. 


## Features

A few of the things you can do with GitPoint:

* Full CRUD Functionality
* Star Wars Character Properties
*   (...That's pretty much it!)

<p align="center">
  <img src = "http://i.imgur.com/IkSnFRL.png" width=700>
</p>

<p align="center">
  <img src = "http://i.imgur.com/0iorG20.png" width=700>
</p>

## GET

Open source data is provided from the Star Wars API [Here](https://swapi.dev/). 

The data is comprised of characters that follow an object format:

```{
    "name": "Luke Skywalker",
    "height": "172",
    "mass": "77",
    "hair_color": "blond",
    "skin_color": "fair",
    "eye_color": "blue",
    "birth_year": "19BBY",
    "gender": "male",
    "homeworld": "https://swapi.dev/api/planets/1/",
    "films": [
      "https://swapi.dev/api/films/1/",
      "https://swapi.dev/api/films/2/",
      "https://swapi.dev/api/films/3/",
      "https://swapi.dev/api/films/6/"
    ],
    "species": [],
    "vehicles": [
      "https://swapi.dev/api/vehicles/14/",
      "https://swapi.dev/api/vehicles/30/"
    ],
    "starships": [
      "https://swapi.dev/api/starships/12/",
      "https://swapi.dev/api/starships/22/"
    ],
    "created": "2014-12-09T13:50:51.644000Z",
    "edited": "2014-12-20T21:17:56.891000Z",
    "url": "https://swapi.dev/api/people/1/"
  },

  ```


## Build Process

- Follow the [React Native Guide](https://facebook.github.io/react-native/docs/getting-started.html) for getting started building a project with native code. **A Mac is required if you wish to develop for iOS.**
- Clone or download the repo
- `yarn` to install dependencies
- `yarn run link` to link react-native dependencies
- `yarn start:ios` to start the packager and run the app in the iOS simulator (`yarn start:ios:logger` will boot the application with [redux-logger](<https://github.com/evgenyrodionov/redux-logger>))
- `yarn start:android` to start the packager and run the app in the the Android device/emulator (`yarn start:android:logger` will boot the application with [redux-logger](https://github.com/evgenyrodionov/redux-logger))

Please take a look at the [contributing guidelines](./CONTRIBUTING.md) for a detailed process on how to build your application as well as troubleshooting information.

**Development Keys**: The `CLIENT_ID` and `CLIENT_SECRET` in `api/index.js` are for development purposes and do not represent the actual application keys. Feel free to use them or use a new set of keys by creating an [OAuth application](https://github.com/settings/applications/new) of your own. Set the "Authorization callback URL" to `gitpoint://welcome`.

## Backers [![Backers on Open Collective](https://opencollective.com/git-point/backers/badge.svg)](#backers)

Thank you to all our backers! 🙏 [[Become a backer](https://opencollective.com/git-point#backer)]

<a href="https://opencollective.com/git-point#backers" target="_blank"><img src="https://opencollective.com/git-point/backers.svg?width=890"></a>

## Sponsors [![Sponsors on Open Collective](https://opencollective.com/git-point/sponsors/badge.svg)](#sponsors)

Support this project by becoming a sponsor. Your logo will show up here with a link to your website. [[Become a sponsor](https://opencollective.com/git-point#sponsor)]

<a href="https://opencollective.com/git-point/sponsor/0/website" target="_blank"><img src="https://opencollective.com/git-point/sponsor/0/avatar.svg"></a>
<a href="https://opencollective.com/git-point/sponsor/1/website" target="_blank"><img src="https://opencollective.com/git-point/sponsor/1/avatar.svg"></a>
<a href="https://opencollective.com/git-point/sponsor/2/website" target="_blank"><img src="https://opencollective.com/git-point/sponsor/2/avatar.svg"></a>
<a href="https://opencollective.com/git-point/sponsor/3/website" target="_blank"><img src="https://opencollective.com/git-point/sponsor/3/avatar.svg"></a>
<a href="https://opencollective.com/git-point/sponsor/4/website" target="_blank"><img src="https://opencollective.com/git-point/sponsor/4/avatar.svg"></a>
<a href="https://opencollective.com/git-point/sponsor/5/website" target="_blank"><img src="https://opencollective.com/git-point/sponsor/5/avatar.svg"></a>
<a href="https://opencollective.com/git-point/sponsor/6/website" target="_blank"><img src="https://opencollective.com/git-point/sponsor/6/avatar.svg"></a>
<a href="https://opencollective.com/git-point/sponsor/7/website" target="_blank"><img src="https://opencollective.com/git-point/sponsor/7/avatar.svg"></a>
<a href="https://opencollective.com/git-point/sponsor/8/website" target="_blank"><img src="https://opencollective.com/git-point/sponsor/8/avatar.svg"></a>
<a href="https://opencollective.com/git-point/sponsor/9/website" target="_blank"><img src="https://opencollective.com/git-point/sponsor/9/avatar.svg"></a>

## Acknowledgments

Thanks to [JetBrains](https://www.jetbrains.com) for supporting us with a [free Open Source License](https://www.jetbrains.com/buy/opensource).



STAR WARS

An API by Kyle Anthony


REQUIREMENTS
------------

This API utilizes the following npm dependencies:

"body-parser"
"chalk"
"cors"
"express"
"mongodb"
"mongoose"
"morgan"
"node"
"node-fetch"