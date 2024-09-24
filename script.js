const listeMots = ["Cachalot", "Pétunia", "Serviette"]

let score = 0
let motUtilisateur = []
let choixUtilisateur = ""

//function lancerBoucleDeJeu

//Choix de l'utilisateur entre phrases ou mots
while(motUtilisateur !== 'mots' || motUtilisateur !=='phrases'){
motUtilisateur = prompt("Veuillez choisir entre 'mots' ou 'phrases' : ")

    if(motUtilisateur === 'mots'){
        console.log('mots')
        
    }else if(motUtilisateur === 'phrases'){
        console.log('phrases')
    }
}

console.log(motUtilisateur)

// Vérification du mot saisi par l'utilisateur : on vérifie qu'il correspond au premier mot du tableau "listeMots"
// for (let i = 0; i < listeMots.length; i++  ) {
//     motUtilisateur = prompt("veuillez entrez les mots suivants :" + listeMots[i])
//     if (motUtilisateur === listeMots[i]){
//         score += 1;
//     }

// }

// function retournerMessageScore(score, nombreQuestions){
//     let message = "Votre score est de :"+ score + "sur " + nombreQuestions
//     return message
// }

// Affichage du score de l'utilisateur    
// prompt(retournerMessageScore(score, listeMots.length))