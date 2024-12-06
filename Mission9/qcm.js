// Fonction pour vérifier les réponses et calculer le score
document.getElementById("btn-correction").addEventListener("click", () => {
    // Réponses correctes pour chaque question
    const answers = {
        q1: "1914",
        q2: "assassinat",
        q3: "japon",
        q4: "versailles",
        q5: "liberer",
        q6: "pologne",
        q7: "axe",
        q8: "roosevelt",
        q9: "blitzkrieg",
        q10: "hiroshima"
    };

    let score = 0; // Initialisation du score

    // Boucle pour vérifier chaque question
    for (let key in answers) {
        const selected = document.querySelector(`input[name="${key}"]:checked`); // Réponse sélectionnée
        if (selected && selected.value === answers[key]) {
            score++; // Incrémenter le score si la réponse est correcte
        }
    }

    // Affichage du score final
    alert(`Votre score : ${score}/10`);
});

// Fonction pour afficher le corrigé dans une nouvelle fenêtre
document.getElementById("btn-corrige").addEventListener("click", () => {
    // Ouvrir une nouvelle fenêtre
    const newWindow = window.open("", "Corrigé", "width=600,height=400");

    // Ajouter le contenu du corrigé
    newWindow.document.write("<h1>Corrigé du Quizz</h1>");
    newWindow.document.write("<ul>");
    newWindow.document.write("<li>1. Quand a commencé la Première Guerre mondiale ? Réponse : 1914</li>");
    newWindow.document.write("<li>2. Quel événement a déclenché la Première Guerre mondiale ? Réponse : Assassinat de François-Ferdinand</li>");
    newWindow.document.write("<li>3. Quel pays n’était PAS dans les Alliés ? Réponse : Japon</li>");
    newWindow.document.write("<li>4. Quel traité a marqué la fin de la Première Guerre mondiale ? Réponse : Traité de Versailles</li>");
    newWindow.document.write("<li>5. Quel était l’objectif du D-Day ? Réponse : Libérer la France occupée</li>");
    newWindow.document.write("<li>6. Quel pays a été envahi en 1939 ? Réponse : Pologne</li>");
    newWindow.document.write("<li>7. Quel était le nom de l’alliance entre l’Allemagne, l’Italie et le Japon ? Réponse : L’Axe</li>");
    newWindow.document.write("<li>8. Qui était le président des USA ? Réponse : Franklin D. Roosevelt</li>");
    newWindow.document.write("<li>9. Stratégie militaire allemande ? Réponse : Blitzkrieg</li>");
    newWindow.document.write("<li>10. Où ont été larguées les bombes atomiques ? Réponse : Hiroshima et Nagasaki</li>");
    newWindow.document.write("</ul>");
    newWindow.document.write('<button onclick="window.close()">Fermer</button>'); // Bouton pour fermer la fenêtre
});

// Fonction pour réinitialiser le formulaire
document.getElementById("btn-effacer").addEventListener("click", () => {
    alert("Formulaire réinitialisé !");
});

