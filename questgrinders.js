


if (Meteor.isClient) {
  Avatar.setOptions({
    customImageProperty: function() {
      var user = this;
      // calculate the image URL here
      return user.avatar2;
    }
  });
  Meteor.startup(function () {

       setInterval(function () {


           Meteor.call("getServerTime", function (error, result) {
               Session.set("time", result);
           });
       }, 1000);
   });

   Template.dash.time = function () {
       return Session.get("time");
   };
   Template.chat.onRendered(function(){
     window.disqus = new Disqus('questgrinders');
     disqus.loadComments();
   });

  $('html').bind('keypress', function(e)
  {
     if(e.keyCode == 13)
     {
        return false;
     }
  });

  Router.onBeforeAction(function() {
      if (!Meteor.user() && this.ready())
          return this.redirect('/home');
      else { this.next() }
  }, {except: ['needlogin','leaderboard','contact','help','infopages','home', 'login']});




  Meteor.users.deny({
    update: function() {
      return true;
    }
  });

  Router.route('/new', function() {
    this.render('new');
  });


    Router.route('/spyshop', function() {
      this.render('spyshop');
    });

    Router.route('/home', function() {
      this.render('home');
    });
    Router.route('/questleader', function() {
      this.render('questleader');
    });
    Router.route('/search', function() {
      this.render('search');
    });


  Router.route('/quest', function() {
    this.render('quest');
  });



  Router.route('/myprofile', function() {
    this.render('myProfile');
  });

  Router.route('/city', function() {
    this.render('city');
  });

  Router.route('/chat', function() {
    this.render('chat');
  });


  Router.route('/lib', function() {
    this.render('lib');
  });

  Router.route('/no', function() {
    this.render('no');
  });


  Router.route('/construction', function() {
    this.render('construct');
  });

  Router.route('/infopages', function() {
    this.render('info');
  });

  Router.route('/needlogin', function() {
    this.render('needlogin');
  });


  Router.route('/minigames', function() {
    this.render('minigames');
  });

  Router.route('/map', function() {
    this.render('map');
  });

  Router.route('/leaderboard', function() {
    this.render('leaderboards');
  });

  Router.route('/', function() {
    this.render('start');
  });

  Router.route('/base', function() {
    this.render('leaderboard');
  });

  Router.route('/lore', function() {
    this.render('lore');
  });

  Router.route('/stats', function() {
    this.render('stats');
  });

  Router.route('/help', function() {
    this.render('help');
  });

  Router.route('/moon', function() {
    this.render('moon');
  });

  Router.route('/store', function() {
    this.render('store');
  });
  Router.route('/jack', function() {
    this.render('jack');
  });

  Router.route('/goodiesohhi', function() {
    this.render('cheat');
  });

  Router.route('/contact', function() {
    this.render('contact');
  });

  Router.route('/login', function() {
    this.render('login');
  });
  Router.route('/online', function() {
    this.render('online');
  });




  Accounts.ui.config({
    passwordSignupFields: 'USERNAME_AND_OPTIONAL_EMAIL'
  });

  Meteor.subscribe('userData');
  Meteor.subscribe('userStatus');



  Template.online.players = function() {
        return Meteor.users.find({ "status.online": true });
  };
  Template.online.playernumber = function() {
        return Meteor.users.find({ "status.online": true }).count();
  };


    Template.leaderboards.playernumber = function() {
      return Meteor.users.find({}).count();
    };

  Template.leaderboard.players = function() {
    return Meteor.users.find({}, {
      sort: {
        'rate': -1
      }
    });
  };





  Template.leaderboard.items = function() {
    return Items;
  }

  Template.reward.items = function() {
    return Meteor.user();
  }
  Template.profile.user = function() {
    return Meteor.user();
  }

  Template.myProfile.user = function() {
    return Meteor.user();
  }

  Template.leaderboard.user = function() {
    return Meteor.user();
  }
  Template.statusshow.user = function() {
    return Meteor.user();
  }


  Template.pvp.user = function() {
    return Meteor.user();
  }



  Template.leaderboard.events({
    'click input.code': function() {
      Meteor.call('click');

    }
  });




    Template.reward.events({
      'click input.win': function() {
        Meteor.call('promo1');
        alert("You have just won 1 free Standard QuestCo. Questing Rifle! Unless you already did this. This only works once!");

      }
    });

  Template.leaderboard.events({
    'click input.buy': function(event) {
      Meteor.call('buy', event.target.id);
    }
  });


  Template.moon.rendered = function(){
    if (!this.rendered){
      $('body').css('background-image','url(/moonback.png)');
      this.rendered = true;
    }
  };


  Template.needlogin.rendered = function(){
    if (!this.rendered){
      $('body').css('background-image','url(/moonback.png)');
      this.rendered = true;
    }
  };

  Template.store.rendered = function(){
    if (!this.rendered){
      $('body').css('background-image','url(/store.png)');
      this.rendered = true;
    }
  };

  Template.leaderboards.rendered = function(){
    if (!this.rendered){
      $('body').css('background-image','url(/scroll.png)');
      this.rendered = true;
    }
  };
  Template.leaderboards.rendered = function(){
    if (screen.width <= 1200) {
    window.location = "/no";

  }
  else {
    return false;
  }
};

Template.smalldash.rendered = function(){
  if (screen.width <= 1200) {
 console.log("derp");
  Blaze.remove(dash);
}
};
  Template.start.rendered = function(){

    window.location = "/home";

  };
  Template.no.rendered = function(){
    if (screen.width >= 900) {
    window.location = "/base";
  }
  };




  Template.leaderboard.rendered = function(){
    if (!this.rendered){
      $('body').css('background-image','url(/background.png)');
      this.rendered = true;
    }
  };

    Template.player.players = function() {
      return Meteor.users.find({}, {
        sort: {
          'rate': -1
        }
      });
    };
    Template.player.items = function() {
      return Items;
    }
    Template.player.user = function() {
      return Meteor.user();
    }


    Template.quest.user = function() {
      return Meteor.user();
    }



    Template.keeper.keeper = function() {
      var username1="QuestKeeper";
      return Meteor.users.findOne({
          username:username1
      });

    }


    Template.quest.keeper = function() {
      var username1="QuestKeeper";
      return Meteor.users.findOne({
          username:username1
      });

    }

    Template.leaderboard.keeper = function() {
      var username1="QuestKeeper";
      return Meteor.users.findOne({
          username:username1
      });

    }





  Template.leaderboards.players = function() {
    return Meteor.users.find({}, {
      sort: {
        'rate': -1
      }
    });
  };
  Template.leaderboards.items = function() {
    return Items;
  }
  Template.leaderboards.user = function() {
    return Meteor.user();
  }
  Template.search.user = function() {
    return Meteor.user();
  }
  Template.questleader.user = function() {
    return Meteor.user();
  }

  Template.player2.user = function() {
    return Meteor.user();
  }



disqus_shortname="questgrinders";


  Template.questleader.players = function() {
    return Meteor.users.find({}, {
      sort: {
        'progress': -1
      }
    });
  };







  Template.cheat.players = function() {
    return Meteor.users.find({}, {
      sort: {
        'rate': -1
      }
    });
  };

  Template.search.players = function() {
   var one = Meteor.user().lastSearch;
   var done = Meteor.users.findOne({
       username: one
   });
    return done
  };








  Template.search.events({

    'submit' : function(event) {
        event.preventDefault(); //prevent page refresh



        var derp = event.target.searchbar.value;



        Meteor.call('searched', derp);
    }
});





  Template.status.events({

    'submit' : function(event) {
        event.preventDefault(); //prevent page refresh



        var statusvar = event.target.status.value;


        alert("Submitted!");
        Meteor.call('submitme', statusvar);
    }
});

Template.avatar2.events({

  'submit' : function(event) {
      event.preventDefault(); //prevent page refresh



      var avatarvar = event.target.avatar.value;


      alert("Submitted!");
      Meteor.call('setavatar', avatarvar);
  }
});


Template.pvp.events({

  'submit' : function(event) {
      event.preventDefault(); //prevent page refresh



      var target = event.target.victim.value;


      alert("Attacked!");
      Meteor.call('attack', target);
  }
});



  Template.adventure.events({
    'click input.adventure': function() {
      Meteor.call('adventure');
    }
  });


  Template.leaderboards.events({
    'click input.code': function() {
      Meteor.call('click');
    }
  });

  Template.leaderboards.events({
    'click input.buy': function(event) {
      Meteor.call('buy', event.target.id);
    }
  });


  Template.cheat.user = function() {
    return Meteor.user();
  }


  Template.cheat.events({
    'click input.cheat': function() {
      Meteor.call('cheat');
    }
  });






  Template.store.players = function() {
    return Meteor.users.find({}, {
      sort: {
        'money': -1
      }
    });
  };
  Template.store.items = function() {
    return Items;
  }
  Template.store.user = function() {
    return Meteor.user();
  }

  Template.spyshop.user = function() {
    return Meteor.user();
  }

  Template.profile.user = function() {
    return Meteor.user();
  }


  Template.store.events({
    'click input.code': function() {
      Meteor.call('click');

 }

  });

  Template.store.events({
    'click input.buy': function(event) {
      Meteor.call('buy', event.target.id);
    }
  });
  Template.store.events({
    'click input.power': function(event) {
      Meteor.call('power', event.target.id);
    }
  });

  Template.store.events({
    'click input.apower': function(event) {
      Meteor.call('apower', event.target.id);
    }
  });



  Template.store.events({
    'click input.mult': function(event) {
      Meteor.call('mult', event.target.id);
    }
  });

  Template.store.events({
    'click input.buya': function(event) {
      Meteor.call('buya', event.target.id);
    }
  });

    Template.store.events({
      'click input.buym': function(event) {
        Meteor.call('buym', event.target.id);
      }
    });



  Template.store.events({
    'click input.hpowerup': function(event) {
      Meteor.call('hpowerup', event.target.id);
    }
  });
  Template.store.events({
    'click input.spy': function(event) {

    if (Meteor.user().rate >= 0)
    var spyshop = "yesspyshop"
  else {    var spyshop = "nospyshop"
  }
  }
  });

  Template.spyshop.events({
    'click input.buyspy': function(event) {
      Meteor.call('buyspy', event.target.id);
    }
  });

Handlebars.registerHelper('formatCurrency', function(number) {
      return number.toLocaleString();
    });

  }








