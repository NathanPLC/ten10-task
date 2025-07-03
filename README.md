# ten10-task
---------------------

## Project Overview

This project uses Cypress and JavaScript to automate UI testing for the "Interest Calulator Application"



## Getting Started

### Prerequisites

- Install Node.js (tested with v22.16.0)
- GIT

### Installation

1. Clone the repository:

```bash
git clone https://github.com/NathanPLC/ten10-task.git
```
*Note*: Alternatively download the project and unzip

2. Install dependencies:

```bash
npm install
```

### Set User Crendentials

User crendentials are set in the following file:

`cypress/fixtures/profile.json`

*Note*: The `url`, `username` and `password` may need to be updated if they are no longer valid

### Running Tests

#### Open Cypress Test Runner (interactive mode)

```bash
npx cypress open
```

#### Run 'Interest Calculator' Test Suite in Headless Mode

```bash
npm run interest-suite
```
*Note*: The headless commands will run tests in the default Electron Browser packaged with Cypress

### Report

A HTML report should be automatically generated in the following location:

`cypress/reports/index.html`


## Project Structure

`cypress/e2e/` - Test Mocha Files

`cypress/fixtures/` - User Credentials and Test data

`cypress/support/` - Custom commands, setup files

`cypress.config.js` - Cypress configuration

