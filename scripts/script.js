// Affichage du résultat de l'utilisateur   
function afficherResultat(score, nbMotsProposes){
        console.log("Votre score est de : "+ score + 'sur' + nbMotsProposes)
        
    }

//function choix de l'utilisateur entre phrases ou mots
function choisirPhrasesOuMots (){
    let choix = prompt ('Voulez vous jouez avec les mots (entrez "mots") ou les phrases (entrez "phrases")?')
        while(choix !== 'mots' && choix !=='phrases'){
            choix = prompt("Veuillez choisir entre 'mots' et 'phrases' : ")
        }
        return choix
    }
     
    
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


function lancerJeu(){
    let choix = choisirPhrasesOuMots ()
    let score = 0
    let nbMotsProposes = 0

//Si l'utilisateur choisi "mots", on lui demande de taper les mots suivants : 
    if(choix === "mots"){
        score = lancerBoucleDeJeu(listeMots)
        nbMotsProposes = listeMots.length
//Si l'utilisateur choisi "mots", on lui demande de taper les mots suivants : 
    } else {
        score = lancerBoucleDeJeu(listePhrases)
        nbMotsProposes = listePhrases.length
    }

    afficherResultat(score, nbMotsProposes)
}

let baliseZoneProposition = document.getElementById("zoneProposition");
console.log(baliseZoneProposition);
console.log(baliseZoneProposition.clientHeight);
