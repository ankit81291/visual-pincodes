define(['../model/PincodeModel'], function(PincodeModel) {
	var RatingController = function(){
	};

	RatingController.prototype.initialize = function() {
		var slider = $('#slider'),
			valueTag = $('#value');

		slider.slider({
			min: 1,
			max: 10,

			slide: function(event, ui) {
				valueTag.text(ui.value);

			},

			stop: function(event, ui) {
				var record = {
					pincode: $('#pin').text(),
					rating: ui.value
				};
				PincodeModel.changeRating(record);
				$('#slider').trigger('rating-changed');
			}
		});
		slider.slider("disable");

	};

	RatingController.prototype.showRating = function(pincode, rating) {
		$("#slider").slider('value',rating);
		$("#pin").text(pincode);
		$('#value').text(rating);
		$("#slider").slider("enable");
	};

	return (new RatingController());

});