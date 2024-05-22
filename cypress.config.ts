import { defineConfig } from "cypress";
import mysql from 'mysql';
import { configureVisualRegression } from 'cypress-visual-regression/dist/plugin';
import webpackConfig from './webpack.config';
const { allureCypress } = require("allure-cypress/reporter");

export default defineConfig({
  
  reporter: 'cypress-mochawesome-reporter',
 
  video:true,
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    reportDir: 'cypress/reports/html',
    overwrite: true, 
    html: true, 
    json: true, 
  },
  e2e: {
    env: {
      visualRegressionType: 'regression',
      visualRegressionBaseDirectory: 'cypress/snapshots/base',
      visualRegressionDiffDirectory: 'cypress/snapshots/diff',
      visualRegressionGenerateDiff: 'always',
      visualRegressionFailSilently: true,
      updateSnapshots: true,

      db: {
        server: 'localhost',
        user: "root",
        password: "MySQL@123",
        database: "sql_hr",
        port:3306
      }
      
    },
    screenshotsFolder: './cypress/snapshots/actual',
    setupNodeEvents(on, config) {
      configureVisualRegression(on);
      allureCypress(on);
      require('cypress-mochawesome-reporter/plugin')(on);
      const { startDevServer } = require('@cypress/webpack-dev-server');
     

      on('dev-server:start', (options) =>
        startDevServer({ options, webpackConfig })
      );
      on('task', { 
        queryDb: query => {
           return queryTestDb(query, config) 
          },
         });

    //   const testenv: string = process.env.TEST_ENV || config.env.testenv || '';

    //   function generateBaseURL(testenv: string): string {
    //     let baseUrl = '';
      
    //     //  if (testenv !== 'localhost') {
    //     //   //baseUrl = `http://testphp.vulnweb.com${testenv}`;
    //     //   baseUrl = `http://${testenv}testphp.vulnweb.com`;
    //     // }
    //     return baseUrl;
    //   }
      
    //   config.baseUrl= generateBaseURL(testenv);
      
    //   return config; 

      },

      
           baseUrl: "http://testphp.vulnweb.com",
      },
    //  env: {}
});

function queryTestDb(query: string | mysql.QueryOptions, config: Cypress.PluginConfigOptions) {
  // creates a new mysql connection using credentials from cypress.json env's
  const connection = mysql.createConnection(config.env.db)
  // start connection to db
  connection.connect()
  // exec query + disconnect to db as a Promise
  return new Promise((resolve, reject) => {
    connection.query(query, (error, results) => {
      if (error) reject(error)
      else {
        connection.end()
        return resolve(results)
      }
    })
  })
}