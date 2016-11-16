// JavaScript Document

 



			
		$(window).scroll(function() {
    if ($(this).scrollTop()) {
        $('#toTop').fadeIn();
    } else {
        $('#toTop').fadeOut();
    }	
});



   $(document).ready(function() {
                $(".mainnav").my_magicline();
            });
			
			
			$('.bottom-arrow').click(function(){
				 $('html,body').animate({
					scrollTop: $(window).scrollTop() + 900
				});
			});
			
			 $(document).ready(function() {
			 $('.vehicle-size').hide();
			$('input[type=radio][name=customer]').on('change', function() {
     switch($(this).val()) {
         case 'yes':
            
			 $('.vehicle-size').hide();
             break;
         case 'no':
           
			  $('.vehicle-size').show();
             break;
     }
});
});



  
//alert(navigator.platform);
  

/*function iOS() {

  var iDevices = [
    'iPad Simulator',
    'iPhone Simulator',
    'iPod Simulator',
    'iPad',
    'iPhone',
    'iPod'
  ];

  if (!!navigator.platform) {
    while (iDevices.length) {
      if (navigator.platform === iDevices.pop()){ return true; }
    }
  }

  return false;
}*/



	//validation
	/*$("form[name='myform']").on('submit', function() {
	 var name = $("input[name='name']").val();
	  var email = $("input[name='email']").val();
	   var phone = $("input[name='phone']").val();
	 alert('form submit');
  if(name == "")
   {
	    alert('Enter your name please');
		event.preventDefault();
        return false;
   }
   else if(phone == "" || email =="")
   {
	   alert('Enter email id or phone number');
	   event.preventDefault();
   }
   return true;
});
*/
 
 
 
 $('.menu-content').hide();
$('.menu-mobile').click(function() {
	
   $('.menu-content').toggle();
});

$("#toTop").click(function () {
 
   $("html, body").animate({scrollTop: 0}, 800);
});


$(".trigger").click(function() {
	 
    $(".menu").toggleClass("active"); 
  });
  
  
   
  $('.menu').click(function(){
	   var $this = $(this);
    if ($this.hasClass('active')) {
        $this.css('margin-top','50px');
	   $this.closest('section').css('height','400px');
    } else {
         $this.css('margin-top','0px');
	   $this.closest('section').css('height','auto');
    }
	  
	 
	  });
 


var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};



if(isMobile.any()) {
 // alert('Mobile Device');
   
  if(isMobile.iOS())
  {
	  //alert('iOS');
	
  }
  else if (isMobile.Android())
  {
	 //  alert('Android');
	 
  }
  
}
else
{
	
	  $('.zoom').magnify();
	  
}

	
	
  $('[data-toggle="tooltip"]').tooltip(); 
  /*$(window).load(function() {
	$(".loading").fadeOut("slow");
	$("body").css("background-color",'#fff');
})
*/
