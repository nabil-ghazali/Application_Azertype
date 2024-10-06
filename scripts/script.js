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
    let i = 0
    let listPropositions = listeMots
    let btnValiderMot = document.getElementById("btnValiderMot");
    let baliseInputEcriture = document.getElementById("inputEcriture");

    afficherProposition(listPropositions[i])
    
    btnValiderMot.addEventListener("click", ()=>{
        console.log(baliseInputEcriture.value)
        if(baliseInputEcriture.value === listPropositions[i]) {
            score++
        }
        //Affiche le mot suivant lorsqu'on appui sur valider
        i++
        afficherResultat(score, i)
        //Efface la zone de saisi lorsqu'on appui sur valider 
        baliseInputEcriture.value = ''
        if(listPropositions[i] === undefined){
            afficherProposition("Le jeu est fini")
            //désactive le bouton valider lorsque la valeur 
            btnValiderMot.disabled = true
        } else {
            afficherProposition(listPropositions[i])
        }
    })

// Boutons radio : choix entre "mots" et "phrases"
let listBtnRadio = document.querySelectorAll('.optionSource input')

    for( let index = 0; i < listBtnRadio.length; index++) {
        // lors de l'appui du bouton radio on recupère l'evenement du changement 
        listBtnRadio[index].addEventListener("change", (event)=>{            
            console.log(event.target.value)
            //event.target.value récupère la "value" des boutons radios 
            if(event.target.value === "1"){
                listPropositions = listeMots
            }else if(event.target.value === "2"){
                listPropositions =listePhrases
            }
            //on affiche la proposition mise à jour selon le choix au click du bouton radio
            afficherProposition(listPropositions[i])

    })
    }


     afficherResultat(score, i)
}

