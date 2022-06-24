# Bet System App 

This project is an application that simulates a betting system, it was realized with the help of technologies such as :

    -React
    -Typescript
    -Jest and React Testing Library for testing
    -Some React Hooks, Redux
    -Material UI for dynamic components
    -Animation.css for animations (Library: animate.css [Last Version])
## Getting Started

- Clone this repo
- Create a new feature-branch from master-branch

Execute the following commands:

- npm install    ---- This runs the app in the development mode and opens [http://localhost:3000](http://localhost:3000) to view it in the browser.
- npm run test   ---- Launches the test runner in the interactive watch mode.

Extra command:

We like to maintain a consistent and quality work, so we have to guarantee a 100% coverage when it comes to unit testing, this command helps to verify it and it is recommended to use it while working on any new functionality. 

- npm run test -- --coverage 

## Work and App Description

We rely on create-react-app to generate the project

The first task of this project was to define how the states would be handled, for convenience and scalability of the application it was decided to use Redux. After that, the following libraries were installed: 

    -@reduxjs/toolkit: "^1.8.2",
    -redux-mock-store: "^1.5.4",
    -redux-observable: "^2.0.0",
    -react-redux: "^8.0.2",

Next step was to create folders such as components, store, actions, reducers, selectors and thunks. This last one was created to generate an action in charge of loading the data from the API and save it on the reducer when the application is rendered for the first time.

Since the mock to follow only had the mobile version I decided to make an application with responsive design with a limit on screens larger than 900px for the desktop version and smaller for the mobile.
 
The application has a responsive design, so it will only be displayed as in the mock in screens smaller than 900px. I structured the application in 2 parts, the navbar and the betting system. For both I relied on the Material UI style libraries and components (Box, Typography, IconButton, Grid, ...etc) because of the many features and properties that have each one.
    
    -@emotion/react: "^11.9.3",
    -@emotion/styled: "^11.9.3",
    -@material-ui/core: "^4.12.4",
    -@mui/icons-material: "^5.8.4",
    -@mui/material: "^5.8.5",
    -@mui/styled-engine: "^5.8.0",
    -@mui/styled-engine-sc: "^5.8.0",

____**Relevant Components**

    *Navbar*
    The first one has the title and an icon button that displays a side drawer with animation where you can see the selected bets that are stored in the reducer.

    *BetSystem*
    This component contains on the left the list of events that have at least one market, and on the right a betslip with the selected bets.
    
    *MatchModule*
    This component gives the format in which the events are presented, it consists of 3 parts: the title, the ToWin section where you can only choose the home or away win, and the To Score First section, where you can only choose one of the scorers. When one of the options is selected, its respective button changes to green until it is deselected or the opposite option is selected.

    *BetSlip*
    Here you can see all the selected bets and gives the user another option to return the selected button to its normal color by doing click on its respective Delete button that will appear in this component. 

## Unit Tests

For unit tests, elements of the React Testing Library were used to track components and dispatch actions, and for some tests it was necessary to mock the store and dispatch, for which Jest was helpful. Here are some of the libraries:

    -@testing-library/jest-dom: "^5.16.4",
    -@testing-library/react: "^13.3.0",
    -@testing-library/user-event: "^13.5.0",

## Author
- **Jose Vallejo** - _Initial work_ - [github](https://github.com/Javmendez727/BetSystemApp)
