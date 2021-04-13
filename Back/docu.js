// Création du schéma
const kittySchema = new mongoose.Schema({
    name: String
});

// Ajout d'une méthode qui sera implémentée à la classe crée par le model()
kittySchema.methods.speak = function () {
    const greeting = this.name
      ? "Meow name is " + this.name
      : "I don't have a name";
    console.log(greeting);
}

// Création du model on l'appel Kitten et on le stock dans une variable Kitten 
const Kitten = mongoose.model('Kitten', kittySchema);

// Création d'une instance nommée Silence
const silence = new Kitten({name: 'Silence'});

// Sauvegarde de l'instance en DB puis console.log du résultat de la méthode speak() défini dans le schéma
silence.save( (err, fluffy) => {
    err ? console.log(err) : null;
    silence.speak();
});

// Querry des Kittens dans la BDD MongoDB
Kitten.find(function (err, kittens) {
    if (err) return console.error(err);
    kittens.length === 0 ? console.log('no kittens found') : console.log(kittens);;
});