// Liste des exercices
const exercices = [
    {
        titre: "Somme de deux nombres",
        description: "Écrivez une fonction qui retourne la somme de deux nombres.",
        code: `function somme(a, b) {
    return a + b;
}`
    },
    {
        titre: "Afficher les nombres de 1 à 10",
        description: "Affichez les nombres de 1 à 10 dans une boîte de dialogue.",
        code: `for (let i = 1; i <= 10; i++) {
    alert(i);
}`
    },
    // Ajoutez d'autres exercices ici
];

// Génération des exercices dans la page
const section = document.getElementById("exercices");

exercices.forEach((exercice, index) => {
    const div = document.createElement("div");
    div.innerHTML = `
        <h2>Exercice ${index + 1}: ${exercice.titre}</h2>
        <p>${exercice.description}</p>
        <button onclick="testerExercice(${index})">Tester</button>
        <button onclick="afficherCode(${index})">Afficher le code</button>
        <pre id="code-${index}" style="display:none; background:#f4f4f4; padding:10px; border-radius:5px;"></pre>
    `;
    section.appendChild(div);
});

// Fonctions pour gérer les boutons
function testerExercice(index) {
    try {
        eval(exercices[index].code);
    } catch (e) {
        alert("Erreur dans le code : " + e.message);
    }
}

function afficherCode(index) {
    const pre = document.getElementById(`code-${index}`);
    pre.textContent = exercices[index].code;
    pre.style.display = pre.style.display === "none" ? "block" : "none";
}
