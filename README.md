# proudtales-com-2021-alpha

self publishing with react, material-ui

## CI/CD Pipeline with GitHub Actions
### `In local terminal`
`firebase init`
? What do you want to use as your public directory? build
? Configure as a single-page app (rewrite all urls to /index.html)? Yes
? Set up automatic builds and deploys with GitHub? No
`mkdir .github`
`mkdir workflows in .github`
`touch main.yml`
implement some script in main.yml
`firebase login:ci`
copy token 

### `GitHub`
create new remote repo
go to setting and then secrets
create new rpository secret and attched token from `firebase login: ci`

### `back to local terminal`
`git commit -m ""`
`git branch -M main`
`git remote add origin url`
`git push -u origin main`

## convert UTC time to Local time !
get browser timezone javascript
`const clientTimezone = new Intl.DateTimeFormat().resolvedOptions().timeZone`
covert UTC time from Cloud Firestore to local time
`const localDateTime = new Date(books[i].createdAt).toLocaleString("en-US", {timeZone: clientTimezone})`

## Firebase
### run firebase emulator
`firebase init emulators` and then project setup
=== Emulators Setup
? Which Firebase emulators do you want to set up? Press Space to select emulators, then Enter to confirm your choices. (Press <space> to select, <a> t
o toggle all, <i> to invert selection)Hosting Emulator
? Which port do you want to use for the hosting emulator? 5000
? Would you like to enable the Emulator UI? Yes
? Which port do you want to use for the Emulator UI (leave empty to use any available port)? 
? Would you like to download the emulators now? Yes

### run functions locally
`firebase emulators:start`
If you want to start a particular emulator, use the --only flag:
for example `firebase emulators:start --only hosting`
Do not forget `yarn build` to update firebase hosting local server 

## ESLint
https://eslint.org/docs/user-guide/getting-started
### Installation
`npm install eslint --save-dev` or `yarn add eslint --dev`
`npx eslint --init` or `yarn run eslint --init`

### Run ESLint
`npx eslint yourfile.js` or `yarn run eslint yourfile.js`

### Configuration
After running `eslint --init`, you'll have a `.eslintrc.{js,yml,json}` file in your directory. 
In it, you'll see some rules configured like this:

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.