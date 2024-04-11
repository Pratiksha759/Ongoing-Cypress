describe("Stored Processor Test Suite",function(){
   before(function(){
    cy.task("queryDb","create table sql_hr.company1(cid INT,name varchar(30),location varchar(30),service varchar(30),budget int,PRIMARY KEY(cid));")
   })

   after(function(){
cy.task("queryDb","drop table sql_hr.company1")
   })
   
   
   it("Insert into the table", function(){
    cy.task("queryDb", "INSERT INTO sql_hr.company1 (cid, name, location, service, budget) VALUES (64, 'maveric', 'IT', 'Some Service', 4000000);")
    .then((result: any) => {
        expect(result.affectedRows).to.equal(1);
    });

   });

   
      it("Verify if displayRec2 stored procedure exists", function () {
        cy.task("queryDb", "SHOW PROCEDURE STATUS WHERE Db = 'sql_hr' AND Name = 'displayRec2'")
          .then((result: any) => {
            const rec = result;
            const procedureExists = rec.length > 0;
      
            cy.log(`Stored procedure displayRec2 exists: ${procedureExists}`);
      
            expect(procedureExists).to.be.true;
          });
      });

      it("Verify if display stored procedure does not exists", function () {
        cy.task("queryDb", "SHOW PROCEDURE STATUS WHERE Db = 'sql_hr' AND Name = 'display'")
          .then((result: any) => {
            const rec = result;
            const procedureExists = rec.length > 0;
      
            cy.log(`Stored procedure displayRec2 exists: ${procedureExists}`);
      
            expect(procedureExists).to.be.false;
          });
      });

      it("verify the given store procedure executing the given  query ", function(){
        cy.task("queryDb","Call Selectt(2)").then((result:any)=>{
          const obj=result;
          const resultss=Object.values(obj);
          resultss.forEach((row: any) => {
            cy.log(row);
          });
          expect(resultss.length).to.equal(2);
        })
      });


      it("Verify  stored procedure displays one row containing specific salary", function () {
        cy.task("queryDb", "CALL displayRec7('63996')").then((result: any) => {
          const rec = result;
          const results = Object.values(rec);
      
          results.forEach((row: any) => {
            cy.log(row);
          });
      
          expect(results.length).to.be.at.least(1);
          });

 });
      
     
 it("Verify if table created by sored procedure is visible", function () {
cy.task("queryDb", "SHOW TABLE STATUS WHERE Database = 'sql_hr' AND Name = 'finance'")

    .then((result: any) => {
      const rec = result;
      const procedureExists = rec.length > 0;

      cy.log(`Stored procedure finance exists: ${procedureExists}`);

      expect(procedureExists).to.be.true;
    });
});    
});



