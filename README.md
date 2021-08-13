# Contacts App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and created according to this [tutorial](https://www.youtube.com/watch?v=0riHps91AzE), then further modified.

## How to Run the App

To run the app, first, you need to create the JSON server. Create a folder named 'server-api'where the project is, and in that folder, run

### 'npm init --yes'

then, run

### 'npm i --save json-server'

After everything is installed, create a file called db.json and type the following and save.
{
"contacts": []
}
Then, go to package.json in 'server-api', change "scripts:" section to
"scripts": {"start": "json-server -p 3006 -w db.json"}

So that we can watch our json file when we run server-api using `npm start` from http://localhost:3006

To run the application, in the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
