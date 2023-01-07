var x = "Lorem ipsum",
    y = 2345,
    z = "2345"
	q = false,
	w;

x += '3' + 1;
var baaa = "b" + "a" + +"a" + "a";

// 1. Pronađite varijable u listi koje su iste po vrijednosti.
// y i q - nije isti tip podataka, ali su iste vrijednosti!

// 2. Koja je vrijednost varijable x na kraju programa? Koji je to tip podatka?
// Lorem ipsum31 - String

// 3. Koja je vrijednost varijable baaa? Objasnite.
// baNaNa - + +"a" shvaća kao +0+"a" čija je vrijednost onda NaN, a ostali su stringovi pa i taj NaN pretvara u string

// 4. Provjerite tip podatka varijable w.
// w nije definirana
