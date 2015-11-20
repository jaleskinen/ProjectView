var db = require('./database');

/*
This function gets all ducuments from person colletion
*/
exports.getAllPersons = function (req, res) {
    
    db.Person.find(function (err, data) {
        
        if (err) {
            
            console.log(err.message);
            res.send("Error in database!!");
        } else {
            
            res.send(data);
        }
    });
};


/*
This function saves new person information to person colletion
*/
exports.saveNewPerson = function (req, res) {
    
    var personTemp = new db.Person(req.body);
    
    //Save it to database
    personTemp.save(function (err, ok) {
        
        if (err) {
            
            console.log(err.message);
            res.send("Error in database!!");
        } else {
            
           
        res.send("<head><meta http-equiv='Refresh' content='0; url=./person.html'></head>");
        
            
        //Redirect to root context
 /*       res.redirect('/');*/
        }
    });
};

/*
This function deletes one person from person colletion
*/
exports.deletePerson = function (req, res) {
    
    //Here req.params.id return string "id=35635463456345f"
    //Split function splits the string from "0" and creates an array
    //where [0] contains "id" and [1] contains "35635463456345f"
    var id = req.params.id.split("=")[1];
    
    db.Person.remove({_id: id}, function (err) {
        if (err) {
            
            res.send(err.message);
        } else {
            
            res.send("Delete done");
        }
       
    });
    
};

/*
This method updates person information to person colletion
*/
exports.updatePerson = function (req, res) {
    
    var updateData = {
        Nimi: req.body.Nimi,
        Osoite: req.body.Osoite,
        Kategoria: req.body.Kategoria,
        Puhelin: req.body.Puhelin,
        Sähköposti: req.body.Sähköposti,
        Internet: req.body.Internet
    };
    
    db.Person.update({_id: req.body.id}, updateData, function (err) {
        if (err) {
            
            res.send(err.message);
        } else {
            
            res.send("Updated");
            //res.send({data:"ok"});
        }
        
    });
};

    /*
This function gets all ducuments from horse colletion
*/
exports.getAllHorses = function (req, res) {
    
    db.Horse.find(function (err, data) {
        
        if (err) {
            
            console.log(err.message);
            res.send("Error in database!!");
        } else {
            
            res.send(data);
        }
    });
};

    /*
This function saves new Horse information to Horse colletion
*/
exports.saveNewHorse = function (req, res) {
    
    var horseTemp = new db.Horse(req.body);
    
    //Save it to database
    horseTemp.save(function (err, ok) {
        
        if (err) {
            
            console.log(err.message);
            res.send("Error in database!!");
        } else {
            
            res.send("<head><meta http-equiv='Refresh' content='0; url=./horse.html'></head>");
        }
    });
};

/*
This function deletes one horse from pershorseon colletion
*/
exports.deleteHorse = function (req, res) {
    
    //Here req.params.id return string "id=35635463456345f"
    //Split function splits the string from "0" and creates an array
    //where [0] contains "id" and [1] contains "35635463456345f"
    var id = req.params.id.split("=")[1];
    
    db.Horse.remove({_id: id}, function (err) {
        if (err) {
            
            res.send(err.message);
        } else {
            
            res.send("Delete done");
        }
       
    });
    
};

