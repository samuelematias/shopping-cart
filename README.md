# Shopping Cart

## Demo

https://github.com/user-attachments/assets/fda5b193-2278-46e7-9703-33ddb101edcc

## Tech Stack

- [React Native](https://reactnative.dev/)
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [Expo](https://expo.dev/client)
- [React Navigation](https://reactnavigation.org/)
- [React Native Toast Message](https://github.com/calintamas/react-native-toast-message/tree/main)
- [React Native Testing Library](https://callstack.github.io/react-native-testing-library/)
- [Jest](https://jestjs.io/)
- and more!

## About

In this app, You can see your Menu items and add them to your Shopping cart.

> 💡 This project has a simple CI pipeline, to analyze the code and run the unit and ui tests. </br>
For more information, check the [ci.yaml](https://github.com/samuelematias/shopping-cart/blob/main/.github/workflows/ci.yml) file, which has the whole process explained in detail, step by step.

## Project

- This project revolves around building a simple menu and shopping cart.
- The user can add items from the menu to the shopping cart:

https://github.com/user-attachments/assets/e31e1993-c418-493e-ab80-be70ff2b6dba

- The user can change screens to the shopping cart:

https://github.com/user-attachments/assets/40d75da1-8b89-48db-abfc-bc5d4b425cba

- The shopping cart will have all the items that were added from the menu screen and an 'amount' display object showing the number of times that item was added to the shopping cart:

https://github.com/user-attachments/assets/8f895435-9fdc-41f4-a7f9-ad8aa3277217

- Users should have some feedback that an item was added to the cart:
  
https://github.com/user-attachments/assets/2b11c809-cea4-4dfe-a7ee-72b6f4d56a06

- There should be a (+) button to add 1 to the amount for an item and a (-) button to subtract 1 from the amount:

https://github.com/user-attachments/assets/5b499c7c-aea9-4895-b151-0a8c0a81fd51

- The shopping cart should also include the base price of the item, and the total price (base x amount):

https://github.com/user-attachments/assets/9532c1c3-db16-4159-a5fe-e5b64c54928a

- When an item in the shopping cart reaches 0 amount, it should be removed from the shopping cart:

https://github.com/user-attachments/assets/eb9dcc84-6d71-4204-9ac8-de9637033700

- There should be a total cost that is a sum of all the items (x the amount) in the shopping cart displayed at the bottom:

https://github.com/user-attachments/assets/4c8e41eb-3172-43eb-8ddb-f16d0f824539

## Next Steps (Future changes)
  
- Improve State Management </br>
  What: Maybe, introduce a global state management solution, like Redux, to handle more complex state across multiple components and screens, depending on the scale of the app; </br>
  How: Refactor the current context or state management logic into a more scalable structure. </br>
  
- User Authentication </br>
  What: Add user authentication (e.g., login, signup) to allow personalized shopping experiences; </br>
  How:  Integrate OAuth or JWT authentication using Firebase, Auth0, or another authentication service. </br>
  
- Persistent Storage (Offline Mode) </br>
  What: Enable offline mode with persistent storage so that users can add items to their cart even without an internet connection; </br>
  How: Use libraries like AsyncStorage or SQLite to locally save the cart and other user data. Synchronize data with the server when the user goes back online. </br>

 - Internationalization (i18n) </br>
   What: Support multiple languages to increase accessibility and appeal to users from different regions; </br>
   How: Implement react-i18next to handle translations and locale-based formatting. Create a structure that allows switching between languages dynamically, and ensure that text is externalized for easy translation. </br>

- Optimize Performance for Large Data Sets </br>
  What: Improve app performance when dealing with large amounts of data, such as an extensive list of products or cart items; </br>
  How: Implement lazy loading, virtualized lists, and pagination to handle large data sets efficiently. Optimize rendering performance by profiling components and minimizing re-renders. </br>
  
- Dark Mode and Theme Customization </br>
  What: Add support for dark mode and allow users to customize the theme of the app; </br>
  How: Use React Native's Appearance API to detect the user's system theme and automatically switch between dark and light themes. Implement a theme provider to handle different color schemes. </br>

## Running Locally

```
First of all, correctly configure the React Native development environment on your machine, see https://reactnative.dev/docs/environment-setup, and the Expo development environment on your machine, see https://docs.expo.dev/tutorial/create-your-first-app/.

- Enter in the main directory:
$ cd shopping-cart

- For install server dependencies:
$ npm install

- Run the simulador/emulator:
$ npx expo start
```

## How to Contribute

```
- Fork the project

- Create a new branch with your changes:
$ git checkout -b feat/my-feature

- Save your changes and create a commit message telling you what you did:
$ git commit -m "feat: implement my-feature"

- Submit your changes:
$ git push origin feat/my-feature
```

## Cloning / Forking

Please review the [license](https://github.com/samuelematias/shopping-cart/blob/main/LICENSE.txt) and remove all of my personal information (docs, images, etc.).

## Author

<!-- prettier-ignore -->
<table>
  <tr>
    <td align="center"><a href="https://www.samuelematias.com/"><img src="https://avatars.githubusercontent.com/u/5155386?v=4" width="100px;" alt="Samuel Matias"/><br /><sub><b>Samuel Matias</b></sub></a><br /><a href="https://www.linkedin.com/in/samuelematias/"title="Code">💻</a><a href="https://www.samuelematias.com/linktree"title="Design"> 🎨</a></td></td>
</table>
