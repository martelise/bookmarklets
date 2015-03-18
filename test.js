(function(){

	// the minimum version of jQuery we want
	var v = "1.11.0";

	// check prior inclusion and version
	if (window.jQuery === undefined || window.jQuery.fn.jquery < v) {
		var done = false;
		var script = document.createElement("script");
		script.src = "http://ajax.googleapis.com/ajax/libs/jquery/" + v + "/jquery.min.js";
		script.onload = script.onreadystatechange = function(){
			if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
				done = true;
				initMyBookmarklet();
			}
		};
		document.getElementsByTagName("head")[0].appendChild(script);
	} else {
		initMyBookmarklet();
	}
	
	function initMyBookmarklet() {
		(window.myBookmarklet = function() {
			//$(".fullname").html("FullName");
			$(".username").html(function(i, user){
				var div = document.createElement('jalladiv');
				div.innerHTML = user;
				var username = div.innerText.replace("@", "");

				return "<a  href='http://localhost/api/result.html?username="+username+"&source=twitter'>"+user+" link</a>";
			});
			//$(".js-tweet-text").html("Text");
			//$(".content").html($(".username"));
			//$(".content").hide();
			//$(".js-tweet-text").hide();
		})();
	}
})();