plugin: uu curp
title: curriculum planner
description: tool to plan courses and curriculums
version: 1.0
date: 23 november 2014

ABOUT
-----

CURP is een app-implementatie van een interactief kaartspel voor het ontwikkelen van cursussen. 


The APP is a plugin for the MCOW framework. Below is explained:
- The directory structure
- the code
- the styling
- the phonegap deployment


DIRECTORIES
-----------

the structure of this plugin is:

- css
- docs
- fonts
- gfx
- js
--- control
--- etc
--- language
--- lib
--- model
--- view
- phonegap
--- icons
--- mcow
--- splash

On the top level are two files.
- the index.html file (the one and only app file)
- the install.sh file (the file that needs to run for deployment of the code and make an hybrid app from the webapp)

This plugin has three main viewpoints
- The code
- The styling
- The phongap deployment


THE CODE
--------
All code reside in the js directory.

- js/etc/config.js is the main configuration file that overrides the mcow configuration

- js/control/control.js defines the pages of the app, these are
--- home, the home page
--- courseNew, the page where a new course is created
--- courseEdit, the page where a course is edited
--- courseEditName, the page to chane the course name
--- courseView, the page that gives an overview of the course
--- courseShare, the page where different representations of the course can be shared
--- cardNew, the page to put a new card into a course
--- cardEdit, the page to edit a card
--- scenarioEdit, the page to edit a scenario

- js/model/* defines for each page a .js file with code to run to prepare the page and data

- js/view/* defines for each page a .js file with code to display the page

- js/lib/curp.js is the curp library, it has, among others, functions that are called by the mcow event handler and all curp related business rules

The CURP object created in curp.js contains the following parts
- CURP
- CURP.Status (a space to store temporary variables)
- CURP.Config (curp configuration options)
- CURP.Event (the curp event handler, with implemenatation of mcow hooks)
- CURP.Lib (the curp business rules)
- CURP.Course (the curp course object initialization)
- CURP.Week (the curp week object initialization)
- CURP.Card (the curp card object initialization)
- CURP.Data (the prelimenary data)


THE STYLING
-----------
This is scattered among three top directories
1. css/ contains curp.css for styling rules
2. fonts/ for fonts
3. gfx/ for images


THE PHONEGAP DEPLOYMENT
-----------------------
This resides in the phonegap directory and contains
- config.xml, the config file for a local cordova installation to test on emulators
- config-pgn.xml, the config file to be used with phonegapbuild
- mcow/config.js, the main config file for the app
- mcow/index.html, the main index file for the app
- icons, app icons
- splash, app splashscreens

The config is currently setup for android and could be easily extended with iOS config
