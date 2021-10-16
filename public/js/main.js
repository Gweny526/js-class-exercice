// Exo1
class Lieu{
    constructor (nom, personne){
        this.nom = nom
        this.personne = personne
    }
}

class Personne{
    Constructor (nom,prenom,argent){
        this.nom = nom
        this.prenom = prenom
        this.argent = argent
    }
    seDeplacer(start, end, transport){
        start.personne.splice(start.personne.indexOf(this),1);
        console.log(`${this.prenim} sort de ${start.nom}`);
        if(transport.embarquer(this) == true){
            end.personne.push(this);
            console.log(`${this.prenom} est arrivé-e à ${end.nom}.`);
        } else{
            start.personne.push(this);
            console.log(`${this.prenom} n'a plus assez d'argent, et reste à ${start.nom}`);
        };
    }
}

class Bus {
    constructor(caisse){
        this.place = [];
        this.caisse = caisse;
        this.tarif = 3
    }
    embarquer(personne){
        if(personne.argent >= this.tarif){
            this.place.push(personne);
            console.log(`${personne.prenom} embarque dans le bus.`);
            personne.argent -= this.tarif;
            this.caisse += this.tatif;
            this.place.splice(this.plase.indexOf(personne), 1);
            console.log(`${personne.prenom} sort du bus`);
            return true
        }else{
            return false
        }
    }
}

let max = new Personne("Dos Santos", "Gweny", 50);
let maison = new Lieu("maison", [max]);
let molenGeek = new Lieu ("MolenGeek", []);
let snack = new Lieu ("snack", [])
let bus = new Bus(0);

max.seDeplacer(maison, molenGeek, bus);
console.log("_______");
max.seDeplacer(molenGeek, snack, bus);
console.log("_______");
max.seDeplacer(snack, maison, bus);
console.log("_______");

// exo bonus
class Personne{
    constructor(nom, panier){
        this.nom = nom;
        this.panier = panier;
    };
    derober(perso2){
        for(let i = 0 ; i < 2; i++){
            let product = prompt(`Que voulez vous dérober? ${perso2.panier}`).toLowerCase()
            this.panier.push(product)
            console.log(product);
            perso2.panier.splice(perso2.panier.indexOf(product), 1)
        }
    }
}
let François = new Personne ("François", ["huile", "tomate", "pain"]);
let Sergio = new Personne ("Sergio", []);

Sergio.derober(François);
console.log(François.panier);
console.log(Sergio.panier);