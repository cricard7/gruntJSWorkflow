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