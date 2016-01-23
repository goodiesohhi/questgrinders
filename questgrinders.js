Items = [{
  name: "Hero"
}];




if (Meteor.isClient) {



  Router.onBeforeAction(function() {
      if (!Meteor.user() && this.ready())
          return this.redirect('/needlogin');
      else { this.next() }
  }, {except: ['needlogin','leaderboard','contact','help','infopages']});








  Router.route('/city', function() {
    this.render('city');
  });

  Router.route('/lib', function() {
    this.render('lib');
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
    this.render('loginButtons');
  });

  Accounts.ui.config({
    passwordSignupFields: 'USERNAME_AND_OPTIONAL_EMAIL'
  });

  Meteor.subscribe('userData');





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
  Template.leaderboard.user = function() {
    return Meteor.user();
  }

  Template.leaderboard.events({
    'click input.code': function() {
      Meteor.call('click');
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



  Template.cheat.players = function() {
    return Meteor.users.find({}, {
      sort: {
        'rate': -1
      }
    });
  };

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

  Template.store.user = function() {
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
    'click input.mult': function(event) {
      Meteor.call('mult', event.target.id);
    }
  });

  Template.store.events({
    'click input.hpowerup': function(event) {
      Meteor.call('hpowerup', event.target.id);
    }
  });






  Template.stats.players = function() {
    return Meteor.users.find({}, {
      sort: {
        'money': -1
      }
    });
  };
  Template.stats.items = function() {
    return Items;
  }
  Template.stats.user = function() {
    return Meteor.user();
  }




  Template.stats.events({
    'click input.code': function() {
      Meteor.call('click');
    }
  });

  Template.stats.events({
    'click input.buy': function(event) {
      Meteor.call('buy', event.target.id);
    }
  });
  Template.stats.events({
    'click input.power': function(event) {
      Meteor.call('power', event.target.id);
    }
  });




  Template.adventure.players = function() {
    return Meteor.users.find({}, {
      sort: {
        'money': -1
      }
    });
  };
  Template.adventure.items = function() {
    return Items;
  }
  Template.adventure.user = function() {
    return Meteor.user();
  }




  Template.adventure.events({
    'click input.adv': function() {
      Meteor.call('adventure');
    }
  });

  Template.adventure.events({
    'click input.buy': function(event) {
      Meteor.call('buy', event.target.id);
    }
  });



  Handlebars.registerHelper('formatCurrency', function(number) {
    return number.toLocaleString();
  });





}


if (Meteor.isServer) {

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
            'exp': user.rate*0.01
          }



        })
      });
    }, 3000)

  });





  Meteor.methods({
    sendEmail: function(to, from, subject, text) {
      check([to, from, subject, text], [String]);

      // Let other method calls from the same client start running,
      // without waiting for the email sending to complete.
      this.unblock();
    }
  });


  Accounts.onCreateUser(function(options, user) {


    user.cheat = "(Member)"
    user.cost = 1000;
    user.money = 0;
    user.rate = 0;
    user.spy = 200;
    user.adv = 10;
    user.power = 25;
    user.pcost = 1000000;
    user.mult = 1;
    user.wepcost = 1000000000000;
    user.heropower = 1;
    user.hpowercost = 1500000
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
    if (Meteor.user().money >= amount && amount > 0)
      Meteor.users.update({
        _id: this.userId
      }, {
        $inc: {
          'power': 5,
          'pcost': 1000000,
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
        'money': power * mult
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
