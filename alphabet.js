/* Dans cette fonction , je crée un compteur qui ce nomme caractere ainsi qu'une variable contenant un string que je parcours avec ma boucle for */
function Alpha (){ 
	var alphabet = "abcdefghijklmnopqrstuvwxyz";
	var caractere = "";
	/* Ma boucle for parcourt le string et rajoute un index à chaque itération en prenant en compte les index précédent ajoutés*/
	for (var i = 0; i < alphabet.length; i++) {
		caractere += alphabet[i];
		console.log(caractere);
	};
} 
Alpha();