if (Meteor.isServer) {




      Meteor.publish("userStatus", function() {
        return Meteor.users.find({ "status.online": true });
      });

  Meteor.publish("userProfile",function(username){
      // simulate network latency by sleeping 2s
      Meteor._sleepForMs(2000);
      // try to find the user by username
      var user=Meteor.users.findOne({
          username:username
      });
      // if we can't find it, mark the subscription as ready and quit
      if(!user){
          this.ready();
          return;
      }
      // if the user we want to display the profile is the currently logged in user...
      if(this.userId==user._id){
          // then we return the corresponding full document via a cursor
          return Meteor.users.find(this.userId);
      }
      else{
          // if we are viewing only the public part, strip the "profile"
          // property from the fetched document, you might want to
          // set only a nested property of the profile as private
          // instead of the whole property
          return Meteor.users.find(user._id,{
              fields:{
                  "profile":0
              }
          });
      }
  });


  Avatar.setOptions({
    customImageProperty: function() {
      var user = this;
      // calculate the image URL here
      return user.avatar2;
    }
  });


  ProfileController=RouteController.extend({
      template:"profile",
      waitOn:function(){
          return Meteor.subscribe("userProfile",this.params.username);
      },
      data:function(){
          var username=Router.current().params.username;
          return Meteor.users.findOne({
              username:username
          });
      }
  });

  Meteor.startup(function() {







    Meteor.setInterval(function() {

      Meteor.users.find({}).map(function(user) {
        Meteor.users.update({
          _id: user._id
        }, {
          $inc: {
            'money': user.rate*user.heropower,
            'exp': user.rate/100
          },



        })
      });




    }, 1500)



              Meteor.setInterval(function() {

                Meteor.users.find({}).map(function(user) {
                  Meteor.users.update({
                    _id: user._id
                  }, {
                    $inc: {
                      'money': user.mage*2*user.magepower,


                    }



                  })
                });




              }, 3000)





      Meteor.setInterval(function() {

        Meteor.users.find({}).map(function(user) {
          Meteor.users.update({
            _id: user._id
          }, {
            $inc: {
              'money': user.archer*user.archerpower,


            }



          })
        });




      }, 500)

    });











  Accounts.onCreateUser(function(options, user) {


    user.cheat = "(Member)"
    user.cost = 1000;
    user.money = 0;
    user.rate = 0;

    user.adv = 10;
    user.power = 25;
    user.pcost = 1000000;
    user.mult = 1;
    user.wepcost = 1000000000000;
    user.heropower = 1;
    user.hpowercost = 1500000;
    user.spycost = 100;
    user.spy = 0;
    user.archer = 0;
    user.archerprice= 20000;
    user.archerpower = 1;
    user.archerpcost = 10000;
    user.magepcost = 100000;
    user.magepower = 1;

    user.mage = 0;
    user.mageprice = 150000 ;

    return user;


  });


  Meteor.publish("userData", function() {
    return Meteor.users.find({}, {
      sort: {
        'rate': -1
      }
    });
  });


}













