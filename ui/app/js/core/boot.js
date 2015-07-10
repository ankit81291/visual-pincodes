define(["../controllers/ApplicationController"], function(application) {
    
    if(!this.app){
        this.app = new application();
    }
    this.app.start();
});