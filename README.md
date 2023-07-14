# Part of Speech - Test

This project has been created by Mohamed Mahmoud.

## API
    - All APIs are available in a postman collection

## Installation

### Client

- Run `npm run client:install` to install the dependencies in `package.json`
- Create `.env` file in client root directory and add `VITE_BASE_URL="http://localhost:5000/api"`
- Run `npm run client:build` to build the project
- Run `npm run client:start` to host the client on http://localhost:4173/ in production mode
- Run `npm run client:dev` to host the client on http://localhost:5173/ in development mode
- Run `npm run server:lint` to lint the code

### Server

- Run `npm run server:install` to install the dependencies in `package.json`
- Create `.env` file in server root directory and add `PORT=5000`
- Run `npm run server:build` to start building the project
- Run `npm run server:start` to host the server on http://localhost:5000/ in production mode
- Run `npm run server:dev` to host the server on http://localhost:5000/ in development mode
- Run `npm run server:lint` to lint the code
- Run `npm run server:format` to fix problems occurs from lint
- Run `npm run server:prettier` to prettify code

### Client Details

    CLIENT HOST: localhost
    SERVER PORT:
        - PRODUCTION: 4173
        - DEVELOPMENT: 5173

### Server Details

    SERVER HOST: localhost
    SERVER PORT: 5000
