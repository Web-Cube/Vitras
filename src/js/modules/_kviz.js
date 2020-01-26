import {thousandSeparator} from '../functions';

$(()=>{
	
	$('.kviz__head-input').change( function () {
		var value = $(this).val().toLowerCase();
		$(this).closest(".kviz__step").find(".kviz__item").filter(function() {
			$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
		});
	}).keyup( function () {
		$(this).change();
	});
	
	$(".js-next-step").click(function(){
		var index = $(this).closest(".kviz__step").index();
		
		$(".kviz__bottom-item:eq(" + index + ") .kviz__bottom-circle").addClass('is-active');
		$(this).closest(".kviz__step").removeClass("is-active").next().addClass('is-active');
		return false;
	});
	
	$(".kviz__item").click(function(){
		var this_val = $(this).text();
		var this_name = $(this).closest(".kviz__list").attr("data-value");
		
		$(".js-" + this_name).text( this_val ).addClass("is-active").prev().addClass("is-active");
		$("input[name='" + this_name + "']").val( this_val );
		$(this).closest(".kviz__step").find(".js-next-step").click();
	});
	
	$(".js-slider-power").slider({
		step: 10,
		min: 0,
		max: 1000,
		value: 150,
		range: "min",
		create: function() {
			$(".js-slider-power .ui-slider-handle").text( thousandSeparator( $( this ).slider( "value" ) ) + ' л.с.' );
		},
		slide: function( event, ui ) {
			$(".js-slider-power .ui-slider-handle, .js-power").text( thousandSeparator( ui.value ) + ' л.с.');
			$("input[name='power']").val( thousandSeparator( ui.value ) + ' л.с.');
			$(".js-power").addClass("is-active").prev().addClass("is-active");
		}
		
    });
	$(".js-slider-price").slider({
		step: 50000,
		min: 400000,
		max: 4000000,
		value: 1500000,
		range: "min",
		create: function() {
			$(".js-slider-price .ui-slider-handle").text( thousandSeparator( $( this ).slider( "value" ) ) + ' руб' );
		},
		slide: function( event, ui ) {
			$(".js-slider-price .ui-slider-handle, .js-price").text( thousandSeparator( ui.value ) + ' руб');
			$("input[name='price']").val( thousandSeparator( ui.value ) + ' руб');
			$(".js-price").addClass("is-active");
		}
    });
	$(".js-input-power").keyup(function(){
		
		var this_val = $(this).val();
		
        this_val = this_val.replace(/[^+0-9]/gim,'');
		this_val = thousandSeparator(this_val);
		
		$(this).val(this_val);
		$(this).attr("data-value", this_val.replace(/\s+/g,''));
		
		$( ".js-slider-power" ).slider({
			value: $(this).attr("data-value")
		});
		
		$(".js-slider-power .ui-slider-handle, .js-power").text( thousandSeparator( $(this).attr("data-value") ) + ' л.с.')
		$("input[name='power']").val( thousandSeparator( $(this).attr("data-value") ) + ' л.с.');
		
	});
	$(".js-input-price").keyup(function(){
		
		var this_val = $(this).val();
		
        this_val = this_val.replace(/[^+0-9]/gim,'');
		this_val = thousandSeparator(this_val);
		
		$(this).val(this_val);
		$(this).attr("data-value", this_val.replace(/\s+/g,''));
		
		$( ".js-slider-price" ).slider({
			value: $(this).attr("data-value")
		});
		
		$(".js-slider-price .ui-slider-handle, .js-price").text( thousandSeparator( $(this).attr("data-value") ) + ' руб');
		$("input[name='price']").val( thousandSeparator( $(this).attr("data-value") ) + ' руб');
		
	});
});