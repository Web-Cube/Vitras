$(() => {
	if(!$('#map').length)
		return false;	
			
	$("#map").each(function(){
		function initMap() {
			var locations = [
				['Санкт-Петербург, ул. Белоостровская, д 17, к 2, лит А, БЦ "Avantage", офис 807', 59.986862, 30.321206]
			];
			var map = new google.maps.Map(document.getElementById('map'), {
				zoom: 16,
				center: new google.maps.LatLng(59.986862, 30.321206),
				mapTypeId: google.maps.MapTypeId.ROADMAP
			});

			var infowindow = new google.maps.InfoWindow();
			var marker, i;

			for (i = 0; i < locations.length; i++) {
				marker = new google.maps.Marker({
					position: new google.maps.LatLng(locations[i][1], locations[i][2]),
					map: map,
					icon: {
						url: "/app/img/marker.png",
						scaledSize: new google.maps.Size(41, 56)
					}
				});
			}
		};

		initMap();
	});
})