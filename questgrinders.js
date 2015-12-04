

Items = [{name: "Hero"}];






if (Meteor.isClient) {





Router.route('/leaderboard', function () {
  this.render('leaderboards');
});

Router.route('/', function () {
  this.render('start');
});

Router.route('/base', function () {
  this.render('leaderboard');
});

Router.route('/lore', function () {
  this.render('lore');
});

Router.route('/adventure', function () {
  this.render('adventure');
});

Router.route('/help', function () {
  this.render('help');
});

Router.route('/moon', function () {
  this.render('moon');
});

Router.route('/store', function () {
  this.render('store');
});
Router.route('/jack', function () {
  this.render('jack');
});

Router.route('/goodiesohhi', function () {
  this.render('cheat');
});


Router.route('/login', function () {
  this.render('loginButtons');
});
  
  Accounts.ui.config({
    passwordSignupFields: 'USERNAME_ONLY'
  });
  
  Meteor.subscribe('userData');




  
  Template.leaderboard.players = function () {
    return Meteor.users.find({}, {sort: {'rate': -1}});
  };
  Template.leaderboard.items = function () {
    return Items;
  }
  Template.leaderboard.user = function () {
    return Meteor.user();
  }

  Template.leaderboard.events({
    'click input.code': function () {
      Meteor.call('click');
    }
  });

  Template.leaderboard.events({
    'click input.buy': function (event) {
      Meteor.call('buy', event.target.id); 
    }
  });









  Template.leaderboards.players = function () {
    return Meteor.users.find({}, {sort: {'rate': -1}});
  };
  Template.leaderboards.items = function () {
    return Items;
  }
  Template.leaderboards.user = function () {
    return Meteor.user();
  }

  
  
  Template.cheat.players = function () {
    return Meteor.users.find({}, {sort: {'rate': -1}});
  };

   Template.adventure.events({
    'click input.adventure': function () {
      Meteor.call('adventure');
    }
  });


   Template.leaderboards.events({
    'click input.code': function () {
      Meteor.call('click');
    }
  });

  Template.leaderboards.events({
    'click input.buy': function (event) {
      Meteor.call('buy', event.target.id); 
    }
  });


Template.cheat.user = function () {
    return Meteor.user();
  }


   Template.cheat.events({
    'click input.cheat': function () {
      Meteor.call('cheat');
    }
  });






  Template.store.players = function () {
    return Meteor.users.find({}, {sort: {'money': -1}});
  };
  Template.store.items = function () {
    return Items;
  }
  Template.store.user = function () {
    return Meteor.user();
  }

  


   Template.store.events({
    'click input.code': function () {
      Meteor.call('click');
    }
  });

  Template.store.events({
    'click input.buy': function (event) {
      Meteor.call('buy', event.target.id); 
    }
  });
 Template.store.events({
    'click input.power': function (event) {
      Meteor.call('power', event.target.id); 
    }
  });





  Template.adventure.players = function () {
    return Meteor.users.find({}, {sort: {'money': -1}});
  };
  Template.adventure.items = function () {
    return Items;
  }
  Template.adventure.user = function () {
    return Meteor.user();
  }

  


   Template.adventure.events({
    'click input.adv': function () {
      Meteor.call('adventure');
    }
  });

  Template.adventure.events({
    'click input.buy': function (event) {
      Meteor.call('buy', event.target.id); 
    }
  });


  
  Handlebars.registerHelper('formatCurrency', function(number) {
    return number.toLocaleString();
  });





}


if (Meteor.isServer) {
   Meteor.startup(function () {
  
  Meteor.setInterval(function() {
  
    Meteor.users.find({}).map(function(user) {
      Meteor.users.update({_id: user._id}, {$inc: {'money': user.rate}})
    });
  }, 3000)
 
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
    return user;
  })

 
  Meteor.publish("userData", function () {
    return Meteor.users.find({}, {sort: {'rate': -1}});
  });

  
 }


Meteor.methods({


    

  adventure: function () {
    if(Meteor.user().adv > 0)
    {
    Meteor.users.update({_id: this.userId}, {$inc: {'adv': -1 }}); 
       Blaze.render(Template.adv, $('body').get(0));
    }
    else
    {
       Blaze.render(Template.noadventures, $('body').get(0));
    }
  },      

   

   buy: function(amount) {
    if(Meteor.user().money >= amount && amount > 0)
      Meteor.users.update({_id: this.userId}, {$inc: {'rate': 1,'cost': 500 ,'money': (0-amount), }}); 
      
      
  },

  power: function(amount) {
    if(Meteor.user().money >= amount && amount > 0)
      Meteor.users.update({_id: this.userId}, {$inc: {'power': 5,'pcost': 1000000 ,'money': (0-amount), }}); 
      
      
  },


click: function () {    
  var power = Meteor.user().power;
  Meteor.users.update({_id: this.userId}, {$inc: {'money': power  }});
},
  


});


Router.route('/leaderboard', function () {
  this.render('leaderboards');
});

Router.route('/', function () {
  this.render('start');
});

Router.route('/base', function () {
  this.render('leaderboard');
});

Router.route('/lore', function () {
  this.render('lore');
});

Router.route('/adventure', function () {
  this.render('adventure');
});

Router.route('/help', function () {
  this.render('help');
});

Router.route('/moon', function () {
  this.render('moon');
});

Router.route('/store', function () {
  this.render('store');
});
Router.route('/jack', function () {
  this.render('jack');
});

Router.route('/goodiesohhi', function () {
  this.render('cheat');
});


Router.route('/login', function () {
  this.render('loginButtons');
});

