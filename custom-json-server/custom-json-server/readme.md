## JSON server

1. <a href="https://nodejs.org/" target="_blank">Install Node.js</a>
2. npm install -g json-server
3. json-server db/db.json --port 3000
4. [More info on GitHub](https://github.com/typicode/json-server)

## Additional Links

<a href="https://stackedit.io/app" target="_blank">Markdown editor online</a>

## Deploy to Heroku

1. Create an account on heroku.com
2. Install the Heroku CLI on PC
3. Connect the Heroku CLI : heroku login
4. Create a remote heroku project: heroku create name-of-the-project
5. Push created project to Heroku: git push heroku master
6. Open the project: heroku open

## More information of heroku deploy and required commands:

https://elements.heroku.com/buttons/eecs130/json-server-heroku

## Remove project from heroku:

1. heroku apps:destroy name-of-the project
2. name-of-the project

## Get logs:

1. heroku logs --tail