Meteor.methods({


          getServerTime: function () {
              var _time = (new Date).toTimeString();


              return _time;
          },

  submitme2: function() {
      var statusvar = document.getElementById("status").value;
      Meteor.call('submitme', statusvar);
      event.preventDefault();
    },

    setavatar: function() {
      
        Meteor.call('setavatar2', avatarvar);
        event.preventDefault();
      },


      setavatar2: function(statusvar) {


        Meteor.users.update({
            _id: this.userId
        }, {

            $set: {
                'avatar2': avatarvar
            }


        });

        console.log(avatarvar)
      },


  submitme: function(statusvar) {


    Meteor.users.update({
        _id: this.userId
    }, {

        $set: {
            'status3': statusvar
        }


    });

    console.log(statusvar)
},


searched: function(derp) {


  var searched = derp;
  Meteor.users.update({
      _id: this.userId
  }, {

      $set: {
          'lastSearch': searched
      }


  });
var searched2 =  Meteor.user().lastSearch;

    console.log(searched);
    Meteor.call('s2');
    return searched2
},




s2: function() {


  var searched2 =  Meteor.user().lastSearch;
  console.log(searched2);
  return searched2






},


attack: function(target) {


  Meteor.users.update({
      _id: this.userId
  }, {

      $set: {
          'attack': target
      }


  });

    Meteor.call('attack2');


},

attack2: function(target) {


  var person = Meteor.users.findOne(
    { 'username' : target },
);





},





  adventure: function() {
    if (Meteor.user().adv > 0) {
      Meteor.users.update({
        _id: this.userId
      }, {
        $inc: {
          'adv': -1
        }
      });
      Blaze.render(Template.adv, $('body').get(0));
    } else {
      Blaze.render(Template.noadventures, $('body').get(0));
    }
  },








    buyspy: function(amount) {
      var spyrate = Meteor.user().spy;
      var spycostnew = spyrate * 10000;
      if (Meteor.user().money >= amount && amount > 0)
        Meteor.users.update({
          _id: this.userId
        }, {
          $inc: {
            'spy': 1,
            'spycost': spycostnew,
            'money': (0 - amount),
          }
        });


    },

    buya: function(amount) {
      var archer = Meteor.user().archer;
      var cost = archer * 1500;
      if (Meteor.user().money >= amount && amount > 0)
        Meteor.users.update({
          _id: this.userId
        }, {
          $inc: {
            'archer': 1,
            'archerprice': cost,
            'money': (0 - amount),
          }
        });


    },

    buyi: function(amount) {
      var archer = Meteor.user().archer;
      var cost = archer * 1500;
      if (Meteor.user().money >= amount && amount > 0)
        Meteor.users.update({
          _id: this.userId
        }, {
          $inc: {
            'archer': 1,
            'archerprice': cost,
            'money': (0 - amount),
          }
        });


    },


    buym: function(amount) {
      var mage = Meteor.user().mage;
      var cost = mage * 500;
      if (Meteor.user().money >= amount && amount > 0)
        Meteor.users.update({
          _id: this.userId
        }, {
          $inc: {
            'mage': 1,
            'mageprice': cost,
            'money': (0 - amount),
          }
        });


    },

  buy: function(amount) {
    var hero = Meteor.user().rate;
    var cost = hero * 100;
    if (Meteor.user().money >= amount && amount > 0)
      Meteor.users.update({
        _id: this.userId
      }, {
        $inc: {
          'rate': 1,
          'cost': cost,
          'money': (0 - amount),
        }
      });


  },

  power: function(amount) {
    var power = Meteor.user().power
    if (Meteor.user().money >= amount && amount > 0)
      Meteor.users.update({
        _id: this.userId
      }, {
        $inc: {
          'power': 5,
          'pcost': power*10,
          'money': (0 - amount),
        }
      });


  },

  apower: function(amount) {
    if (Meteor.user().money >= amount && amount > 0)
      Meteor.users.update({
        _id: this.userId
      }, {
        $inc: {
          'archerpower': 1,
          'archerpcost': 1000000,
          'money': (0 - amount),
        }
      });


  },

  mult: function(amount) {
    if (Meteor.user().money >= amount && amount > 0)
      Meteor.users.update({
        _id: this.userId
      }, {
        $inc: {
          'mult': 1,
          'wepcost': 1000000000000,
          'money': (0 - amount),
        }
      });


  },


  hpowerup: function(amount) {
    if (Meteor.user().money >= amount && amount > 0)
      Meteor.users.update({
        _id: this.userId
      }, {
        $inc: {
          'heropower': 1,
          'hpowercost': 1000000000000,
          'money': (0 - amount),
        }
      });


  },


  click: function() {

    var power = Meteor.user().power;
    var mult = Meteor.user().mult;
    Meteor.users.update({
      _id: this.userId
    }, {
      $inc: {
        'money': power * mult,
        'lifetimeclick': 1,
        'done': 0,
        'done2': 0,
        'done3': 0,
        'done4': 0,
        'done5': 1,
        'progress': 1,
      },


    });

    Meteor.users.update({
        username:"QuestKeeper"

    }, {
      $inc: {
        'progress': 1,


      },


    });
      Meteor.call('spyset');
  },




      spyset: function () {
        if(Meteor.user().done5 <150 )

          Meteor.users.update({
            _id: this.userId
          }, {
            $set: {
              'power' : 25,
                'pcost' : 100000,
               'done5' : 200,

            }
            });
        },









});


Router.route('/leaderboard', function() {
  this.render('leaderboards');
});

Router.route('/', function() {
  this.render('start');
});

Router.route('/base', function() {
  this.render('leaderboard');
});

Router.route('/lore', function() {
  this.render('lore');
});

Router.route('/stats', function() {
  this.render('stats');
});

Router.route('/help', function() {
  this.render('help');
});

Router.route('/moon', function() {
  this.render('moon');
});

Router.route('/store', function() {
  this.render('store');
});
Router.route('/jack', function() {
  this.render('jack');
});

Router.route('/goodiesohhi', function() {
  this.render('cheat');
});


Router.route('/login', function() {
  this.render('loginButtons');
});
