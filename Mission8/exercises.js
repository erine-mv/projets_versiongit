// Définition des exercices avec leurs titres, descriptions, codes et fonctions interactives
export const exercises = [
    {
        title: "Somme de deux nombres",
        description: "Écrivez une fonction qui retourne la somme de deux nombres.",
        code: `function somme(a, b) {\n  return a + b;\n}\n\nconsole.log(somme(2, 3)); // Résultat attendu : 5`,
        interactive: true,
    } /
    handler, function () {
        // Fonction interactive pour calculer la somme de deux nombres
        const a = Number(prompt("Entrez le premier nombre :"));
        const b = Number(prompt("Entrez le second nombre :"));
        alert(`La somme de ${a} et ${b} est : ${a + b}`);
    }
];
