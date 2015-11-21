
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/pehtoori', connectionStatus);

/*var db = mongoose.connect('mongodb://localhost:27017/pehtoori', connectionStatus);
var db2 = mongoose.connect('mongodb://localhost:27017/pehtoori_2', connectionStatus);

var dbStatus = mongoose.connection;
dbStatus.on('error', console.error.bind(console, 'connection error:'));
dbStatus.once('open', function (callback) {
  console.log("We are conneted again:");
});
console.log(dbStatus.host); // localhost
console.log(dbStatus.port); // 27017
console.log(dbStatus.name); // myDatabase*/

/*
    Connetion callback for fail and ok cases
*/
function connectionStatus(err, ok) {
    
    if (err) {
        
        console.log("We are NOT conneted:");
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

var User = mongoose.model('User',{
    username:{type:String,unique:true},
    password:String,
    users:[{type:mongoose.Schema.Types.ObjectId,ref:'Person'}]
});
//Using exports object you expose the data to other modules
exports.Users = User;

var Horse = mongoose.model('Horse', {
    Nimi: String,
    Kutsumanimi: String,
    Syntymäaika: String,
    Sukuposti: String
},'horse');

//Using exports object you expose the data to other modules
exports.Horse = Horse;

var Todo = mongoose.model('Todo', {
    Ilmoittaja: String,
    Ilmoitus: String
},'todo');

//Using exports object you expose the data to other modules
exports.Todo = Todo;

var hourcalendi = mongoose.model('hourcalendar', {
    Päivä: String,
    Ilmoittaja: String,
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
    Kellonaika: String,
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

var Feed = mongoose.model('Feed', {
    Hevonen: String,
    Aamuruoka: String,
    Päiväruoka: String,
    Iltaruoka: String,
    Huomio: String,
},'feed');

//Using exports object you expose the data to other modules
exports.Feed = Feed;

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

    
//  mongoose.connect('mongodb://localhost:27017/pehtoori', function() {
//  console.log('Connected to pehtoori')
//  mongoose.disconnect(connectToTest2)
//  dbURI = 'mongodb://localhost:27017/pehtoori';
//})
//
//function connectToTest2() {
//  mongoose.connect('mongodb://localhost:27017/pehtoori_2', function() {
//    console.log('Connected to pehtoori 2');
//    dbURI = 'mongodb://localhost:27017/pehtoori_2';
//  })
//}

};


 


