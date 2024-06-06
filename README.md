<<<<<<< HEAD
## **Project title:**
 Webpage Automation Testing
Built on Cypress IDE using Typescript

## **Table of Contents:**
1. Project Title
2. Project Description
3. Table of Contents
4. How to Install and Run the Project
5. How to Use the Project
6. Credits
7. License
## **📝Description:**

The Cypress Testing Project is a comprehensive testing solution that leverages Cypress for automated testing.
It showcases the powerful capabilities of Cypress IDE and TypeScript, providing a robust framework for testing web applications.
The README serves as a detailed guide for setting up, running, and utilizing the project effectively. 
It includes information on the project's purpose, technologies utilized, challenges encountered, and future feature enhancements.

## **🔗Links:**

GitHub Repository: https://github.com/TestrigTechnologies/training24_Cypress_TS.git

## **Folder structure of project:**

![fs](https://github.com/TestrigTechnologies/training24_Cypress_TS/assets/97455483/062b11f7-7a38-4996-9aeb-274a2aa09ccd)


## **🤖Tech-Stack:**
 1. Cypress IDE
 2. TypeScript
 3. NodeJs 
 4. Git and Github
 5. Cypress-mochawesome-reporter
 6. Cypress Documentation
 7. Typescript Documentation

## **File Structure:**
Set up projects and tests

## **🛠Project Setup**

1. Install Node-js
2. Install IDE(Vscode)
3. Create a new folder.
4. Open the folder in Vscode.
5. Add typescript extension in Vscode
6. Add code runner

## **How to Use the Project:**

Step 1 - Create a new folder 
Step 2 - Open folder in VS Code 
Step 3 - Run commands
          npm init -y 
          npm install cypress
          npm install typescript 

Step 4- initialize a new tsconfig.json file using the command
          npx tsc --init --types cypress --lib dom,es
          This ensures that types for cypress are accessible by typescript These types depend on dom and es6, so we pass them as lib option to typescript 

Step 5 - Run command npx cypress open 

Step 6- Under cypress/integration folder create a test file basic.ts
Step 7  - Add test code
Step 8 - Run and verify
Step 9- Run the file
        file_name.cy.ts (write test cases here)
        OR
        -run by npx cypress open(to run on cypress Window)
        -run by npx cypress run(to run on console)
## **Running the project on various platforms used in software development and deployment processes**
Bitbucket, GitHub Actions, AWS, and Docker are all tools and platforms commonly used in software development and deployment processes

## **Bitbucket**

Bitbucket is a Git-based source code repository hosting service owned by Atlassian. 
It serves as a platform for developers to store, manage, and collaborate on their code,
 facilitating version control and tracking changes effectively
 
Prerequisites:
1. Install Node-js
2. Install IDE(Vscode)
3. Add typescript extension in Vscode
4.  Add code runner
5.  Cypress Installation and configuration
6.   Git installed on the local machine and access to the Bitbucket repository.

Getting Started:
1. clone the Bitbucket repository to the local machine using git
2. setting up the project environment and  dependencies required(like mohoawesome ).

Running the Project:
3. commands or steps needed to run the project locally:
       - Run the file
        -run by npx cypress open(to run on cypress Window)
        -run by npx cypress run(to run on console)

4. mochoawesome report get genrated dynamically in cypress/reports/html .can be viewd using live server
5. pushing back the updated code to bitbucket repository

## **AWS**
AWS CodeCommit:allows you to securely store and manage your Git repositories in the cloud.
AWS CodeBuild:AWS CodeBuild is a fully managed continuous integration service that compiles source code, runs tests, and produces software packages that are ready to deploy. 

**Prerequisites**
1. Cypres  installation along with Typescript and mochoawesome report
2. AWS account with access to CodeCommit and CodeBuild
3. AWS CLI installed on the local machine
4. IAM user with appropriate permissions for CodeCommit and CodeBuild

**Getting Started on local machine** 
1. clone the CodeCommit repository to the local machine using AWS CLI:
2. Configure AWS CLI with credentials using aws configure.
3. Clone the CodeCommit repository using git clone <CodeCommit repository URL>.

**Running the Project:**
- commands or steps needed to run the project locally:
       - Run the file
        -run by npx cypress open(to run on cypress Window)
        -run by npx cypress run(to run on console)

-pushing back the updated code to CodeCommit repository 

## **Additional Information**
Building the Project with AWS CodeBuild
Detail the process of building the project using AWS CodeBuild:
Set up a buildspec.yml file in the project root to define the build steps.

## **Docker**
Docker platform can be used to automates the deployment of above project in lightweight portable containers, ensuring consistency across different environments.
## Prerequisites
- Docker installed on your machine.
- Cypress ,Typesript,mochoawesome installed
- Docker extension added in Vs code

## Getting Started
1. Clone the repository to your local machine.
2. Build the Docker image:
   ```bash
   docker build -t project-name .

3.Run the Docker container:
   
docker run -d -p 8080:80 project-name .

Access the project in your browser at http://localhost:8080.

## Working flow:
-create a DockerFile: a text file that contains all commands, in order, needed to build a given image.
-build image 
-create a docker container
-Run the testcases via docker-compose.yml file 

## **GithubActions**

1. Clone the repository to your local machine.
2. Cypres  installation along with Typescript and mochoawesome report
3. Git installed
4. In your repository, create the .github/workflows/ directory to store your workflow files.
5. In the .github/workflows/ directory, create a new file called learn-github-actions.yml and add
6. add code locally using cypress commands
7. Push back code to github workflow. as Each workflow is stored as a separate YAML file .workflow will be triggered
8. view result of test execution along with reports

## **API Testing:**
Cypress is a standalone frontend testing tool, it makes HTTP requests on behalf of the web applications as it is executing. While it might appear that Cypress is making these requests from the browser, it actually uses Node.js as an engine to make the HTTP requests to the API server. It uses Node.js to return the responses received from the server.
To make an API request, Cypress automation provides an inbuilt command called cy.request(). 

**API Methods**
- GET, POST, PUT, and DELETE are the four most common HTTP methods used in REST APIs. They correspond to the CRUD (create, read, update, delete) operations on resources.

- In our project cypress/e2e/ApiTesing contain test files for API tesing using Reqres 
- Reqres is a hosted REST API that is designed to simulate real-world application scenarios.
- It provides a platform where developers can test various functionalities, such as user authentication systems, by responding to requests like login and register with predefined responses. --Reqres offers features like providing fake data, supporting common HTTP methods like GET, POST, PUT, and DELETE
## **Visual Testing:**
- Visual Testing, also known as Visual regression Testing, validates that the visual appearance of an application matches the expected design.
- It is all about checking the application beyond functional aspects. Some of the attributes that are validated as a part of Visual Testing are-
- Cypress provides several plugins for visual regression testing, which can help you ensure that your application's UI remains visually consistent across different test runs. 
- These plugins typically involve configuring the directories where the base snapshots and diff snapshots will be stored and may provide a GUI to help you review and manage the snapshots and diffs.
- this repository includes Visual testing in cypress using cypress-visual-regression plugin
1. Installation:
npm install cypress-visual-regression

2. Configure the visual regression plugin and environment variables in your cypress.config.ts file
3.  cypress/support/e2e.ts:
  
import { addCompareSnapshotCommand } from 'cypress-visual-regression/dist/command'
addCompareSnapshotCommand()

4.  cypress/tsconfig.json
{
  "compilerOptions": {
    "esModuleInterop": true,
    "types": [
      "cypress",
      "cypress-visual-regression"
    ]
  }
}
5. Run tests :npx cypress run
6. Working:
When running your tests, the visual regression plugin will automatically compare the current snapshot of the UI with the base snapshot
and generate a diff image if there are any differences. You can then review the diff images and approve or reject them to update the base snapshots.

## **Database Testing:**
* Ensure that data store in database is accurate and consistent
* Set up a test Database
* Connect to database
* Write tests to interct with the database
* Run the tests using Cypress test Runner

* Setting up Cypress for Database Testing:
  
1. Installation 
 installing mysql plugin 
2. Connect database by updating Cypress.config.ts file
 add credentials under env object in cypress.config.ts file 
Create custom task to execute mysql query in cypress along with a function to execute
  mysql queries in cypress test using mysql package and return result as a promise

* Database Test Suite includes:
  1. Schema testing
  2. Database tables & column testing
  3. Keys and Indexes Testing
  4. Stored procedures Testing
  5. Triggers Testing
## **Folder Structure:**
*The e2e :Integration folder includes all the test files. The test files may be written as.js,.jsx,.coffee, and.cjsx.
Usually the preferred extension is.js, and the test file name format is test-name.spec.js.
All the test cases will be here.

*Fixture: Fixtures are used to store test data, which can then be used throughout the tests. Usually, the data is stored in JSON format.
This is the folder where all the test data is kept by default (like example.json).

*Screenshots and videos (MP4): these folders get created during the execution of tescases.Cypress records a video for each spec file when running tests during a Cypress run.
Videos are not automatically recorded during cypress open. 
Videos are stored in the videos folder, which is set to cypress/videos by default.

*cypress/downloads: This folder is automatically created when your test downloads any file and stores all the downloaded files. 

*Support :This folder contains index.js and commands.js files. This index.js file is run before every single spec file.
The support folder is a great place to put reusable behavior, such as custom commands. 

*command.ts :use to define custom commands to define specific functionality

 *e2e.ts: reference for component testing
 
*PageObjects:organizing page classes with relevant functions and locators, the Cypress Page Object Model enhances code reusability and maintainability

*node_modules : All the libraries and dependencies required for Cypress test execution

*tsconfig.json: Added later to enable autocompletion

*package.json: It is similar to pom.xml in Java.
-dependency management file to specify all the required Cypress dependencies

*package-lock.json: This file is used to lock down the versions of your dependencies so             
 that your project will always use the same versions.
 regardless of when you install it. 

*cypress.config.ts: a configuration file for you. This file will be cypress.config.js for JavaScript apps or cypress.config.ts for TypeScript apps. 
This file is used to store any configuration specific to Cypress.

## **👨‍💻Team Member:**
-Pratiksha Pathare - pratikshap@testrig.co.in 📧

## **👨‍🏫Team lead**
-Vaibhav Pawar

## **Contributors**
-Feel free to dive in! Open an issue or submit PRs.
 

## **Licence**
MIT © Richard Littaue
=======

