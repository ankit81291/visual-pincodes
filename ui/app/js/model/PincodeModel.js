define(['../services/PincodeService'], function(PincodeService) {

    /*
        Enter you records here in the specifed format
    */
    var data = [
        {
            pincode: "474011",
            rating: 5
        },
        {
            pincode: "474031",
            rating: 2
        },
        {
            pincode: "560017",
            rating: 6
        },
        {
            pincode: "525025",
            rating: 9
        },
        {
            pincode: "234567",
            rating: 10
        },
        {
            pincode: "98765",
            rating: 3
        }
    ];

    var PincodeModel = function() {

    };
    PincodeModel.prototype.initData = function() {

        data.forEach(function(record) {
            PincodeService.add(record);
        });
    };

    PincodeModel.prototype.fetchRecords = function() {
        // $.when(PincodeService.getAllRecords()).then(function(response) {
        //     return response;
        // });
        return PincodeService.getAllRecords();
        // return data;
    };

    PincodeModel.prototype.changeRating = function(record) {
        return PincodeService.update(record);
    };
    return new PincodeModel();
});