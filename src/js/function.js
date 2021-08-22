(function ($) {
    "use strict";
	
	var $window = $(window); 
	var $body = $('body'); 
	
	
			/* Count Down Timer */
	var $countdown = $(".rowcc");
	$countdown.each(function(){
		var date = $(this).attr("data-date");
		$(this).countdown({
			date: date,
			render: function(data) {
				var el = $(this.el);
				el.empty()
				.append("<li class='col-md-3'><article><span class='days'>" + this.leadingZeros(data.days, 2) + "</span><p class='days_ref'>Days</p></article></li>")
				.append("<li class='col-md-3'><article><span class='hours'>" + this.leadingZeros(data.hours, 2) + "</span><p class='hours_ref'>Hours</p></article></li>")
				.append("<li class='col-md-3'><article><span class='minutes'>" + this.leadingZeros(data.min, 2) + "</span><p class='minutes_ref'>Minutes</p></article></li>")
				.append("<li class='col-md-3'><article><span class='seconds'>" + this.leadingZeros(data.sec, 2) + "</span><p class='seconds_ref'>Seconds</p></article></li>");
			}
		});
	});
	
	
})(jQuery);