define(['./RatingController'], function(RatingController) {
	var MapController = function() {
        var geocoder, map;
	};

	MapController.prototype.initialize = function() {
		this.geocoder = new google.maps.Geocoder();
        //Default setup
        var latlng = new google.maps.LatLng(0, 0);
        var myOptions = {
            zoom: 2,
            center: latlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(document.getElementById("mapCanvas"), myOptions);
	};

	MapController.prototype.plotPincode = function(pincode, rating) {
		var image = {
            url: "../css/images/redMark.png",
            origin: new google.maps.Point(0,0),
            anchor: new google.maps.Point(0, 0)
        };
		this.geocoder.geocode( { 'address': pincode}, function(results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                image.size = new google.maps.Size(rating*2, rating*2);
                var marker = new google.maps.Marker({
                    map: this.map,
                    icon: image,
                    title: "PIN:" + pincode,
                    position: results[0].geometry.location
                });

                google.maps.event.addListener(marker, 'click', function() {
					RatingController.showRating(pincode, rating);
					
				});
            }
        }.bind(this));
	};
	return (new MapController());
	
});