$(()=>{
	$(".js-scroll-to").click(function() {
        var attr_href = $(this).attr("href");
        var data_href = $(this).data("href");
        if ( data_href ) {
            attr_href = data_href;
        }
		$("html, body").animate({
            scrollTop: $(attr_href).offset().top + "px"
        }, {
            duration: 1000
        });
        return false;
    });
	$(".header__burger").click(function() {
		$(this).toggleClass("is-active");
		$(".header__mobile").toggleClass("is-active");
		$("body").toggleClass("js-for-menu");
	});
	$(".header__mobile-link").click(function() {
		$(".header__burger").toggleClass("is-active");
		$(".header__mobile").toggleClass("is-active");
		$("body").toggleClass("js-for-menu");
	});
	$(".js-svg").each(function(){
        var svg_src = $(this).data("svg-src");
        $(this).load(svg_src);
    });
});