/* Dans cette fonction , je crée un compteur mais cette fois ci je n'indique pas de string prédéfinis car dans cette boucle il n'y auras qu'un seul type de caractere*/
	var compteur = "";
	/* Ma boucle for ajoute un "#" à chaque itération en prenant en compte les "#" précédent ajoutés 10 fois de suite*/
	for (var i = 0; i < 10; i++) {
		compteur += "#";
		console.log(compteur);
	};
}
Diez();