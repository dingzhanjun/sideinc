# Getting Started

- Please read the INSTRUCTIONS.md first
- For any questions around Create React App (CRA), reference
  CRA_DOCUMENTATION.md
- To run the application: yarn && yarn start
- To run the tests: yarn test
- If data cannot be fetched, please update with a new token in line #44 in file src/hooks/datahooks.js
- There is no integration/E2E test

# Code and Design Decisions

- Folder omponents has all components
- Folder pages has all views, other views can be added here
- Folder hooks has all custome hooks
- Sass is employed for styling
- Custome Hook is used to help fetch data
- Axios is used to make http request
- Property list page uses grid layout to display properties
- Layout is mobile first
- No pagination or virtualization is employed to deal with potential performance issue when dataset is large
