import { defineConfig } from "cypress";
import { configureVisualRegression } from 'cypress-visual-regression/dist/plugin';
import webpackConfig from './webpack.config';

export default defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    reportDir: 'cypress/reports/html', // Added reportDir option
    overwrite: true, // Added overwrite option
    html: true, // Added html option
    json: true, // Added json option
  },
  e2e: {
    env: {
      visualRegressionType: 'regression',
      visualRegressionBaseDirectory: 'cypress/snapshots/base',
      visualRegressionDiffDirectory: 'cypress/snapshots/diff',
      visualRegressionGenerateDiff: 'always',
      visualRegressionFailSilently: true,
      updateSnapshots: true,
      
    },
    screenshotsFolder: './cypress/snapshots/actual',
    setupNodeEvents(on, config) {
      configureVisualRegression(on);
      require('cypress-mochawesome-reporter/plugin')(on);
      const { startDevServer } = require('@cypress/webpack-dev-server');

      on('dev-server:start', (options) =>
        startDevServer({ options, webpackConfig })
      );

      return config;
    },
    baseUrl: "http://testphp.vulnweb.com",
  },
});