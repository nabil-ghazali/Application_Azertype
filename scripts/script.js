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
 * Cette fonction affiche une proposition, que le joueur devra recopier, 
 * dans la zone "zoneProposition"
 * @param {string} proposition : la proposition à afficher
 */
function afficherProposition(motAfficher){
    let zoneProposition = document.querySelector(".zoneProposition"); 
    zoneProposition.innerHTML = motAfficher
}

/**
 * Cette fonction construit et affiche l'email. 
 * @param {string} nom : le nom du joueur
 * @param {string} email : l'email de la personne avec qui il veut partager son score
 * @param {string} score : le score. 
 */
function afficherEmail(nom, email, score) {
    let mailto = `mailto:${email}+?subject=Partage du score Azertype&body=Salut, je suis ${nom} et je viens de réaliser le score ${score} sur le site d'Azertype !`
    location.href = mailto
}

//Function de validation du champ "nom"
function validerNom (nom) {
    if(nom.length >= 2){
        return true
    }
        return false 
}

//Function de validation du champ "nom"
function validerEmail (email) {
    let emailRegex = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+")
        if(emailRegex.test(email)) {
            return true
        }
            return false 
    }

/**
 * Cette fonction lance le jeu. 
 * Elle demande à l'utilisateur de choisir entre "mots" et "phrases" et lance la boucle de jeu correspondante
 */

function lancerJeu(){
    //Initialisations
    initAddEventListenerPopup()
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

    for( let index = 0; index < listBtnRadio.length; index++) {
        // lors de l'appui du bouton radio on recupère l'evenement du changement 
        listBtnRadio[index].addEventListener("change", (event)=>{            
            console.log(event.target.value)
            //event.target.value récupère la "value" des boutons radios 
            if(event.target.value === "1"){
                listPropositions = listeMots
            }else if(event.target.value === "2"){
                listPropositions = listePhrases
            }
            //on affiche la proposition mise à jour selon le choix au click du bouton radio
            afficherProposition(listPropositions[i])

        })
    }

    
    let form = document.querySelector('form')
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        let nom = document.getElementById("nom").value;
        console.log(nom)
    
        let email = document.getElementById("email").value;
        console.log(email)

        //affiche l'email seulement si les deux champs sont correctement remplis
        if(validerEmail(email) && validerNom(nom)) {
        let scoreEmail = `${score} / ${i}`
        
         afficherEmail(nom, email, scoreEmail)
        } console.log("error")
    });
    
     afficherResultat(score, i)
}

