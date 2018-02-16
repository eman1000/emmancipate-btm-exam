BTM Exam
===========

Frontend code for BTM Blockchain Technology (M) Sdn Bhd Color App

USEFUL LINKS
------------

- Releases: [TBD]

GETTING STARTED WITH DEVELOPMENT
--------------------------------

1. Software installation:
    - Sublime Text 3
    - Currently stable Google Chrome
    - [NodeJS v6.11.2][] (for development, testing, previewing, compiling and optimizing processes)
    - [Webpack][] locally installed
2. Setting up Environment and running app
    - Install dependencies: In terminal, cd to __this__ folder: `npm install`
    - Run `npm run dev`


TECHNICAL SOLUTIONS
-------------------

- [React][] v16.2.0 and [Redux][] v^3.0.4 for the Frontend Architecture
- [Webpack] for building and bundling.
- SASS (SCSS dialect) as CSS preprocessor
- Bootstrap as base CSS framework
    
### DEVELOPMENT DEPENDENCIES

- [NodeJS v6.11.2][]
- [Webpack][]
- See _dependencies_ in `package.json`

### VERSIONS

Below are list of main components

- React: __v16.2.0__
- Redux: ^3.0.4
- React-Bootstrap: ^0.32.0

FOLDER STRUCTURE
----------------

_Folder structure is FRACTAL_

API
----------------
The api has been moved to a folder name api. You will need to `cd` into the folder and run `npm install`

CONVENTIONS & BEST PRACTICES
----------------------------

### Folder and file name:
- Use PascalCase for all folder with components
- Use lowercase for remaining folder names 

### JavaScript
- Alignment by TABs (not SPACES, tab width is up to user's preference, but 4-space tab is recommended)
- Variable Naming:
    + use camelCase for variables and function names.
    
- Functions:
    + Prefix function name with 'on' if it is an ordinary event handling function
    Refer to `.eslintrc` for detailed global rules [TBD]

### SCSS
- __Comments__: 
    + Every CSS component/file (at high level)
- __OOCSS__:
    + NO IDs in CSS
    + Except for utilitily classes, avoid using !important

### Development Environment Setup
- Install Nodejs [v16.2.0]
- Install GIT
- Install React Developer Tools for Google Chrome.
- Go to Project root directory and run `npm install`. This will install Project dependencies.
- cd api && npm installation
- cd .. to root directory
- Run `npm run dev`. This will start development node server. 
- Go to http://localhost:3000/home from Browser.


BUILD & CI SERVER INSTALLATION [TBD]
------------------------------

[NodeJS v16.2.0]: http://nodejs.org/