/*
This method updates horse information to horse colletion
*/
exports.updateHorse = function (req, res) {
    
    var updateData = {
        Nimi: req.body.Nimi,
        Kutsumanimi: req.body.Kutsumanimi,
        Syntymäaika: req.body.Syntymäaika,
        Sukuposti: req.body.Sukuposti
    };
    
    db.Horse.update({_id: req.body.id}, updateData, function (err) {
        if (err) {
            
            res.send(err.message);
        } else {
            
            res.send("Updated");
            //res.send({data:"ok"});
        }
        
    });
};

   /*
This function gets all ducuments from todo colletion
*/
exports.getAllTodos = function (req, res) {
    
    db.Todo.find(function (err, data) {
        
        if (err) {
            
            console.log(err.message);
            res.send("Error in database!!");
        } else {
            
            res.send(data);
        }
    });
};

    /*
This function saves new Todo information to Todo colletion
*/
exports.saveNewTodo = function (req, res) {
    
    var todoTemp = new db.Todo(req.body);
    
    //Save it to database
    todoTemp.save(function (err, ok) {
        if (err) {
            
            console.log(err.message);
            res.send("Error in database!!");
        } else {
            
            res.send("<head><meta http-equiv='Refresh' content='0; url=./todo.html'></head>");
        }

    });
};

/*
This function deletes one todo item from todo colletion
*/
exports.deleteTodo = function (req, res) {
    
    //Here req.params.id return string "id=35635463456345f"
    //Split function splits the string from "0" and creates an array
    //where [0] contains "id" and [1] contains "35635463456345f"
    var id = req.params.id.split("=")[1];
    
    db.Todo.remove({_id: id}, function (err) {
        if (err) {
            
            res.send(err.message);
        } else {
            
            res.send("Delete done");
        }
       
    });
    
};

/*
This method updates todo information to todo colletion
*/
exports.updateTodo = function (req, res) {
    
    var updateData = {
        Ilmoitus: req.body.Ilmoitus,
        Kuvaus: req.body.Kuvaus,
        Toimenpide: req.body.Toimenpide
    };
    
    db.Todo.update({_id: req.body.id}, updateData, function (err) {
        if (err) {
            
            res.send(err.message);
        } else {
            
            res.send("Updated");
            //res.send({data:"ok"});
        }
        
    });
};

/*
This function gets all ducuments from calendar colletion
*/
exports.getAllTasks = function (req, res) {
    
    db.hourcalend.find(function (err, data) {
        
        if (err) {
            
            console.log(err.message);
            res.send("Error in database!!");
        } else {
            
            res.send(data);
        }
    });
};


/*
This function saves new task information to calendar colletion
*/
exports.saveNewTask = function (req, res) {
    
    var hourcalendTemp = new db.hourcalend(req.body);
    
    //Save it to database
    hourcalendTemp.save(function (err, ok) {
        
        if (err) {
            
            console.log(err.message);
            res.send("Error in database!!");
        } else {
            
            res.send("<head><meta http-equiv='Refresh' content='0; url=./hourcalendar.html'></head>");
        }
    });
};

/*
This function deletes one task from calendar colletion
*/
exports.deleteTask = function (req, res) {
    
    //Here req.params.id return string "id=35635463456345f"
    //Split function splits the string from "0" and creates an array
    //where [0] contains "id" and [1] contains "35635463456345f"
    var id = req.params.id.split("=")[1];
    
    db.hourcalend.remove({_id: id}, function (err) {
        if (err) {
            
            res.send(err.message);
        } else {
            
            res.send("Delete done");
        }
       
    });
    
};

/*
This method updates task information to calendar colletion
*/
exports.updateTask = function (req, res) {
    
    var updateData = {
        Päivä: req.body.Päivä,
        Henkilö: req.body.Henkilö,
        Tehtävä: req.body.Tehtävä,
        Tunnit: req.body.Tunnit
    };
    
    db.hourcalend.update({_id: req.body.id}, updateData, function (err) {
        if (err) {
            
            res.send(err.message);
        } else {
            
            res.send("Updated");
            //res.send({data:"ok"});
        }
        
    });
};

/*
This function gets all ducuments from calendar colletion
*/
exports.getAllTestit = function (req, res) {
    
    db.Testi.find(function (err, data) {
        
        if (err) {
            
            console.log(err.message);
            res.send("Error in database!!");
        } else {
            
            res.send(data);
        }
    });
};


