# doc-patients-
doctor patients appointment booking app. Built with micro-services architecture.
How to run:
* Make sure you have nodejs,mongodb,mysql & Spring boot installed.
* We have 3 microservices doctors, patients &appointments. 
* for the 2 node apps(patients & doctors) make sure  you installed the follwing packages through these commands:
* npm install
* npm install express
* npm install request
* npm install mysql
* npm install bcrypt
* npm install jsonwebtoken

* Appointments microservice:
(springboot & mongodb)
* create a db in monogo with the name appointments
* create a collection named Appointment
* run the java file appointementapplication in eclipse to run the server (it runs by default on localhost:8080)
* At the end when try the booking feature with patient come and check that the appointment booked by the patient has been added to the appointements db by the following api (get request)localhost:8080/schedule this shows all the history of the appointments

* doctors microservice:
(nodejs , mysql)
* for the mysql database I used a local database that will be created in the node app once you run the server, just change the credentials in the first lines of the server.js file
to match your local db credentials. or just you can make your db username as root and password as password.

*  The app runs on localhost:3000 you may use postman for the testing
*run node server.js in cmd at the folder's directory

* To test the register feature use the api (post request) localhost:3000/register you can define the username,password and the othe inputs in the auth.js file found in the controllers folder.
* To test the login feature use the api (post request) localhost:3000/login you can enter the username & password in the auth.js file found in the controllers folder.

* Patients microservice: 
(nodejs , mysql)
* for the mysql database I used a local database that will be created in the node app once you run the server, just change the credentials in the first lines of the server.js file
to match your local db credentials. or just you can make your db username as root and password as password.

* The app runs on localhost:3001 you may use postman for the testing
* run node server.js in cmd at the folder's directory

* To test the register feature use the api (post request) localhost:3001/register you can define the username,password and the othe inputs in the auth.js file found in the controllers folder.
* To test the login feature use the api (post request) localhost:3001/login you can enter the username & password in the auth.js file found in the controllers folder.
* To test the check doctor schedule feature use the api localhost:3001/schedule/"enter a name of a registered doctor".

* for simplicty the doctors slots are slot1 and slot2 and the avaliable days are sunday and monday
* To test the book appointment with doctor feature use the api (patch request)localhost:3001/book/"enter a name of a registered doctor"/enter a week day (sunday or monday)/slot(slot1 or slot2).





