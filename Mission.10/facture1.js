// Fonction pour ajouter une ligne dans le tableau
function ajouterLigne() {
    const tableBody = document.getElementById("table-body");
    const nouvelleLigne = document.createElement("tr");
  
    nouvelleLigne.innerHTML = `
      <td><input type="text" class="desc" value=""></td>
      <td><input type="number" class="qte" value="0" min="0"></td>
      <td><input type="number" class="prix" value="0" min="0"></td>
      <td class="total-ligne">0</td>
    `;
  
    tableBody.appendChild(nouvelleLigne);
  }
  
  // Fonction pour calculer les totaux
  function calculerTotaux() {
    let sousTotal = 0;
    const lignes = document.querySelectorAll("#table-body tr");
  
    lignes.forEach((ligne) => {
      const quantite = ligne.querySelector(".qte").valueAsNumber || 0;
      const prixUnitaire = ligne.querySelector(".prix").valueAsNumber || 0;
      const totalLigne = quantite * prixUnitaire;
  
      ligne.querySelector(".total-ligne").textContent = totalLigne.toFixed(2);
      sousTotal += totalLigne;
    });
  
    document.getElementById("sous-total").textContent = sousTotal.toFixed(2);
  
    const remise = document.getElementById("remise").valueAsNumber || 0;
    const sousTotalRemise = sousTotal - remise;
  
    document.getElementById("sous-total-remise").textContent = sousTotalRemise.toFixed(2);
  
    const tauxImposition = document.getElementById("taux").valueAsNumber || 0;
    const taxeTotale = (sousTotalRemise * tauxImposition) / 100;
  
    document.getElementById("taxe-totale").textContent = taxeTotale.toFixed(2);
  
    const expedition = document.getElementById("expedition").valueAsNumber || 0;
    const solde = sousTotalRemise + taxeTotale + expedition;
  
    document.getElementById("solde").textContent = solde.toFixed(2);
  }
  
  // Fonction pour remplir automatiquement des données fictives
  function remplirAuto() {
    const lignes = [
      { desc: "Produit A", qte: 2, prix: 50 },
      { desc: "Produit B", qte: 5, prix: 30 },
      { desc: "Service C", qte: 1, prix: 100 },
    ];
  
    const tableBody = document.getElementById("table-body");
    tableBody.innerHTML = ""; // Réinitialiser le tableau
  
    lignes.forEach((ligne) => {
      const nouvelleLigne = document.createElement("tr");
      nouvelleLigne.innerHTML = `
        <td><input type="text" class="desc" value="${ligne.desc}"></td>
        <td><input type="number" class="qte" value="${ligne.qte}" min="0"></td>
        <td><input type="number" class="prix" value="${ligne.prix}" min="0"></td>
        <td class="total-ligne">${(ligne.qte * ligne.prix).toFixed(2)}</td>
      `;
      tableBody.appendChild(nouvelleLigne);
    });
  
    calculerTotaux();
  }
  
  // Fonction pour réinitialiser tous les champs
  function annuler() {
    document.getElementById("table-body").innerHTML = "";
    document.getElementById("sous-total").textContent = "0.00";
    document.getElementById("remise").value = "0";
    document.getElementById("sous-total-remise").textContent = "0.00";
    document.getElementById("taux").value = "0";
    document.getElementById("taxe-totale").textContent = "0.00";
    document.getElementById("expedition").value = "0";
    document.getElementById("solde").textContent = "0.00";
  }
  
  // Écouteurs d'événements pour les boutons
  document.getElementById("ajouter-ligne").addEventListener("click", ajouterLigne);
  document.getElementById("calculer").addEventListener("click", calculerTotaux);
  document.getElementById("remplir-auto").addEventListener("click", remplirAuto);
  document.getElementById("annuler").addEventListener("click", annuler);
  