define([], function() {
	var PincodeService = function () {
		return {
			getAllRecords: function() {

				return $.ajax("http://localhost:3000/pincodes", {
					success: function(data) {
						return data;
					},
					error: function() {
						return "Error";
					}
				});
			},

			add: function(data) {
				$.ajax({
					url: "http://localhost:3000/pincodes/add",
					data: data,
					success: function(data) {
						return data;
					},
					error: function() {
						return "Error";
					},
					type: 'POST'
				});
			},

			update: function(data) {
				return $.ajax({
					url: "http://localhost:3000/pincodes/" + data.pincode,
					data: data,
					success: function(data) {
						return data;
					},
					error: function() {
						return "Error";
					},
					type: 'POST'
				});
			}
		};
	};
	return new PincodeService();
});