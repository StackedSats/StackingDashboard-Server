# StackedStats Backend Server

### Prerequisites

- Volta installed <a href="https://docs.volta.sh/guide/">Link</a>
- node > 12.0 <a href="https://nodejs.org/en/download/" target="_blank">Link</a>
- node > 6.0 <a href="https://docs.npmjs.com/downloading-and-installing-node-js-and-npm/" target="_blank">Link</a>

### Installation

```
- Clone the repo
- Rename .env.dev -> .env and fill all the required fields
- npm install
```

> Note: Email and password should be from gmail.com. 2FA and less secure login should be setuped. https://myaccount.google.com/lesssecureapps and https://support.google.com/accounts/answer/1064203 .

## Setup Method 1: Using standalone NodeJS

#### Usage

> Spin up your mongoDB instance. For ubuntu : https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/

##### Development

```
- npm run dev
```

#### Production

```
- npm i -g pm2
- pm2 start index.js
```

## Setup Method: Using Docker and Docker-Compose:

#### Running Using Docker

```
- chmod +x docker.sh
- DockerFile
```

### LICENSE

This project is GNU Public licenced.

### Architecture overview

- Database: MongoDB
- Server: NodeJS
- Fontend: React build -> Html, CSS, JS
- Libraries ( some of them )
  - express for routing
  - mongoose for database interaction
  - nodemailer for mailing service
  - stacks packages for staking.
  - Joi for validation

##### Directory structure

.
+-- config.js
+-- models
| +-- all schema and related functions here
+-- controllers
| +-- all the route handlers here
+-- build
| +-- React Build Folder containing HTML,CSS,JS of the frontend ( to be setup on server not included in repo )
+-- package.json
+-- stacking
| +-- All scripts related to stacking
+-- README.md
+-- LICENSE
+-- .env
