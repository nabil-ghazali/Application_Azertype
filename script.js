let listeMots = ["Cachalot", "Pétunia", "Serviette"]
let score = 0
let motUtilisateur = []
    motUtilisateur = prompt("veuillez entrez les mots suivants :" + listeMots[0])
    if (motUtilisateur === listeMots[0]){
        score += 1;
    }

    motUtilisateur = prompt("veuillez entrez les mots suivants :" + listeMots[1])
    if (motUtilisateur === listeMots[1]){
        score += 1;
    }

    motUtilisateur= prompt("veuillez entrez les mots suivants :" + listeMots[2])
    if (motUtilisateur === listeMots[2]){
        score += 1;
    }
    console.log("Score :", score)