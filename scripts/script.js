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

function afficherProposition(motAfficher){
    let zoneProposition = document.querySelector(".zoneProposition"); 
    zoneProposition.innerHTML = motAfficher
}


function lancerJeu(){
    //Initialisations
    let score = 0
    let i = 0;

    let btnValiderMot = document.getElementById("btnValiderMot");
    let baliseInputEcriture = document.getElementById("inputEcriture");

    afficherProposition(listeMots[i])
    btnValiderMot.addEventListener("click", ()=>{
        console.log(baliseInputEcriture.value)
        if(baliseInputEcriture.value === listeMots[i]) {
            score++
        }
        //Affiche le mot suivant lorsqu'on appui sur valider
        i++
        afficherResultat(score, i)
        //Efface la zone de saisi lorsqu'on appui sur valider 
        baliseInputEcriture.value = ''
        if(listeMots[i] === undefined){
            afficherProposition("Le jeu est fini")
            //désactive le bouton valider lorsque la valeur 
            btnValiderMot.disabled = true
        } else {
            afficherProposition(listeMots[i])
        }
    })

     afficherResultat(score, i)
}

