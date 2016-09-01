/* Dans cette fonction , je crée un compteur qui ce nomme caractere ainsi qu'une variable contenant un string que je parcours avec ma boucle for */
function Chiffre (){
	var numero = "12345678910";
	var caractere = "";
	/* Ma boucle for parcourt le string et rajoute un index à chaque itération en prenant en compte les index précédent ajoutés*/
	for (var i = 0; i < numero.length; i++) {
		caractere += numero[i];
		console.log(caractere);
	};
}
Chiffre(); 