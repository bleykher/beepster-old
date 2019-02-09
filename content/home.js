var id = 1;

$( document ).ready( function() {
							  
    $('#content').jCarouselLite({
        scroll: 1,
        btnPrev: ".arrow.previous",
        btnNext: ".arrow.next",
        visible: 1,
        btnGo: [".slide1", ".slide2", ".slide3", ".slide4", ".slide5"],
        speed: 650,
        beforeStart: function(index) {
			if(index != id) {
				// index control and update lower dots
				id = index>5 ? index % 5 : (index <= 0 ? 5 + index % 5 : index);
				$('.button').removeClass('active');
		        $('.button:nth-child('+id+')').addClass('active');
				
				// update backgrounds
			    var $activePhone = $('#iphone .phone.active');
			    if ($activePhone.length == 0) {
					$activePhone = $('#iphone IMG.phone:first');
				}
			
			    // use this to pull the images in the order they appear in the markup
			    var $nextPhone =  $('#iphone IMG.phone:nth-child(' + id + ')');
			
			    $activePhone.addClass('last-active');			   
			
			    $nextPhone.css({opacity: 0.0})
			        .addClass('active')
			        .animate({opacity: 1.0}, 650, function() {
			            $activePhone.removeClass('active last-active');
			        });
			
				
				var activeBg = $('#background .bg.active');
				if (activeBg.length == 0) {
					activeBg = $('#background .bg:first');
				}
				
				var nextBg =  $('#background .bg:nth-child(' + id + ')');
				
				activeBg.addClass('last-active');			   
			
			    nextBg.css({opacity: 0.0})
			        .addClass('active')
			        .animate({opacity: 1.0}, 650, function() {
			            activeBg.removeClass('active last-active');
			        });
		    }
        }
    });
	
	$("#footer a").hover(function(){
	  $(this).animate({ color: '#404040'}, 250);
	}, function() {
	  $(this).animate({ color: '#B2B2B2'}, 250);
	});	
	
});

//Background Resizing
// $(window).resize(function() { resize(); });

// $(function() { 
// 	if(!isiPad()) {
// 		resize();
// 		DD_belatedPNG.fix('#background-items li');
// 		$('img').bind('dragstart', function(event) { event.preventDefault(); });
// 		
// 		// IE6 doesn't handle the fade effect very well - so we'll stick with default 
// 		// non-Javascript version if that is the user's browser. 
// 		if ($.browser.msie && $.browser.version < 7) return; 
// 		
// 		$('a.highlight').removeClass('highlight').append('<span class="hover"></span>'); 
// 		$('span.hover').css('opacity', 0); 
// 		
// 		$('a').hover( 
// 			function () { 
// 				// on hover, stop any animations currently running, and fade to opacity: 1 
// 				$('.hover', this).stop().fadeTo(250, 1); 
// 			}, 
// 			function () { 
// 				// off hover, stop any animations currently running and fade out 
// 				$('.hover', this).stop().fadeTo(250, 0); 
// 			} 
// 		); 
// 	}
// });
// 		
// function resize() {
// 	if(!isiPad()) {
// 		var winwidth = $(window).width();
// 		var winheight = $(window).height();
// 		
// 		if((winwidth/1280)>(winheight/960)) {
// 			$("#background IMG.bg").css("width", "100%")
// 				.css("height", "auto");
// 			$('#background').css('height', winheight<960 ? 960+'px' : winheight+'px');
// 		} else {
// 			$("#background IMG.bg").css("height", "100%")
// 				.css("width", "auto");
// 			$('#background').css('height', winheight<960 ? 960+'px' : winheight+'px');
// 		}
// 		
// 		if(winheight < 740) {
// 			$("#shell").css("height", 550)
// 				.css("width", "auto");
// 			$("#iphone IMG.phone").css("height", 317)
// 				.css("width", "auto")
// 				.css("top", 110)
// 				.css("left", 41);
// 		} else {
// 			$("#shell").css("height", "auto")
// 				.css("width", "auto");
// 			$("#iphone IMG.phone").css("height", "auto")
// 				.css("width", "auto")
// 				.css("top", 161)
// 				.css("left", 60);
// 		}
// 		
// 		var height = winheight>960 ? winheight : 960;
// 		$('#footer').css('margin-top', height+'px')
// 		
// 		var hoffset = winwidth>1280 ? (winwidth-1280)/2 : 0;
// 		// BG Elems: 
// 		$('#iphone').css('margin-left', (hoffset+768)+'px');				
// 		$('#download-appstore').css('margin-left', (hoffset/2)+'px');
// 		$('#mainContent li div').css('margin-left', (hoffset/2)+'px');		
// 	}
// }
// 
// function isiPad(){
//     return (navigator.platform.indexOf("iPad") != -1);
// }