function test_age(){   
    let age= prompt("Quelle est votre age?");
    if(age<18)
    {  
         document.write("Attention accès refusé, vous êtes mineur");
        document.body.style.backgroundColor ="red";
    }
    else
    {
        document.write("Ok, vous êtes Majeur");
        document.body.style.backgroundColor ="green";
    }
}
function affichage(){
    let prenom = prompt("Saisir votre prénom");
    let nom = prompt(" Saisir votre nom");
    document.write("<div style='border:10px solid #EFCEDC; width:400px; height: 300px; margin: auto; color: #ABA2C0; font-size: 3em;'>");
    document.write("Bonjour"+prenom +" "+ nom);
    document.write("</div>");
}
function test_couleur(){
    let couleur = prompt("Donner une couleur")
    if (couleur == "rouge"){
        document.body.style.backgroundcolor = "red"
    }
    else if(couleur == "bleu"){
        document.body.style.backgroundcolor = "blue"
    }
    else if(couleur == "vert"){
        document.body.style.backgroundcolor = "green"
    }
    else{
        document.write("Couleur non comprise")
    }
}