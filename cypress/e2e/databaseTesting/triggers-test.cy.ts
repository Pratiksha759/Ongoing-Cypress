describe("Trigger Test Suite",function(){
    


    it("Verify that negative salary value raises an exception", function () {
        cy.task("queryDb", "INSERT INTO joinee (jId, jname, salary) VALUES (7, 'test', -1000)");
        cy.wait(1000); 
        cy.task("queryDb", "SELECT message FROM error_log WHERE message LIKE 'Error: Salary cannot be negative'")
            .then((result: any) => {
                const rec = result;
                const errorMessage = rec[0].message;
    
                expect(errorMessage).to.equal("Error: Salary cannot be negative");
            });
    });

    it("Verify the trigger does add error log on null value",function(){
        cy.task("queryDb", "INSERT INTO joinee (jId, jname, salary) VALUES (11, 'test5');");
        cy.wait(1000); 
        cy.task("queryDb", "SELECT message FROM error_log WHERE message LIKE 'Error: Column count doesn't match value count at row 1'")
            .then((result: any) => {
                const rec = result;
                const message = rec[0].message;
      
                expect(message).to.equal("Error: Column count doesn't match value count at row 1");
            });
     }) 
    
     it("Verify the the correct salary value get succesfully inserted in table",function(){
        
        cy.task("queryDb"," INSERT INTO joinee (jId ,jname, salary) VALUES(26,'newbie',30000)")
        .then((result: any) => {
            expect(result.affectedRows).to.equal(1);
          });
     }) 

     it("verify the zero salary value get succesfully inserted in table",function(){
        cy.task("queryDb","INSERT INTO joinee(jId,jname,salary)values(26,'zeroSalaryGuy',0)")
        .then((result:any)=>{
            expect(result.affectedRows).to.equal(1);
        })
     })
    
     it(" Verify that the trigger inserts an error log for a negative salary value with a decimal point",function(){
        cy.task("queryDb","INSERT INTO joinee(jId,jname,salary)values(26,'zeroSalaryGuy',18298.8)")
        .then((result:any)=>{
            expect(result.affectedRows).to.equal(1);
        })
     })

     it("Verify the negative salary does not get inserted in the table",function(){
        cy.task("queryDb","INSERT INTO joinee(jId,jname,salary)Values(63,'negativeSalaryGuy',-10000)")
        .then((result:any)=>{
             expect(result.affectedRows).to.equal(0);
        })
     });

     it("Verify that the error log table gets updated with the error message", function () {
        cy.task("queryDb", "INSERT INTO joinee (jId, jname, salary) VALUES (11, 'test5', -30000)");
        cy.wait(1000); 
        cy.task("queryDb", "SELECT * FROM error_log")
            .then((result: any) => {
                const rec = result;
                const message = rec[0].message;
      
                expect(message).to.equal("Error: Salary cannot be negative");
            });
      });
      
     

   


})