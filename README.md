# Event API
Simple NodeJS API to retrieve events.

Features:
-   NodeJS events API (using Typescript)
-   Karma, Mocha, Sinon for testing
-   Swagger and JsDoc for API docs
-   Typescript linting
-   Coverage testing
-   Docker file for building a docker image

TODO:
-   Front-end with React


To run locally:
-   npm install
-   npm start

To run with docker:
-   npm install
-   npm run build
-   docker build . --tag eventapi:1.0
-   docker run --publish 8080:8080 eventapi:1.0

Other commands:
-   npm run lint
-   npm run test
-   npm run coverage
