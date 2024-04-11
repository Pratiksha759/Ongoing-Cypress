import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
   // baseUrl : `http://${Cypress.env('testenv')}testphp.vulnweb.com`,
    baseUrl: `http://${process.env.testenv}testphp.vulnweb.com`,
    },


  env:{
    testenv:"",
  },
  
  

  
})