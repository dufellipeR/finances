<h1 align="center">
  <img src="frontend/src/assets/logoGit.svg" alt="GOFinances" width="250px">
</h1>

<h3 align="center">
  Finances control application
</h3>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/dufellipeR/GOFinances?color=%235636D3">

  <a href="https://www.linkedin.com/in/eduardo-ribeiro-/">
    <img alt="Made by" src="https://img.shields.io/badge/made%20by-dufellipeR-%235636D3">
  </a>
  
  <!-- <img alt="Repository size" src="https://img.shields.io/github/repo-size/dufellipeR/GOFinances?color=%235636D3"> -->
  
  <a href="https://github.com/dufellipeR/GOFinances/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/dufellipeR/GOFinances?color=%235636D3">
  </a>
  
  <a href="https://github.com/dufellipeR/GOFinances/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/dufellipeR/GOFinances?color=%235636D3">
  </a>
  
  <!-- <img alt="GitHub" src="https://img.shields.io/github/license/dufellipeR/GOFinances?color=%235636D3"> -->
</p>

<p align="center">
  <a href="#-about-the-project">About the project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-getting-started">Getting started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-how-to-contribute">How to contribute</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-license">License</a>
</p>

<!-- <p id="insomniaButton" align="center">
  <a href="" target="_blank">
    <img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia">
  </a>
</p> -->

<img alt="Layout" src="https://res.cloudinary.com/eliasgcf/image/upload/v1587423410/GOFinances/mockup_lqgnbt.png">

## 💰 About the project

GOFinances is the application for who want to control your finances. With the feature to import a CSV (Comma-separated values) file you can bulk insert a lot of transactions.

## 🚀 Technologies

Technologies that I used to develop this api

- [Node.js](https://nodejs.org/)
- [ReactJS](https://reactjs.org/)
- [React Native](https://reactnative.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [TypeORM](https://typeorm.io/#/)
- [Express](https://expressjs.com/pt-br/)
- [PostgreSQL](https://www.postgresql.org/)
- [Jest](https://jestjs.io/)
- [SuperTest](https://github.com/visionmedia/supertest)
- [React Router DOM](https://reacttraining.com/react-router/)
- [React Navigation](https://reactnavigation.org/)
- [React Icons](https://react-icons.netlify.com/#/)
- [Styled Components](https://styled-components.com/)
- [Axios](https://github.com/axios/axios)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [EditorConfig](https://editorconfig.org/)

## 💻 Getting started

<!-- Importe o arquivo `Insomnia.json` no Insomnia ou clique no botão [Run in Insomnia](#insomniaButton) -->

### Requirements

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/) or [npm](https://www.npmjs.com/)
- One instance of [PostgreSQL](https://www.postgresql.org/)

> Obs.: I recommend use docker

**Clone the project and access the folder**

```bash
$ git clone https://github.com/dufellipeR/GOFinances.git && cd GOFinances
```

**Follow the steps below**

### Backend

```bash
# Starting from the project root folder, go to backend folder
$ cd backend

# Install the dependencies
$ yarn

# Create the instance of postgreSQL using docker
$ docker run --name GOFinances-postgres -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=docker -e POSTGRES_DB=GOFinances -p 5432:5433 -d postgres

# Make sure the keys in 'ormconfig.json' to connect with your database
# are set up correctly.

# Once the services are running, run the migrations
$ yarn typeorm migration:run

# To finish, run the api service
$ yarn dev:server

# Well done, project is started!
```

### Web

_Obs.: Before to continue, be sure to have the API running_

```bash
# Starting from the project root folder, go to frontend folder
$ cd frontend

# Install the dependencies
$ yarn

# Be sure the file 'src/services/api.ts' have the IP to your API

# Start the client
$ yarn start
```

### Mobile

<!-- _ps: Antes de executar, lembre-se de iniciar o backend deste projeto_ -->

<p align="center">
 Yet in development!
 <br />
 <img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" alt="loading">
</p>

## 🤔 How to contribute

**Make a fork of this repository**

```bash
# Fork using GitHub official command line
# If you don't have the GitHub CLI, use the web site to do that.

$ gh repo fork dufellipeR/GOFinances
```

**Follow the steps below**

```bash
# Clone your fork
$ git clone your-fork-url && cd GOFinances

# Create a branch with your feature
$ git checkout -b my-feature

# Make the commit with your changes
$ git commit -m 'feat: My new feature'

# Send the code to your remote branch
$ git push origin my-feature
```

After your pull request is merged, you can delete your branch

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Eduardo Ribeiro 👋 [See my linkedin](https://www.linkedin.com/in/edu-r/)
