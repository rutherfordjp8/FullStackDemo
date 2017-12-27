# Introduction

You will be doing a to-do list app. You can add to the to-do list and it will store in the database. Meaning you can refresh and the data will still be there.

In the root directory there is a folder called "COMPLETED_FSR" that contains the complete code for this project. It contains the complete code as well as detailed comments to every file.

Note that I did not implement the delete functionality of the TO-DO list in the complete code.

If you watch the video I do not follow my own rules and refer back to my already complete project, please know that I do not typically do this. As I'm stubborn and know I can debug the issue's on my own. I only made the exception because of a time constraint. It's not good habit, so please do not follow it.

# First Steps

I have left the server and database but I suggest going into the files deleting everything in them and do them from scratch only useing the docs. This will make you more comfortable navigating docs and not make you feel like you need to refer back to previous projects in the future.

RUN `npm install`
1. Create server using docs only. In the console `npm run server-dev`
2. Make sure to also serve up the static html file using express. It's in 'react-client/dist/index.html'
3. Include bodyparser (specifically url encoded) You'll see it in the docs.
4. Create file for connecting to the database. Use the docs instead of previous sprints.
5. Run the schema.sql file. (given to you in the root directory of the repo)
6. Create React index.jsx. Make sure to have another console running `npm run react-dev`
Hint: Don’t forget to use ReactDOM to render the component to our div with the id of ‘root’. -- getElementById(‘root’);
Follow User Stories.

# User Stories

1. As a user I should be able to see my created to-do list items.
2. As a user I should be able to create new to-do list items.

HINTS / SUGGESTIONS

Implement this client-side first.
Connect to the server. Make a post request and make sure it is receiving.
Create the database function and use it inside the server-side post request.
Retrieve data back from the db.

3. As a user I should be able to delete created to-do list items.
Take note of using the ID from the database.
HINT: You may not have access to the id if you did not store it into state after adding the item to the database.
MORE HINTS: You can call function to get all the items from the database or you can use the success function inside of the POST request, it has an insertId property containing the id.




# For CSS (NOT Required):
Follow these guidelines to use my CSS. These can all be completed in the first User Story
1. <ul> should have an id of ‘list’
2. <li> should have a className of ‘list-item’
3. The the todoText should be inside of a <div> with className of ‘todo-text’



# Resources:
Attempt using only these resources and no previously used code
MySQL Docs: https://dev.mysql.com/
MySql NPM Docs: https://www.npmjs.com/package/mysql
Node: https://nodejs.org/en/docs/
Express: https://expressjs.com/
BodyParser: https://www.npmjs.com/package/body-parser
React: https://reactjs.org/
jQuery: https://api.jquery.com/
StackOverflow: https://stackoverflow.com
*Some Docs May not have been listed. Please use only official and npm docs.
