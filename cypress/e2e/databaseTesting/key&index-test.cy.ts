describe("Another table creation", function() {
    it("create another table city", function() {
      cy.task("queryDb", "CREATE TABLE sql_hr.city_hr ( city_name VARCHAR(20) PRIMARY KEY);")
      cy.task("queryDb", "INSERT INTO sql_hr.city_hr (city_name) VALUES ('mumbai'), ('jalgao'), ('pune'), ('dhule'), ('shimla'), ('nagar');");
    });
  });

describe("Key & Index Test Suite ",function(){


    before(function(){
        cy.task("queryDb" ,"create table sql_hr.user(userId INT UNIQUE,username varchar(20),age int,city varchar(20),PRIMARY KEY(userId),INDEX (age),INDEX (userId),FOREIGN KEY (city) REFERENCES sql_hr.city_hr(city_name));")
    })

    after(function(){
        cy.task("queryDb","drop table sql_hr.user");
        cy.task("queryDb","drop table sql_hr.city_hr");
    })
    it("Insert into Table", function(){
        cy.task("queryDb", "insert into sql_hr.user(userId, username, city)values(122, 'kartiki', 'mumbai'),(110, 'kanya', 'mumbai'), (106, 'miki', 'jalgao'),(104, 'maina', 'jalgao'),(107, 'gayiika', 'pune'),(111, 'karma', 'mumbai'),(121, 'samantha', 'dhule'),(108, 'kartiki', 'mumbai'),(173, 'painy', 'shimla'),(114, 'vernica', 'nagar');")
          .then((result: any) => {
            expect(result.affectedRows).to.equal(10);
          });
      });

     
    it("verify the presence of primary key on id column ", function(){
        cy.task("queryDb","show keys from sql_hr.user where key_name='PRIMARY';")
        .then((result: any)=>{
        expect(result[0].Column_name).to.equal("userId");
        })
    });

    it("verify the presence of index on age column", function(){
        cy.task("queryDb", "SHOW INDEXES FROM sql_hr.user WHERE Column_name='age';")
        .then((result: any) => {
            expect(result.length).to.be.at.least(1);
        });
    });
    
    
    it("verify the presence of foreign key constraint on city column", function(){
        cy.task("queryDb", "SHOW CREATE TABLE sql_hr.user;")
        .then((result: any) => {
            const createTableQuery = result[0]["Create Table"];
            expect(createTableQuery).to.include("CONSTRAINT `user_ibfk_1` FOREIGN KEY (`city`) REFERENCES `city_hr` (`city_name`)");
        });
    });

    it("verify the number of indexes on user table", function(){
        cy.task("queryDb", "SHOW INDEXES FROM sql_hr.user;")
        .then((result: any) => {
            expect(result.length).to.be.at.least(2);
        });
    });
  

    it("verify the number of unique keys on user table", function(){
        cy.task("queryDb", "SHOW KEYS FROM sql_hr.user WHERE Non_unique = 0;")
        .then((result: any) => {
            expect(result.length).to.equal(2);
        });
    });
})