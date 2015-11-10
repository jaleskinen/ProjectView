var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/oma', connectionStatus);

//mongoose.connect('mongodb://localhost:27017/oma', connectionStatus);
//mongoose.connect('mongodb://localhost:27017/testi', connectionStatus);


/*
    Connetion callback for fail and ok cases
*/
function connectionStatus(err, ok) {
    
    if (err) {
        
        console.log(err.message);
    } else {
        
        console.log("We are conneted:");
    }
}

var Person = mongoose.model('Person', {
    Nimi: String,
    Osoite: String,
    Kategoria: String,
    Puhelin: String,
    Sähköposti: String,
    Internet: String
},'person');

//Using exports object you expose the data to other modules
exports.Person = Person;

var Horse = mongoose.model('Horse', {
    Nimi: String,
    Kutsumanimi: String,
    Syntymäaika: String,
    Sukuposti: String
},'horse');

//Using exports object you expose the data to other modules
exports.Horse = Horse;

var Todo = mongoose.model('Todo', {
    Ilmoitus: String,
    Kuvaus: String,
    Toimenpide: String
},'todo');

//Using exports object you expose the data to other modules
exports.Todo = Todo;

var hourcalendi = mongoose.model('hourcalendar', {
    Aika: String,
    Henkilö: String,
    Tehtävä: String,
    Tunnit: Number
},'hourcalendar');

//Using exports object you expose the data to other modules
exports.hourcalend = hourcalendi;

var Testi = mongoose.model('Testi', {
    Testi_1: String,
    Testaaja: String,
    Tulos: String,
},'testi');

//Using exports object you expose the data to other modules
exports.Testi = Testi;

var Hour = mongoose.model('Hour', {
    Kello: String,
    Maanantai: String,
    Tiistai: String,
    Keskiviikko: String,
    Torstai: String,
    Perjantai: String,
    Lauantai: String,
    Sunnuntai: String,
},'hour');

//Using exports object you expose the data to other modules
exports.Hour = Hour;

var Paddoc = mongoose.model('Paddoc', {
    Hevonen: String,
    Aamutarha: String,
    Päivätarha: String,
    Iltatarha: String,
    Huomio: String,
},'paddoc');

//Using exports object you expose the data to other modules
exports.Paddoc = Paddoc;

var Health = mongoose.model('Health', {
    Hevonen: String,
    Rokotukset: String,
    Madotukset: String,
    Hieronnat: String,
    Yleistä: String,
},'health');

//Using exports object you expose the data to other modules
exports.Health = Health;

var Horsehour = mongoose.model('Horsehour', {
    Aika: String,
    Hevonen: String,
    Laji: String,
    Tunnit: String,
},'horsehour');

//Using exports object you expose the data to other modules
exports.Horsehour = Horsehour;


exports.myFunction = function() {
    
    console.log("This note is from exports.myFunction");
};

