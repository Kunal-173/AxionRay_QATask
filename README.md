# AxionRay_QATask
This repo contains the task assigned by Axion Ray group

# Cypress Test Automation Framework

This is a sample test automation framework built using Cypress for web application testing. The purpose of this framework is to demonstrate the basic setup and usage of Cypress along with some best practices.

## Features
Integration with dotenv package to manage environment variables.
Usage of Page Object Model (POM) design pattern for organizing the tests.
Implementation of reusable utility functions for common actions such as logging in and out, accessing elements, etc.
Configuration for running tests on different browsers and environments.
Integration with Continuous Integration (CI) tools such as Travis CI for automated testing.

## Setup

Prerequisites:

Node.js version 12 or higher
Git

Steps:

```
Clone the repository to your local machine:

git clone https://github.com/<username>/repository.git

Install the dependencies:

cd repository

npm install
```

# In the cypress.env.json file:

setup your credentials:

Note: Need to signup with Clickup

   ```
    {
    "EMAIL":"youremail@gmail.com",
    "PASSWORD":"your@password",
    "FULLNAME":"Firstname Lastname"
    }
   ```

# In the terminal 

To open the runner and run the scripts

```
npm run open:script

```

To run the scripts in headless mode

```
npm run runHeadless

```