/*
This function saves new task information to calendar colletion
*/
exports.saveNewTesti = function (req, res) {
    
    var testiTemp = new db.Testi(req.body);
    
    //Save it to database
    testiTemp.save(function (err, ok) {
        
        if (err) {
            
            console.log(err.message);
            res.send("Error in database!!");
        } else {
            
            res.send("<head><meta http-equiv='Refresh' content='0; url=./testi.html'></head>");
        }
    });
};

/*
This function deletes one task from calendar colletion
*/
exports.deleteTesti = function (req, res) {
    
    //Here req.params.id return string "id=35635463456345f"
    //Split function splits the string from "0" and creates an array
    //where [0] contains "id" and [1] contains "35635463456345f"
    var id = req.params.id.split("=")[1];
    
    db.Testi.remove({_id: id}, function (err) {
        if (err) {
            
            res.send(err.message);
        } else {
            
            res.send("Delete done");
        }
       
    });
    
};

/*
This method updates task information to calendar colletion
*/
exports.updateTesti = function (req, res) {
    
    var updateData = {
        Testi_1: req.body.Testi_1,
        Testaaja: req.body.Testaaja,
        Tulos: req.body.Tulos
    };
    
    db.Testi.update({_id: req.body.id}, updateData, function (err) {
        if (err) {
            
            res.send(err.message);
        } else {
            
            res.send("Updated");
            //res.send({data:"ok"});
        }
        
    });
};

/*
This function gets all ducuments from hours colletion
*/
exports.getAllHours = function (req, res) {
    
    db.Hour.find(function (err, data) {
        
        if (err) {
            
            console.log(err.message);
            res.send("Error in database!!");
        } else {
            
            res.send(data);
        }
    });
};


/*
This function saves new task information to hour colletion
*/
exports.saveNewHour = function (req, res) {
    
    var hourTemp = new db.Hour(req.body);
    
    //Save it to database
    hourTemp.save(function (err, ok) {
        
        if (err) {
            
            console.log(err.message);
            res.send("Error in database!!");
        } else {
            
            res.send("<head><meta http-equiv='Refresh' content='0; url=./stablecalendar.html'></head>");
        }
    });
};

/*
This function deletes one task from hour colletion
*/
exports.deleteHour = function (req, res) {
    
    //Here req.params.id return string "id=35635463456345f"
    //Split function splits the string from "0" and creates an array
    //where [0] contains "id" and [1] contains "35635463456345f"
    var id = req.params.id.split("=")[1];
    
    db.Hour.remove({_id: id}, function (err) {
        if (err) {
            
            res.send(err.message);
        } else {
            
            res.send("Delete done");
        }
       
    });
    
};

/*
This method updates task information to hour colletion
*/
exports.updateHour = function (req, res) {
    
    var updateData = {
        Kellonaika: req.body.Kellonaika,
        Maanantai: req.body.Maanantai,
        Tiistai: req.body.Tiistai,
        Keskiviikko: req.body.Keskiviikko,
        Torstai: req.body.Torstai,
        Perjantai: req.body.Perjantai,
        Lauantai: req.body.Lauantai,
        Sunnuntai: req.body.Sunnuntai
    };
    
    db.Hour.update({_id: req.body.id}, updateData, function (err) {
        if (err) {
            
            res.send(err.message);
        } else {
            
            res.send("Updated");
            //res.send({data:"ok"});
        }
        
    });
};

/*
This function gets all ducuments from hours colletion
*/
exports.getAllPaddocs = function (req, res) {
    
    db.Paddoc.find(function (err, data) {
        
        if (err) {
            
            console.log(err.message);
            res.send("Error in database!!");
        } else {
            
            res.send(data);
        }
    });
};


/*
This function saves new task information to hour colletion
*/
exports.saveNewPaddoc = function (req, res) {
    
    var paddocTemp = new db.Paddoc(req.body);
    
    //Save it to database
    paddocTemp.save(function (err, ok) {
        
        if (err) {
            
            console.log(err.message);
            res.send("Error in database!!");
        } else {
            
            res.send("<head><meta http-equiv='Refresh' content='0; url=./paddoc.html'></head>");
        }
    });
};

