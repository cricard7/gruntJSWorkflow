

//----------------- See Gruntfile.js --------
describe("javascript_one Module", function() {
    
  it("has a myGruntApp object that is defined", function() {
    
      var theApp = myGruntApp;
      
      expect(theApp).toBeDefined();
  });
    
    
    
});

//--------- A NEW SCRIPT----------
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
//# sourceMappingURL=specs.js.map