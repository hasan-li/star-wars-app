## Running the app

```
yarn install
yarn start
```
Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Libraries used
- **axios**: for data fetching. Could be fetch api, but axios gives more flexibility
- **node-sass**: for using scss preprocessor
- **redux-saga**: as middleware for redux store
- **redux**: for common store management
- **react-router-dom**: for routing

## Notes
- app created by `create-react-app`
- `.env` file added for allowing app to use absolute paths, instead of relative (by adding `NODE_PATH=./` line to it)
- All components are functional component, using hooks