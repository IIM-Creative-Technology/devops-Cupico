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



