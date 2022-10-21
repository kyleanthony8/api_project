

## Introduction


A simple, lightweight API of StarWars characters, by Kyle Anthony.


## Features

A few of the things you can do with GitPoint:

* Full CRUD Functionality
* Built with MERN
* Star Wars Character Properties
*   (...That's pretty much it!)

REQUIREMENTS
------------

This API utilizes the following npm dependencies:

"body-parser"</br>
"chalk"</br>
"cors"</br>
"express"</br>
"mongodb"</br>
"mongoose"</br>
"morgan"</br>
"node"</br>
"node-fetch"</br>

## Seeding

To Seed Data run:

```npm run db:seed```

You will need to open a mongo shell and connect to the database 'starwars'

```
test> show dbs
admin                40.00 KiB
authors              40.00 KiB
authorsDevDatabase   80.00 KiB
bookmarks           112.00 KiB
burgers_db           40.00 KiB
config              108.00 KiB
lists                72.00 KiB
local                72.00 KiB
restaurant_db        72.00 KiB
starwars              8.00 KiB
```


The Star Wars data is comprised of many characters properties in a standard JSON object format, ex:

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
The API Characer Schema codifies the following parameters from the database:

```let Character = new Schema({
  name: { type: String },
  height: { type: String },
  mass: { type: String },
  hair_color: { type: String },
  skin_color: { type: String },
  eye_color: { type: String },
  birth_year: { type: String },
  gender: { type: String },
})
```

## Use

Direct GET requests to the API endpoint
```localhost:3000/characters/```

TO Delete a character, submit a Delete character request to the API endpoint:

```localhost:3000/characters/:id```

To update a character property, submit a Update character request to the API endpoint:

example:
``` {
    "name": "Bob" 
```


Now Bob is "name" in the database.
```{
        "_id": "635158a89715e82a884b4170",
        "name": "Bob",
        "height": "167",
        "mass": "75",
        "hair_color": "n/a",
        "skin_color": "gold",
        "eye_color": "yellow",
        "birth_year": "112BBY",
        "gender": "n/a",
        "__v": 0
    },
```


Sources and Credits:
