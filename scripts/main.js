/*********************************************************************************
 * 
 * Point d'entrée, c'est lui qui intialise le jeu et lance la boucle de jeu. 
 * 
 *********************************************************************************/

// Ici, j'ai mis la fonction lancerJeu() en commentaire pour ne pas être dérangé par l'affichage des popups. 
lancerJeu()



/**************
 * 
 * Pour récupérer un élément du DOM :

    utilisez defer dans l’inclusion de vos fichiers JS pour retarder leur prise en compte, afin que la variable document ait le temps d’être créée ; 

    partez du point d’entrée du DOM : la variable document ;

    utilisez les méthodes adaptées : getElementById, querySelector ou querySelectorAll. 
 * 
 **************/

//Avec la méthode getElementById on séléctionne l'input où le joueur va écrire son texte
let inputEcriture = document.getElementById("inputEcriture");
console.log(inputEcriture);

//Avec la méthode getElementById on séléctionne le bouton de validation
let boutonValidation = document.getElementById("btnValiderMot");
console.log(boutonValidation);

//Avec la méthode querySelector on séléctionne l’endroit où le mot proposé sera affiché
let baliseZoneProposition = document.querySelector(".zoneProposition");
console.log(baliseZoneProposition);

//Avec la méthode querySelector on séléctionne l’endroit où le score sera affiché
let baliseZoneScore = document.querySelector(".zoneScore span");
console.log(baliseZoneScore);

//Avec la méthode querySelectorAll on séléctionne les boutons radio de choix.
let baliseZoneOptionSource = document.querySelectorAll(".optionSource input");
console.log(baliseZoneOptionSource);

console.log("hello")

