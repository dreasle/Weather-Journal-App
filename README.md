# Weather Journal App Project

## Table of Contents

* [Overview](#overview)
* [Project Environment Setup](#project)
* [APIs and Routes](#api)
* [Dynamic UI](#dynamic)
* [Tasks](#tasks)

## Overview

Weather Journal App Project - This project is an asynchronous web app that uses Web API and user data to dynamically update the UI in a Weather Journal application.


## Project Environment Setup

#### Node and Express
Node and Express should be installed on the local machine. The project file server.js should require express(), and should create an instance of their app using express.

The Express app instance should be pointed to the project folder with .html, .css, and .js files.

#### Project Dependencies
The ‘cors’ package should be installed in the project from the command line, required in the project file server.js, and the instance of the app should be setup to use cors().

The body-parser package should be installed and included in the project.

#### Local Server
Local server should be running and producing feedback to the Command Line through a working callback function.

#### API Credentials
Create API credentials on OpenWeatherMap.com

## APIs and Routes

#### Get Route

#### Post Route

## Dynamic UI

The UI is updated with

## Tasks

This is a list of tasks to complete the project

#### Functionality/Required Tasks
- [x] Set up readme file
- [x] Do initial git commit
- [x] Create initial file structure
- [x] Install Node and Express on local machine
- [x] The project file server.js should require express(), and should create an instance of their app using express.
- [x] The Express app instance should be pointed to the project folder with .html, .css, and .js files.
- [x] The ‘cors’ package should be installed in the project from the command line, required in the project file server.js, and the instance of the app should be setup to use cors().
- [x] The body-parser package should be installed and included in the project.
- [x] Local server should be running and producing feedback to the Command Line through a working callback function.
- [x] Create API credentials on OpenWeatherMap.com
- [x] There should be a JavaScript Object named projectData initiated in the file server.jsto act as the app API endpoint.
- [x] The personal API Key for OpenWeatherMap API is saved in a named const variable.
- [x] The API Key variable is passed as a parameter to fetch().
- [x] Data is successfully returned from the external API.
- [x] There should be a GET route setup on the server side with the first argument as a string naming the route, and the second argument a callback function to return the JS object created at the top of server code.
- [x] There should be an asynchronous function to fetch the data from the app endpoint
- [x] You should be able to add an entry to the project endpoint using a POST route setup on the server side and executed on the client side as an asynchronous function.
- [x] The client side function should take two arguments, the URL to make a POST to, and an object holding the data to POST.
- [x] The server side function should create a new entry in the apps endpoint (the named JS object) consisting of the data received from the client side POST.
- [x] The input element with the placeholder property set to “enter zip code here” should have an id of zip.
- [x] The textarea included in project HTML should have an id of feelings.
- [x] The button included in project HTML should have an id of generate.
- [x] The div with the id, entryHolder should have three child divs with the ids: date, temp, content
- [x] Adds an event listener to an existing HTML button from DOM using Vanilla JS.
- [x] In the file app.js, the element with the id of generate should have an addEventListener() method called on it, with click as the first parameter, and a named callback function as the second parameter.
- [x] Sets the properties of existing HTML elements from the DOM using Vanilla JavaScript.
- [x] Included in the async function to retrieve that app’s data on the client side, existing DOM elements should have their innerHTML properties dynamically set according to data returned by the app route.

#### Design Tasks