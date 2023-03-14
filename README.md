# Movie Web App

This is a Movie App built in [ReactJS](http://facebook.github.io/react/index.html).
It uses open [The Movie Database (TMDb) API] (https://www.themoviedb.org/documentation/api) to display data.

![alt text](demo-page.png?raw=true)

## Features

- List popular movies with pagination
- Auto-suggest movie title for search function
- View detail movie

## Installing dependencies

This project uses node.

```bash
$ Clone this repo in your computer and inside the root folder of this project, install the libraries
```

````bash
$ (you can use ```npm i``` or ```yarn```)
````

## Running Application

1. add .env file

- Once the libraries are installed, you need to create a `.env` file in the root folder of the project with a var called `VITE_TMDB_API_KEY` and it must have the value of your TMDB API key (if you don't have one, you can check how to get one [here](https://developers.themoviedb.org/3/getting-started))

2. run the command for running Application
   ```bash
   $ yarn dev
   ```
