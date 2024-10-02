/*********************************************************************************
 * 
 * Ce fichier contient toutes les fonctions nécessaires au fonctionnement du jeu. 
 * 
 *********************************************************************************/

/**
 * Cette fonction affiche dans la console le score de l'utilisateur
 * @param {number} score : le score de l'utilisateur
 * @param {number} nbMotsProposes : le nombre de mots proposés à l'utilisateur
 */
function afficherResultat(score, nbMotsProposes){
    let zoneScore = document.querySelector(".zoneScore span")

    let affichageScore = `${score} / ${nbMotsProposes}`

    zoneScore.innerHTML = affichageScore;
        //console.log("Votre score est de : "+ score + 'sur' + nbMotsProposes)
        
    }

/**
 * Cette fonction lance le jeu. 
 * Elle demande à l'utilisateur de choisir entre "mots" et "phrases" et lance la boucle de jeu correspondante
 */
function lancerJeu(){
    // let choix = choisirPhrasesOuMots ()
    let score = 0
    let nbMotsProposes = 0
    let btnValiderMot = document.getElementById("btnValiderMot");
    let baliseInputEcriture = document.getElementById("inputEcriture");
    let i = 0;

    btnValiderMot.addEventListener("click", ()=>{
        afficherProposition(listeMots[i])
        i++

    })

    afficherResultat(score, nbMotsProposes)
}

function afficherProposition(motAfficher){
    let zoneProposition = document.querySelector(".zoneProposition"); 
    let affichageProposition = `${motAfficher}`
    zoneProposition.innerHTML = affichageProposition
}