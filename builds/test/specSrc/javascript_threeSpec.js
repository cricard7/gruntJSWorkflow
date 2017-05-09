describe("javascript_Three Module", function() {
    
  it("creates a firstModule that is a property of the myGruntApp object that is defined", function() {
    
      var theModule = myGruntApp.firstModule;
      
      expect(theModule).toBeDefined();
      
      
  }); 
    
    it("creates a firstModule.init that is defined", function() {
    
      var theModule = myGruntApp.firstModule;
      
      expect(theModule.init).toBeDefined();
      
      
  });
    
   
    
});