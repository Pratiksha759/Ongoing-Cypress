import { any } from "cypress/types/bluebird";
import { result } from "cypress/types/lodash";





  describe("database Test suite", () => {
    before(function (){
      cy.task("queryDb", "create table sql_hr.department_hr(id int,emp_name varchar(20),city varchar(20));");
    });``
    afterEach(function (){
        cy.task("queryDb", "select * from sql_hr.department_hr");
      });

    after(function(){
        cy.task("queryDb","drop table sql_hr.department_hr")
        .then((result:any)=>{
          expect(result.message).to.equal('')
        })
    })

    it("Testing DB", function () {
      cy.task("queryDb", "select * from sql_hr.employees ").then(function (
        res: any
      ) {
        var rec = res;
        const results: any[] = Object.values(rec[0]);
  
        cy.log(results[0]);
        cy.log(results[1]);
        cy.log(results[2]);
      });
    });
  
    it("Insert into Table", function(){
      cy.task("queryDb", "insert into sql_hr.department_hr(id, emp_name, city)values(108, 'kartiki', 'mumbai'),(110, 'kanya', 'mumbai'), (106, 'miki', 'jalgao'),(104, 'maina', 'jalgao'),(107, 'gayiika', 'pune'),(111, 'karma', 'mumbai'),(121, 'samantha', 'dhule'),(108, 'kartiki', 'mumbai'),(173, 'painy', 'shimla'),(114, 'vernica', 'nagar');")
        .then((result: any) => {
          expect(result.affectedRows).to.equal(10);
        });
    });

    it("Update Table",function(){
        cy.task("queryDb","update sql_hr.department_hr set emp_name='sharmila' where id=114;")
        .then((result: any) => {
            expect(result.changedRows).to.equal(1);
 });
  });

  it("Verify the record in the Table",function(){
    cy.task("queryDb","select emp_name from sql_hr.department_hr where id=110;")
    .then((result: any) => {
        expect(result[0].emp_name).to.equal('kanya');
});
});

it("Find how many members have the required city as Jalgao",function(){
    cy.task("queryDb","select Count(*) as rowCount from sql_hr.department_hr where city='jalgao'")
    .then((result:any)=>{
    expect(result[0].rowCount).to.equal(2);
    
    })
})


it("Delete Record from table ",function(){
  cy.task("queryDb","delete from sql_hr.department_hr where id=110;")
    .then((result: any) => {
        expect(result.affectedRows).to.equal(1);
    });
});

 it("Verify Non-Existent Record in the Table",function(){
  cy.task("queryDb","select * from sql_hr.department_hr where id=999;")
  .then((result: any) => {
      expect(result).to.have.lengthOf(0);
  });
});

it("Validate Data Types in Table",function(){
  cy.task("queryDb","select * from sql_hr.department_hr;")
  .then((result: any) => {
      result.forEach((row: { id: any; emp_name: any; city: any; }) => {
          expect(typeof row.id).to.equal('number');
          expect(typeof row.emp_name).to.equal('string');
          expect(typeof row.city).to.equal('string');
      });
  });
});


it("Performance Test: Retrieve All Records",function(){
  cy.task("queryDb","select * from sql_hr.department_hr;")
  .then((result: any) => {
      expect(result).to.have.length.above(0);
  });
});

// it("Retrieval of emp_name whose name starts with 'k'", function(){
//   cy.task("queryDb", "select emp_name from sql_hr.department_hr where emp_name like 'k%'")
//     .then((result: any) => {
//       expect(result[0]).to.have.length(3);
//     });
// });

it("Inserting a new department", function(){
  cy.task("queryDb", "insert into sql_hr.department_hr (id, emp_name, city) values (109, 'new_dept', 'new_city')")
    .then((result: any) => {
      expect(result.affectedRows).to.equal(1);
    });
});
  })

