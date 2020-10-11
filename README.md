This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
## Liens 

Application prod : https://devops-davidelbar.herokuapp.com/

Application development (pre-prod) : https://devops-davidelbar-development.herokuapp.com/

## Description Projet 

Salut Pierre, je me suis dis que j'allais t'expliquer brièvement mon projet, au cas où ça t'intéresse.
C'est un site front pour "illustrer" un album d'un rappeur français - Népal - qui est mort l'année dernière.
Il y a un petit truc sympa, c'est lorsque tu play la music, des mots s'affiche des fois lorsqu'il rap.
Après c'est pas fini, mais j'ai voulu faire un truc joli et sympa, sans trop surchargé, avec pas mal de références.

### Explication CI/CD et principe

Il y a, à chaque modification du code source, une verification qui passe avec Github Actions. En effet, lors de la détection de changement sur le code source, il va exécuter la pipeline (workflow). De ce fait, il va avoir une suite de tâches à exécuter (il y a deux cas, car il existe development.yml & prod.yml. A chaque fois que l'on va push sur la branche "development", on va utiliser development.yml et à chaque fois que on va pull sur la branche "main", on utilise prod.yml) :
- Pour Checkout code : on récupère le code source (en utilisant actions/checkout@v2)
- Ensuite on install Node v12 (actions/setup-node@v1)
- On installe les dépendance du projet "npm install"
- On vérifie la syntaxe "eslint"
- Enfin, on déploie directement sur Heroku

Les étapes vont donc être effectué dans l'ordre, a la moindre erreur le processus s'arrête en nous indiquant où a eu lieu le problème.


### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
