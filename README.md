# Plant Hero

> Organizational and care tool for the modern plant parent.

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

During development, run the following commands in two separate terminals:

> To start the server and track changes with nodemon
```sh
npm start
```
> To start webpack for frontend development
```sh
npm run build
```

> Set up .env file by following instructions in .env_sample

<!-- For production:

```sh
npm run production
``` -->

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install
```
## Postgres

To create and connect to the Plant Hero database, run

```sh
npm run db
```

<!-- ## CRUD API

The following URL's should be prefixed with '/api/products/:id'

| Action | Request Method | URL |
| ------------- | ------------- | --- |
| Create a new Product Description | POST | '/api/products/:id' |
| Get existing Product Description | GET | '/api/products/:id' |
| Update existing Product Description | PUT | '/api/products/:id' |
| Delete existing Product Description | DELETE | '/api/products/:id' |
 -->
