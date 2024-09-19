const listeMots = ["Cachalot", "Pétunia", "Serviette"]
let score = 0
let motUtilisateur = []

// Vérification du mot saisi par l'utilisateur : on vérifie qu'il correspond au premier mot du tableau "listeMots"
for (let i = 0; i < 3; i = i + 1 ) {
    motUtilisateur = prompt("veuillez entrez les mots suivants :" + listeMots[i])

    if (motUtilisateur === listeMots[0]){
        score += 1;
    }else if (motUtilisateur === listeMots[1]){
        score += 1;
    }else if (motUtilisateur === listeMots[2]){
        score += 1;
    }

// Affichage du score de l'utilisateur    
    
}

console.log("Score :", score)