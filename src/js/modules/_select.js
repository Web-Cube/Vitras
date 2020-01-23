$(()=>{
	
	$(".select__label").focus(function(){
		
		var this_val = $(this).val();
		
		$(this).closest(".select").addClass("is-active");
		$(this).attr("data-value", this_val).val("");
		
	}).change( function () {
		
		var value = $(this).val().toLowerCase();
		
		$(this).closest(".select").find(".select__item").filter(function() {
			$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
		});
		
	}).keyup( function () {
		
		$(this).change();
		
	});
	
	$(".select__item").click(function(){
		
		var text = $(this).text();
		
		$(this).closest(".select").find(".select__label").attr("data-value", text).val(text);
		
		$(".select__item.is-active").removeClass("is-active");
		$(this).addClass("is-active");
		
		$(this).closest(".select").removeClass("is-active");
		
	});
	
	$(".select__icon").click(function(){
		$(this).closest(".select").removeClass("is-active");
		$(".select__label").val( $(".select__label").attr("data-value") );
	});
	
});