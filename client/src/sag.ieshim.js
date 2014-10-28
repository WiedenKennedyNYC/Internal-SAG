(function(){	
	function internetExplorerVersion()
	{
	  var rv = -1;
	  if (navigator.appName == 'Microsoft Internet Explorer')
	  {
	    var ua = navigator.userAgent;
	    var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
	    if (re.exec(ua) != null)
	      rv = parseFloat( RegExp.$1 );
	  }
	  else if (navigator.appName == 'Netscape')
	  {
	    var ua = navigator.userAgent;
	    var re  = new RegExp("Trident/.*rv:([0-9]{1,}[\.0-9]{0,})");
	    if (re.exec(ua) != null)
	      rv = parseFloat( RegExp.$1 );
	  }
	  return rv;
	}
		
	function switchImage(image){
		var hasSize = true
		  , imageReplaced = false	
		  , sagImage
		  , width = image.width
		  , height = image.height
		  , objectImage = document.createElement('object');
		  
		objectImage.height = height;
		objectImage.width = width;
		objectImage.data = sagImages[i].src;
		
		
		function replaceImage(){
			if(!imageReplaced){
				imageReplaced = true;
				sagImage = image.parentNode.replaceChild(objectImage, image);
			}
		}
		
		if(width == '' || height == ''){
			hasSize = false;
			setTimeout(function(){
				width = image.width;
				height = image.height;
				objectImage.width = width;
				objectImage.height = height;
				replaceImage();
			},250);
		}
		
		replaceImage();
	}
	
	if(internetExplorerVersion() != -1){
		var sagImages = document.getElementsByClassName('anim-sag');
		for(var i = 0; i < sagImages.length; i++){
			switchImage(sagImages[i]);
		}
	}
})();