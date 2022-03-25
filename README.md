# Stay Sane 🧠
*description*
## Project Repositories 📁
- ### [stay-sane-backend](https://github.com/popehiflo/stay-sane-backend) 📌 
- ### [stay-sane-frontend](https://github.com/popehiflo/stay-sane-frontend)
## Backend JS
Hello and welcome! This Node.JS project demostrates a simple architecture building a full API with Node.JS, Express.JS, and MongoDB presents an architectural demo of these features:

- Built with Node.js and Express
- REST API
## Express Router and Routes

| Route               | HTTP Verb | Route Middleware   | Description                          |
| --------------------| --------- | ------------------ | ------------------------------------ |
| /api/users          | GET       |                    | Get list of user                     |
| /api/users          | POST      |                    | Creates a new user                   |
| /api/users/:id      | GET       |                    | Get a single user                    |
| /api/users/:id      | DELETE    |                    | Deletes a user                       |


## Usage
The use of endpoints is very simple, previously you could see a table of endpoints that you can call, if you need to create a user or log in, here we have some examples.

### Basic example **POST: Create USER** `/api/users`:

Request Body:
```json
{
    "first_name": "Pool",
    "last_name": "Hijuela",
    "email": "popehiflo@gmail.com",
    "password": "123456789"
}
```

Response:
```json
{
    "ok": true,
    "data": [
        {
            "_id": "623d9968d5ec5e8ef9d0b345",
            "first_name": "Pool",
            "last_name": "Hijuela",
            "email": "popehiflo@gmail.com"
        }
    ]
}
```

## Getting Started

### Prerequisites

- [Git](https://git-scm.com/)
- [Node.js and npm](nodejs.org) Node >= 16.14.x, npm >= 8.3.x

### Developing

1. Run `npm install` to install server dependencies.

2. Configure the env
```shell
$ cp .env.example .env
```
