define(['../model/PincodeModel', './MapController', './RatingController'], function(PincodeModel, MapController, RatingController) {
    var Application = function(){
    };

    Application.prototype.start = function() {

        // Uncomment the below line to add more records and add those in PincodeModel.js file 
        // PincodeModel.initData();
       

        MapController.initialize();
        RatingController.initialize();
        $('#slider').on('rating-changed', this.refreshPage.bind(this));
        this.refreshPage();
        
    };

    Application.prototype.refreshPage = function() {
        this.showGraph();
        this.plotPinOnMap();
    };

    Application.prototype.showGraph = function() {
        $.when(PincodeModel.fetchRecords()).then(function(response) {

            d3.select(".chart").html("");
            d3.select(".chart")
            .selectAll("div")
            .data(response)
            .enter().append("div")
            .style("width", function(d) { return d.rating * 50 + "px"; })
            .text(function(d) { return d.pincode; });
        });
    };

    Application.prototype.plotPinOnMap = function() {
        $.when(PincodeModel.fetchRecords()).then(function(response) {
            var data = response;
            data.forEach(function(record){
                MapController.plotPincode(record.pincode, record.rating);
            });
        });
    };
    return Application;
});