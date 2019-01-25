# Burger Logger

Burger logger with MySQL, Node, Express, Handlebars and a homemade ORM (yum!)

## Overview

A burger logger with MySQL, Node, Express, Handlebars and a homemade ORM (yum!). Burger Logger follows the MVC design pattern; it uses Node and MySQL to query and route data in app, and Handlebars to generate HTML.

### User Experience (UX)

* Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat.
* Whenever a user submits a burger's name, your app will display the burger on the left side of the page -- waiting to be devoured.
* Each burger in the waiting area also has a `Devour it!` button. When the user clicks it, the burger will move to the right side of the page.
* Your app will store every burger in a database, whether devoured or not.

## App Setup

1. In the desired folder of your liking, run the command below to clone the repo:

`git clone https://github.com/ianbunn/burger.git`

2. Run the following command once you've completed cloning the repo:

`npm install`

- This will install all of the project's dependencies
  - Includes:
    - Express.js
    - Express-handlebars
    - MySQL

3. Run the following command to start the app:

`node server`