/*
This function deletes one task from hour colletion
*/
exports.deletePaddoc = function (req, res) {
    
    //Here req.params.id return string "id=35635463456345f"
    //Split function splits the string from "0" and creates an array
    //where [0] contains "id" and [1] contains "35635463456345f"
    var id = req.params.id.split("=")[1];
    
    db.Paddoc.remove({_id: id}, function (err) {
        if (err) {
            
            res.send(err.message);
        } else {
            
            res.send("Delete done");
        }
       
    });
    
};

/*
This method updates task information to hour colletion
*/
exports.updatePaddoc = function (req, res) {
    
    var updateData = {
        Hevonen: req.body.Hevonen,
        Aamutarha: req.body.Aamutarha,
        Päivätarha: req.body.Päivätarha,
        Iltatarha: req.body.Iltatarha,
        Huomio: req.body.Huomio
    };
    
    db.Paddoc.update({_id: req.body.id}, updateData, function (err) {
        if (err) {
            
            res.send(err.message);
        } else {
            
            res.send("Updated");
            //res.send({data:"ok"});
        }
        
    });
};

/*
This function gets all documents from Health colletion
*/
exports.getAllHealths = function (req, res) {
    
    db.Health.find(function (err, data) {
        
        if (err) {
            
            console.log(err.message);
            res.send("Error in database!!");
        } else {
            
            res.send(data);
        }
    });
};


/*
This function saves new Health information to Health colletion
*/
exports.saveNewHealth = function (req, res) {
    
    var healthTemp = new db.Health(req.body);
    
    //Save it to database
    healthTemp.save(function (err, ok) {
        
        if (err) {
            
            console.log(err.message);
            res.send("Error in database!!");
        } else {
            
            res.send("<head><meta http-equiv='Refresh' content='0; url=./health.html'></head>");
        }
    });
};

/*
This function deletes one field from Health colletion
*/
exports.deleteHealth = function (req, res) {
    
    //Here req.params.id return string "id=35635463456345f"
    //Split function splits the string from "0" and creates an array
    //where [0] contains "id" and [1] contains "35635463456345f"
    var id = req.params.id.split("=")[1];
    
    db.Health.remove({_id: id}, function (err) {
        if (err) {
            
            res.send(err.message);
        } else {
            
            res.send("Delete done");
        }
       
    });
    
};

/*
This method updates Health information to Health colletion
*/
exports.updateHealth = function (req, res) {
    
    var updateData = {
        Hevonen: req.body.Hevonen,
        Rokotukset: req.body.Rokotukset,
        Madotukset: req.body.Madotukset,
        Hieronnat: req.body.Hieronnat,
        Yleistä: req.body.Yleistä
    };
    
    db.Health.update({_id: req.body.id}, updateData, function (err) {
        if (err) {
            
            res.send(err.message);
        } else {
            
            res.send("Updated");
            //res.send({data:"ok"});
        }
        
    });
};

/*
This function gets all documents from Health colletion
*/
exports.getAllHorsehours = function (req, res) {
    
    db.Horsehour.find(function (err, data) {
        
        if (err) {
            
            console.log(err.message);
            res.send("Error in database!!");
        } else {
            
            res.send(data);
        }
    });
};


/*
This function saves new Health information to Health colletion
*/
exports.saveNewHorsehour = function (req, res) {
    
    var horsehourTemp = new db.Horsehour(req.body);
    
    //Save it to database
    horsehourTemp.save(function (err, ok) {
        
        if (err) {
            
            console.log(err.message);
            res.send("Error in database!!");
        } else {
            
            res.send("<head><meta http-equiv='Refresh' content='0; url=./horsecalendar.html'></head>");
        }
    });
};

