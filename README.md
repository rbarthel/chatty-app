# Chatty App

## What it is

Chatty is SPA (single-page application) messaging app using React, a popular front-end library created and used heavily by Facebook. It allows users to communicate with each other without having to register accounts. It uses WebSockets for multi-user real-time updates as well as modern tools for Node including Webpack and Babel.

## Screenshot

![''](https://raw.githubusercontent.com/rbarthel/chatty-app/master/docs/screenshot.jpg)

## Getting Started

1. Install dependencies with `npm install`
2. Run the web server with `npm run start`
3. Go the the 'chatty_server' directory and start the websocket server with `node server.js`
4. Go to http://localhost:3000 in your browser

## Dependencies

- babel-core
- babel-loader
- babel-preset-es2015
- babel-preset-react
- css-loader
- node-sass
- sass-loader
- sockjs-client
- style-loader
- webpack
- webpack-dev-server
- react
- react-dom
- express
- ws
- uuid
