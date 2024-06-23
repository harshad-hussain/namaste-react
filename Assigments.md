# Namaste react Assigment

## What is `Emmet`?
 Emmet is the like boiler plate which will generates code in html and css type of shortcuts used to expand the pieces of the code of the `html and css` 

 ## What is `CDN`? Why do we `use` it?
 CDN is content delivery network which pulls the core react things for the project 

 ## Why is `React known as React`?
  And it's called `React` because it `reacts`. It was developed by Facebook (a site that CONSTANTLY updates their data) to improve the user interface development and more effectively change (REACT to) what the user sees when they're doing things like mouse clicking, submitting and typing.

## What is `crossorigin in script tag`?
cross-origin is the mechanism which allows the many resources to the webpage from outside organisation
### _Syntax_

```sh
<script crossorigin="anonymous|use-credentials">
```

## What is difference between `react.development.js` and `react.production.js` files via `CDN`?

A: `Development` is the stage of an application before it's made public while `production` is the term used for the same application when it's made `public`.
`Development build` is several times (maybe 3-5x) `slower` than the `production build`.

## --------------Assignment 2----------------

## What is `npm`?

`` npm init ``

 - npm is where all the packages being handled ,all the packages are being hoisted there and it is 
 repository fr all the packages  creates the package.json file autmatically

## - What is `Parcel/Webpack`? Why do we need it?

-parcel and the webpack are bundlers are used mostly for javascript helps to `minify`,`image optimization`,`tree shaking`,`bundling` and make your code compact ,Along with that both bundlers parcel and webpack remove the unnecessary comments, new lines, any kind of block delimiters, and white spaces while the functionality of the code remains unchanged.

## Use of `Parcel/Webpack`:
Module bundlers are the way to organize and combine many files of JavaScript code into one file. A JavaScript bundler can be used when your project becomes too large for a single file or when you're working with libraries that have multiple dependencies.

-Command for installing parcel

`npx  install -D parcel `

## ## Q: Why is `.parcel-cache` folder?
-parcel cache folder is where the everytime we run the application the cache files of the parcel gets stored there ,stores information about your project ,it is key point why parcel is build so fast

## Q: What is `npx`?
A: `npx` stands for `Node Package eXecute`. It is simply an `npm` package runner. It allows developers to execute any Javascript Package available on the npm registry without even installing it.

## Q: What is difference between `dependencies vs devDependencies`?
Depenancies are the packages required by application during production -- Dev depenancies are packages are used for local development and testing  the project


## Q: What is Tree Shaking? in Parcel?
-Tree shaking is the practice of removing the unused code in the production build

## Q: What is Hot Module Replacement?
--`HMR`is the process where remove or add the details,images while application is running without full reload This can significantly speed up development in a few ways

## List down your favourite 5 superpowers of Parcel and describe any 3 of them in your own words.
-HMR-Hot module replacement where add or remove the details ,images while application is runnig without reloading the application

-Tree shaking --Tree shaking is the practice of removing the unused code in the production build

-caching- faster rebuild the application 

-Bundling

## What is the difference between `package.json` and `package-lock.json` files?
`package.json` - it is the place where all the depenancies of the project is being maintained and taken care of 

`package-lock.json` - The difference is that `package-lock. json` cannot be published, and it will be ignored if found in any place other than the root project.and package lock.json will maintain and lock depenancies of the specific version

## Why should I not modify `package-lock.json`?

-It is a generated file and is not designed to be manually edited. Its purpose is to track the entire tree of dependencies (including dependencies of dependencies) and the exact version of each dependency. You should commit `package-lock.json` to your code repository

## Q: What is `node_modules`? Is it a good idea to push that on git?

A: The `node_modules` folder contains generated code. This is not code you've written and you should never make any updates to the files inside Node modules because there's a pretty good chance they'll get overwritten next time you install some modules.

## What is the `dist` folder?

-dist folder is generates development when reloading it will goes to dist cache

## Q: What is `browserlists`?

A: Browserslist defines and shares the list of target browsers between various frontend build tools.