/*
This function deletes one field from Health colletion
*/
exports.deleteHorsehour = function (req, res) {
    
    //Here req.params.id return string "id=35635463456345f"
    //Split function splits the string from "0" and creates an array
    //where [0] contains "id" and [1] contains "35635463456345f"
    var id = req.params.id.split("=")[1];
    
    db.Horsehour.remove({_id: id}, function (err) {
        if (err) {
            
            res.send(err.message);
        } else {
            
            res.send("Delete done");
        }
       
    });
    
};

/*
This method updates Health information to Health colletion
*/
exports.updateHorsehour = function (req, res) {
    
    var updateData = {
        Aika: req.body.Aika,
        Hevonen: req.body.Hevonen,
        Laji: req.body.Laji,
        Tunnit: req.body.Tunnit
    };
    
    db.Horsehour.update({_id: req.body.id}, updateData, function (err) {
        if (err) {
            
            res.send(err.message);
        } else {
            
            res.send("Updated");
            //res.send({data:"ok"});
        }
        
    });
};


/*
This function gets all documents from Feed colletion
*/
exports.getAllFeeds = function (req, res) {
    
    db.Feed.find(function (err, data) {
        
        if (err) {
            
            console.log(err.message);
            res.send("Error in database!!");
        } else {
            
            res.send(data);
        }
    });
};


/*
This function saves new Feed information to Feed colletion
*/
exports.saveNewFeed = function (req, res) {
    
    var feedTemp = new db.Feed(req.body);
    
    //Save it to database
    feedTemp.save(function (err, ok) {
        
        if (err) {
            
            console.log(err.message);
            res.send("Error in database!!");
        } else {
            
            res.send("<head><meta http-equiv='Refresh' content='0; url=./feed.html'></head>");
        }
    });
};

/*
This function deletes one field from Feed colletion
*/
exports.deleteFeed = function (req, res) {
    
    //Here req.params.id return string "id=35635463456345f"
    //Split function splits the string from "0" and creates an array
    //where [0] contains "id" and [1] contains "35635463456345f"
    var id = req.params.id.split("=")[1];
    
    db.Feed.remove({_id: id}, function (err) {
        if (err) {
            
            res.send(err.message);
        } else {
            
            res.send("Delete done");
        }
       
    });
    
};

/*
This method updates Health information to Feed colletion
*/
exports.updateFeed = function (req, res) {
    
    var updateData = {
        Hevonen: req.body.Hevonen,
        Aamuruoka: req.body.Aamuruoka,
        Päiväruoka: req.body.Päiväruoka,
        Iltaruoka: req.body.Iltaruoka,
        Huomio: req.body.Huomio
    };
    
    db.Feed.update({_id: req.body.id}, updateData, function (err) {
        if (err) {
            
            res.send(err.message);
        } else {
            
            res.send("Updated");
            //res.send({data:"ok"});
        }
        
    });
};

exports.registerUser = function(req,res){
    
    var user = new db.Users(req.body);
    user.save(function(err){
        
        if(err){
            
            res.send({status:err.message});
        }
        else{
            res.send({status:"Ok"});
        }
    });
}

exports.loginUser = function(req,res){
    
    var searchObject = {
        username:req.body.username,
        password:req.body.password
    }
    
    db.Users.find(searchObject,function(err,data){
        
        if(err){
            
            res.send({status:err.message});
            
        }else{
            //=< 0 means wrong username or password
            if(data.length > 0){
                res.send({status:"Ok"});
            }
            else{
                res.send({status:"Wrong username or password"});
            }
            
        }
    });
}

exports.getUsersByUsername = function(req,res){
    
    var usern = req.params.username.split("=")[1];
    db.Users.find({username:usern}).
        populate('users').exec(function(err,data){
            
            console.log(err);
            console.log(data[0].users);
            res.send(data[0].users);
        
        });
}




