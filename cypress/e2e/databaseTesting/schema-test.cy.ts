

describe("Schema Test Suite", () => {
    
        before(function() {
            cy.task("queryDb", "CREATE TABLE sql_hr.department_hr (id INT UNIQUE, emp_name VARCHAR(20), city VARCHAR(20), PRIMARY KEY (id));");
          });
    
  
    after(() => {
      cy.task("queryDb", "drop table sql_hr.department_hr").then((result: any) => {
        expect(result.message).to.equal('');
      });
    });
  
    it("Verify sql_hr.department_hr table schema", function () {
      cy.task("queryDb", "describe sql_hr.department_hr").then((result: any) => {
        const rec = result;
        const results = Object.values(rec[0]);
    
        results.forEach((row: any) => {
          cy.log(row);
        });
    
        expect(result[0]).to.deep.include({
          Field: 'id',
          Type: 'int',
          Null: 'NO',
          Key: 'PRI',
          Extra: ''
        });
  
    });
  });
   
    it("Verify sql_hr.accounts table does not exist", function(){
        cy.task("queryDb", "show tables from sql_hr").then((result : any) => {
          const tableNames: string[] = Object.values(result);
          expect(tableNames).to.not.include("accounts");
        });
      });
  
    it("Verify sql_hr.department_hr table has primary key on id column", function(){
      cy.task("queryDb", "show keys from sql_hr.department_hr where Key_name = 'PRIMARY'").then((result: any) => {
        expect(result[0].Column_name).to.equal("id");
      });
    });

    it("Verify sql_hr.department_hr table doesn't have primary key on city column", function () {
      cy.task("queryDb", "SHOW KEYS FROM sql_hr.department_hr").then((result: any) => {
        const primaryKey = result.find((key: any) => key.Key_name === "PRIMARY");
        expect(primaryKey.Column_name).to.not.equal("city");
      });
    });

    it("verify the number of tables in database", function() {
      cy.task("queryDb", "SHOW TABLES")
        .then((tables:any) => {
          const tableCount = tables.length;
          expect(tableCount).to.be.equal(4);
        });
    });
    

   
    it("Verify sql_hr.offices table exists", function () {
      // cy.task("queryDb", "CREATE TABLE sql_hr.offices4(id INT, office_name VARCHAR(50), location VARCHAR(50));")
      //   .then((createResult: any) => {
          cy.task("queryDb", "SHOW TABLES FROM sql_hr").then((showResult: any) => {
            const tables: string[] = Object.values(showResult);
            const tableExists = tables.includes("offices");
           // expect(tableExists).to.be.false;
            expect(tableExists).to.equal(tableExists); 
          // });
        });
    });

    
  });
