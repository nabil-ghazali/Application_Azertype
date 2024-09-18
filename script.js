let listeMots = ["Cachalot", "Pétunia", "Serviette"]
let score = 0
let motUtilisateur = []

// Vérification du mot saisi par l'utilisateur : on vérifie qu'il correspond au premier mot du tableau "listeMots"
    motUtilisateur = prompt("veuillez entrez les mots suivants :" + listeMots[0])
    if (motUtilisateur === listeMots[0]){
        score += 1;
    }

// Vérification du mot saisi par l'utilisateur : on vérifie qu'il correspond au premier mot du tableau "listeMots"
    motUtilisateur = prompt("veuillez entrez les mots suivants :" + listeMots[1])
    if (motUtilisateur === listeMots[1]){
        score += 1;
    }

// Vérification du mot saisi par l'utilisateur : on vérifie qu'il correspond au premier mot du tableau "listeMots"
    motUtilisateur= prompt("veuillez entrez les mots suivants :" + listeMots[2])
    if (motUtilisateur === listeMots[2]){
        score += 1;
    }

// Affichage du score de l'utilisateur    
    console.log("Score :", score)