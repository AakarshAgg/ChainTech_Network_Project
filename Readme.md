### Tech Stack
1. Node js
2. MongoDB

### Functionalities
1. Users should be able to create tasks with a title and description.
2. Users should be able to view a list of all tasks.
3. Users should be able to mark tasks as completed.
4. Users should be able to edit task details.
5. Users should be able to delete tasks.
6. User should be able to set due date.
7. User should be able to categorize tasks.

### How to setup project

1. Download and extract all the files.
2. Run command ``` npm i``` to install all the node modules
3. Create a .env file and set the "PORT" and "MONGODB_URL" variables according to you.
4. Use command ```npm start ``` to start the project

### Code Structure and key decisions
1) config:- contains all the database configrations related to database connection.
2) controller:-contains all the functionalities to add,delete,update etc.
3) middleware:-check whether condition satisfied or not.
4) model:-contains schema of the database and contains validations also.
5) router:-all the routes are defined in this folder.
6) server.js:- it is the entry point
7) app.js:- this is the backbone
