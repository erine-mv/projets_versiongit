// Fonction pour afficher ou cacher la solution
// Cette fonction bascule l'affichage d'un élément HTML dont l'ID est passé en paramètre.
// Si l'élément est actuellement caché (style.display === 'none'), il sera affiché ('block'), et vice versa.
function toggleSolution(id) {
    var solution = document.getElementById(id);
    solution.style.display = solution.style.display === 'none' ? 'block' : 'none';
}

// Fonction pour afficher ou cacher la démonstration
// Cette fonction fonctionne de la même manière que toggleSolution, mais pour la démonstration.
// Elle permet de masquer ou d'afficher l'élément HTML spécifié par son ID.
function toggleDemo(id) {
    var demo = document.getElementById(id);
    demo.style.display = demo.style.display === 'none' ? 'block' : 'none';
}

// Exercice 1: Addition de deux nombres
// Cette fonction récupère les valeurs des deux champs de saisie (num1_1 et num2_1), les convertit en nombres,
// les additionne, et affiche le résultat dans l'élément HTML avec l'ID "result_1".
function calculateSum() {
    var num1 = parseFloat(document.getElementById("num1_1").value);
    var num2 = parseFloat(document.getElementById("num2_1").value);
    var result = num1 + num2;
    document.getElementById("result_1").innerText = "Le résultat est : " + result;
}

// Exercice 2: Multiplication de deux nombres
// Cette fonction récupère les valeurs des champs num1_2 et num2_2, les convertit en nombres,
// effectue la multiplication, et affiche le résultat dans l'élément avec l'ID "result_2".
function calculateProduct() {
    var num1 = parseFloat(document.getElementById("num1_2").value);
    var num2 = parseFloat(document.getElementById("num2_2").value);
    var result = num1 * num2;
    document.getElementById("result_2").innerText = "Le résultat est : " + result;
}

// Exercice 3: Soustraction de deux nombres
// Cette fonction effectue une soustraction entre les deux nombres entrés par l'utilisateur,
// et affiche le résultat dans l'élément HTML avec l'ID "result_3".
function calculateDifference() {
    var num1 = parseFloat(document.getElementById("num1_3").value);
    var num2 = parseFloat(document.getElementById("num2_3").value);
    var result = num1 - num2;
    document.getElementById("result_3").innerText = "Le résultat est : " + result;
}

// Exercice 4: Division de deux nombres
// Cette fonction effectue la division entre les deux nombres entrés par l'utilisateur.
// Si le deuxième nombre est 0, un message d'erreur sera affiché pour éviter la division par zéro.
function calculateQuotient() {
    var num1 = parseFloat(document.getElementById("num1_4").value);
    var num2 = parseFloat(document.getElementById("num2_4").value);
    if (num2 === 0) {
        document.getElementById("result_4").innerText = "Erreur : Division par zéro!";
    } else {
        var result = num1 / num2;
        document.getElementById("result_4").innerText = "Le résultat est : " + result;
    }
}

// Exercice 5: Trouver le maximum
// Cette fonction récupère les deux nombres entrés par l'utilisateur et renvoie le plus grand des deux,
// puis affiche le résultat dans l'élément avec l'ID "result_5".
function calculateMax() {
    var num1 = parseFloat(document.getElementById("num1_5").value);
    var num2 = parseFloat(document.getElementById("num2_5").value);
    var result = Math.max(num1, num2);
    document.getElementById("result_5").innerText = "Le maximum est : " + result;
}

// Exercice 6: Vérifier un nombre pair
// Cette fonction vérifie si le nombre entré par l'utilisateur est pair ou impair.
// Si le nombre est divisible par 2, un message indiquera que le nombre est pair, sinon il sera impair.
function checkEven() {
    var num = parseInt(document.getElementById("num1_6").value);
    var result = num % 2 === 0 ? "Le nombre est pair" : "Le nombre est impair";
    document.getElementById("result_6").innerText = result;
}

