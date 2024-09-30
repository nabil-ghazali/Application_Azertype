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
        console.log("Votre score est de : "+ score + 'sur' + nbMotsProposes)
        
    }


/**
 * Cette fonction demande à l'utilisateur de choisir entre "mots" et "phrases" et retourne le choix de l'utilisateur
 * @return {string} : le choix de l'utilisateur, ce choix est "mots" ou "phrases
 */
function choisirPhrasesOuMots (){
    let choix = prompt ('Voulez vous jouez avec les mots (entrez "mots") ou les phrases (entrez "phrases")?')
        while(choix !== 'mots' && choix !=='phrases'){
            choix = prompt("Veuillez choisir entre 'mots' et 'phrases' : ")
        }
        return choix
    }

    
/**
 * Cette fonction lance la boucle de jeu, c'est à dire qu'elle demande à l'utilisateur de saisir tous les mots
 * contenus dans le tableau listePropositions. A chaque mot saisi, on incrémente le score de l'utilisateur
 * 
 * @param {array[string]} listePropositions 
 * @return {number} : le score de l'utilisateur
 */    
function lancerBoucleDeJeu(listeProposition){
// On lui demande de taper les mots ou phrases de la liste
    let score = 0
    for (let i = 0; i < listeProposition.length; i++  ) {
        motUtilisateur = prompt("veuillez entrez les mots suivants :" + listeProposition[i])
        // Vérification du mot saisi par l'utilisateur avec les mots de notre liste : 
        if (motUtilisateur === listeProposition[i]){
                score ++;
        }
    }
    return score
}


/**
 * Cette fonction lance le jeu. 
 * Elle demande à l'utilisateur de choisir entre "mots" et "phrases" et lance la boucle de jeu correspondante
 */
function lancerJeu(){
    let choix = choisirPhrasesOuMots ()
    let score = 0
    let nbMotsProposes = 0

//Si l'utilisateur choisi "mots", on lui demande de taper les mots suivants : 
    if(choix === "mots"){
        score = lancerBoucleDeJeu(listeMots)
        nbMotsProposes = listeMots.length
//Si l'utilisateur choisi "phrases", on lui demande de taper les mots suivants : 
    } else {
        score = lancerBoucleDeJeu(listePhrases)
        nbMotsProposes = listePhrases.length
    }

    afficherResultat(score, nbMotsProposes)
}

let baliseZoneProposition = document.getElementById("zoneProposition");
console.log(baliseZoneProposition);
console.log(baliseZoneProposition.clientHeight);
