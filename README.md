# Udemy Node with React

Work completed in Udemy's [Node with React: Full Stack Development](https://www.udemy.com/course/node-with-react-fullstack-web-development/) course.

## Deploying the server to Heroku

Heroku only supports NodeJS projects with a `package.json` file at the project root. The class sets up a git repository in the `server` subdirectory as opposed to the root directory. To deploy the server directory to Heroku, use `git subtree`:

```
git subtree push --prefix server heroku master
```

## Additional Information

- Git remote for the Heroku deployment: `https://git.heroku.com/intense-tor-63517.git`
- [Google project (dev)](https://console.developers.google.com/apis/dashboard?project=manifest-craft-263020)
- [MongoDB cluster (dev)](https://cloud.mongodb.com/v2/5e050f2179358e85069be8da#clusters)

### Off the shelf things

- [Passport](http://www.passportjs.org/): used for the Google Auth integration
- [Materialize](https://materializecss.com/): material design based front-end framework