// Générer une démonstration de pyramide
// Cette fonction génère une pyramide composée d'étoiles (*) en fonction de la hauteur donnée par l'utilisateur.
// Si la hauteur est invalide (moins que 1 ou non numérique), un message d'erreur est affiché.
function generatePyramidDemo() {
    const height = parseInt(document.getElementById('height7').value);
    if (isNaN(height) || height < 1) {
        document.getElementById('result_7').innerText = "Veuillez entrer une hauteur valide.";
        return;
    }
    const pyramid = generatePyramid(height);
    document.getElementById('result_7').innerText = pyramid;
}

// Générer la chaîne de caractères représentant une pyramide
// Cette fonction génère la pyramide sous forme de chaîne en ajoutant des espaces et des étoiles pour chaque ligne.
function generatePyramid(height) {
    let pyramidStr = '';
    for (let i = 1; i <= height; i++) {
        pyramidStr += ' '.repeat(height - i) + '*'.repeat(2 * i - 1) + '\n';
    }
    return pyramidStr;
}

// Exercice 8: Calculer la puissance
// Cette fonction calcule la puissance d'un nombre en utilisant la base et l'exposant fournis par l'utilisateur.
function calculatePower() {
    var base = parseFloat(document.getElementById("base8").value);
    var exponent = parseFloat(document.getElementById("exponent8").value);
    var result = base ** exponent;
    document.getElementById("result_8").innerText = "Le résultat est : " + result;
}

// Exercice 9: Vérifier une chaîne palindrome
// Cette fonction vérifie si la chaîne saisie par l'utilisateur est un palindrome, c'est-à-dire si elle se lit de la même manière dans les deux sens.
function checkPalindrome() {
    var str = document.getElementById("text9").value;
    var reversed = str.split('').reverse().join('');
    var result = str === reversed ? "C'est un palindrome" : "Ce n'est pas un palindrome";
    document.getElementById("result_9").innerText = result;
}

// Exercice 10: Somme des nombres dans un tableau
// Cette fonction prend une liste de nombres séparés par des virgules, les convertit en un tableau d'entiers, puis calcule leur somme.
function calculateArraySum() {
    var arr = document.getElementById("array10").value.split(',').map(Number);
    var result = arr.reduce((acc, num) => acc + num, 0);
    document.getElementById("result_10").innerText = "La somme est : " + result;
}

// Exercice 11: Nombre aléatoire entre deux valeurs
// Cette fonction génère un nombre entier aléatoire compris entre deux valeurs fournies par l'utilisateur (min et max).
function generateRandom() {
    var min = parseInt(document.getElementById("min11").value);
    var max = parseInt(document.getElementById("max11").value);
    var result = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById("result_11").innerText = "Le nombre aléatoire est : " + result;
}

// Exercice 12: Trier un tableau
// Cette fonction trie un tableau de nombres fournis par l'utilisateur en ordre croissant.
function sortArray() {
    var arr = document.getElementById("array12").value.split(',').map(Number);
    arr.sort((a, b) => a - b);
    document.getElementById("result_12").innerText = "Le tableau trié est : " + arr.join(', ');
}

// Exercice 13: Trouver la valeur minimale
// Cette fonction récupère les valeurs d'un tableau fourni par l'utilisateur et affiche la valeur minimale.
function findMinimum() {
    var arr = document.getElementById("array13").value.split(',').map(Number);
    var result = Math.min(...arr);
    document.getElementById("result_13").innerText = "La valeur minimale est : " + result;
}

// Exercice 14: Compter les voyelles
// Cette fonction compte le nombre de voyelles (a, e, i, o, u) dans une chaîne de texte fournie par l'utilisateur.
function countVowel() {
    var str = document.getElementById("text14").value;
    var result = (str.match(/[aeiouAEIOU]/g) || []).length;
    document.getElementById("result_14").innerText = "Le nombre de voyelles est : " + result;
}

// Exercice 15: Calculer la factorielle
// Cette fonction calcule la factorielle d'un nombre donné par l'utilisateur en utilisant une fonction récursive.
function calculateFactorial() {
    var num = parseInt(document.getElementById("num15").value);
    function factorial(n) {
        if (n === 0 || n === 1) {
            return 1;
        }
        return n * factorial(n - 1);
    }
    var result = factorial(num);
    document.getElementById("result_15").innerText = "La factorielle de " + num + " est : " + result;
}