function affichagetab(){
    document.write("<table border=2px width=30%");
    for(let i=0; i<=5; i++){
        document.write("<tr><td>*</td><td>*</td><td>*</td></tr>")
    }
    document.write("</table>")
}

function affichagetab2(){
    var X=prompt("Combien de ligne?");
    document.write("<table border=2px width=30%");
    for(let i=0; i<=X-1; i++){
        document.write("<tr><td>"+(i+1)+"</td><td>*</td><td>*</td></tr>")
    }
    document.write("</table>")
}

function seconnecter(){
    var login=prompt("Donnez votre nom d'utilisateur");
    var password=prompt("Entrez votre mot de passe");
    if (login=="admin" && password=="admin")
    {document.write("Bienvenue :"+login);}
    else {alert("Accès refusé")}
}

function cdc(){
    var chaine=prompt("Donnez un mot");
    document.write(chaine.toUpperCase()+"<br>");
    document.write(chaine.toLowerCase()+"<br>");
    document.write("La chaine contient" +chaine.length+"caracteres"+"<br>");
    document.write("La première lettre est "+chaine.substr(0,1)+"<br>");
}

function seconnecter2()
{window.location.href="Identification.html"}

function login(){
    var login=document.getElementById("t1").value;
    var mdp=document.getElementById("t2").value;
    if (login=="admin" && mdp=="admin")
    {window.location.href="yes.html"}
else {window.location.href="non.html"}
}