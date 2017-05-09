


   
    

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