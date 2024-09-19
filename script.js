const listeMots = ["Cachalot", "Pétunia", "Serviette"]
let score = 0
let motUtilisateur = []

// Vérification du mot saisi par l'utilisateur : on vérifie qu'il correspond au premier mot du tableau "listeMots"
for (let i = 0; i < listeMots.length; i++  ) {
    motUtilisateur = prompt("veuillez entrez les mots suivants :" + listeMots[i])
    if (motUtilisateur === listeMots[i]){
        score += 1;
    }

}

function retournerMessageScore(score, nombreQuestions){
    let message = "Votre score est de :"+ score + "sur " + nombreQuestions
    return message
}

// Affichage du score de l'utilisateur    
prompt(retournerMessageScore(score, listeMots.length))