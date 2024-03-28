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
![Screenshot (39)](https://github.com/TestrigTechnologies/training24_Cypress_TS/assets/97455483/0585a1d2-85e4-4136-82cb-cc993cdf1bef)

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
## **Running the project on various platforms used in software development and deployment processes
Bitbucket, GitHub Actions, AWS, and Docker are all tools and platforms commonly used in software development and deployment processes

## **Bitbucket

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
