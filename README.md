# Udemy Node with React

Work completed in Udemy's [Node with React: Full Stack Development](https://www.udemy.com/course/node-with-react-fullstack-web-development/) course.

## Deploying the server to Heroku

Heroku only supports NodeJS projects with a `package.json` file at the project root. The class sets up a git repository in the `server` subdirectory as opposed to the root directory. To deploy the server directory to Heroku, use `git subtree`:

```
git subtree push --prefix server heroku master
```

The git remote for the Heroku deployment is `https://git.heroku.com/intense-tor-63517.git`

Google project: https://console.developers.google.com/apis/dashboard?project=manifest-craft-263020
