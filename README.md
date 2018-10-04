Chatty App
==========

A minimal and light dev environment for ReactJS.

### Final Product

![Screenshot of chattyApp with 2 people](https://raw.githubusercontent.com/alfred529/chattyApp/master/docs/chattyApp_2people.png)

![Screenshot of chattyApp all alone](https://raw.githubusercontent.com/alfred529/chattyApp/master/docs/chattyApp_allalone.png)

![Screenshot of chattyApp party](https://raw.githubusercontent.com/alfred529/chattyApp/master/docs/chattyApp_party.png)

### Usage

Clone the ChattyApp (and the chattyServer), and create your own git repo.
ChattyServer can be found at: https://github.com/alfred529/chattyServer

```
git clone git@github.com:alfred529/chattyApp.git
cd chattyApp
git remote rm origin
git remote add origin [YOUR NEW REPOSITORY]
# Manually update your package.json file
```

Install the dependencies and start the server.

```
npm install
npm start
open http://localhost:3000
```

### Static Files

You can store static files like images, fonts, etc in the `build` folder.

For example, if you copy a file called my_image.png into the build folder you can access it using `http://localhost:3000/build/my_image.png`.

### Linting

This Chatty App project includes React ESLint configuration.

```
npm run lint
```

### Dependencies

* react "15.4.2",
* react-dom "15.4.2"
* babel-core "6.23.1"
* babel-loader "6.3.1"
* babel-preset-es2015 "6.22.0"
* babel-preset-react "6.23.0"
* babel-preset-stage-0 "6.22.0"
* css-loader "0.26.1"
* eslint "3.15.0"
* eslint-plugin-react "6.9.0"
* node-sass "4.5.0"
* sass-loader "6.0.0"
* sockjs-client "^1.1.2"
* style-loader "0.13.1"
* webpack "2.2.1"
* webpack-dev-server "2.3.0"








