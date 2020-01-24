$(() => {
	if(!$('#map').length)
		return false;	
			
	$("#map").each(function(){
		
		function initMap() {
			var location = {lat: 59.986862, lng: 30.321206};
			var map = new google.maps.Map(document.getElementById('map'), {
			  	zoom: 18,
			  	center: location
			});

			var marker = new google.maps.Marker({          
				position: location,
				map: map,
				icon: '/app/img/marker.png',
				scaledSize: (25,25),
				title:'Санкт-Петербург, ул. Белоостровская, д 17, к 2, лит А, БЦ "Avantage", офис 807'
			});
		}

		initMap();
	});
})