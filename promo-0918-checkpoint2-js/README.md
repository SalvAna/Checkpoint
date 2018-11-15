# Checkpoint n°2 nov 2018 - **4h**

Pour ce travail tu as 4h devant toi. Ce checkpoint n'est pas un examen, il va nous permettre de valider tes compétences, essaye donc de le faire au maximum de ton côté.
Ce checkpoint est très consistant, si tu n'arrives pas à tout faire ce n'est pas grave, fais de ton mieux ;)



## **!!! PREMIERE ÉTAPE OBLIGATOIRE AVANT DE COMMENCER LE PREMIER EXERCICE !!!**


* Clone ce projet
* Crée une branche "ville_nom_prenom", qui va contenir ton avancée. (ville_nom_prenom sera remplacé par la ville de ton campus, ton nom et ton prénom...)



## Pré-requis (outils installés)

* NodeJS
* NPM
* [wcs-checkpoints-quiz](https://www.npmjs.com/package/wcs-checkpoints-quiz)
* [create-react-app ](https://github.com/facebook/create-react-app)


## Étape 1 - Quiz

* Pour lancer le quiz, ouvre un terminal à la racine de ce projet, et tape la commande suivante :

```sh
wcs-checkpoints-quiz start
```
* Suis les instructions présentes dans le terminal
* Réponds aux questions qui te seront posées
* Une fois le quiz terminé, n'oublie pas de commit le fichier de réponses

## Étape 2 - React

<img src="https://media.giphy.com/media/DJM88aCmEeaNG/giphy.gif" height="40">


Pour cet exercice tu vas devoir créer un projet se nommant **pokereact** grâce au `create-react-app`.
Ce projet aura pour but de travailler avec deux composants : `<PokemonList />` et `<Pokemon />`.

Pour récupérer les informations, tu devras te servir de l'API https://pokeapi.co *via* l'URL http://pokeapi.salestock.net/api/v2/pokemon/ , celle-ci ne nécessite aucune authentification tu peux donc l'utiliser sans problème.
Tu peux utiliser au choix [Axios](https://github.com/axios/axios) ou [Fetch](https://developer.mozilla.org/fr/docs/Web/API/Fetch_API/Using_Fetch) pour récupérer les données.

* `<PokemonList />` devra récupérer les Pokemons de l'API et devra appeler autant de composants `<Pokemon />` qu'il y a d'éléments dans le tableau récupéré depuis l'API.
* `<Pokemon />` devra récupérer via des *props* le nom et l'URL pour récupérer la suite des informations. Celui-ci devra donc afficher l'image, le nom du Pokemon et les différents mouvements disponible (en requêtant l'URL du type http://pokeapi.salestock.net/api/v2/pokemon/1/, ou le `/1/` correspond à l'id du Pokemon) et les afficher dans la page sous le format de ton choix.
* `<PokemonList />` devra également permettre une pagination en bas de page qui sera gérée grâce au _state_. Il permettra ainsi d'afficher les vingt premiers puis les vingts suivants etc... Pour cela tu peux regarder dans la documentation sur les [ressources](https://pokeapi.co/docs/v2.html#resource-lists) ou bien récupérer tous les pokemons et faire un [slice()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/slice) dessus.

## Étape 4 - Bonus

Il te reste du temps ? Parfait ! Tu vas pouvoir ajouter quelques fonctionnalités utiles à ton projet React !


* Créer une page pour afficher la liste des baies (http://pokeapi.salestock.net/api/v2/berry) et mettre en place le routing _via_ [React Router](https://reacttraining.com/react-router/web/guides/basic-components)
* Stocker en localStorage la requête pour ne pas refaire le fetch/axios à chaque rafraichissement

## Étape 5 - Et voilà...

Tu peux aller te désaltérer à la brasserie, tu l'as amplement mérité !!

**NB : Tu ne dois pas commencer par cette étape... ;)**

![Good Luck](https://media.giphy.com/media/AC1PtbdsJZyOQ/giphy.gif)
