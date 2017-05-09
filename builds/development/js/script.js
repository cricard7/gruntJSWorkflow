

//----------------- See Gruntfile.js --------



   
    

(function(window){
 
    window.myGruntApp = window.myGruntApp || {};
    
$(function(){
	
	
    myGruntApp.firstModule.init();
    $('.parallax').parallax();
    
    $('input.autocomplete').autocomplete({
    data: {
      "Apple": null,
      "Microsoft": null,
      "Google": 'http://placehold.it/250x250',
        "iron": null,
        "bull": null,
        "gold": null,
        "silver": null,
        "saline": null,
        
    },
    limit: 20, // The max amount of results that can be shown at once. Default: Infinity.
        
        
  });
	
});
    
    
}(window));

// App launching module

//--------- A NEW SCRIPT----------
(function(app){
    
    // if myGruntApp comes in as undefined, the module will still create an object and affix the module object to it.
    
    app = app || {};
    app.firstModule = app.firstModule || {}
    
    var s, // private alias to settings
        api = app.firstModule;

    api.settings = {
        numArticles: 5,
        articleList: $("#article-list"),
        moreButton: $("#more-button")
    };

    api.init = function() {
        s = api.settings;
        api.bindUIActions();
        
    };

    api.bindUIActions = function() {
        s.moreButton.on("click", function() {
            api.getMoreArticles(s.numArticles);
        });
    };

    api.getMoreArticles = function(numToGet) {
        // $.ajax or something
        // using numToGet as param
    };
    

   
    
}(myGruntApp));

//--------- A NEW SCRIPT----------
console.log("jstwo empty");
//# sourceMappingURL=script.js.map