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
			var url = window.location.hostname;
			var host = url.split('.')[0];
			alert("Data: " + host);
			if (host === 'twitter'){
				$(".stream-item-header").html(function(i, d) {
				var username = this.getElementsByClassName("username")[0].innerText.replace("@", "");
				return d+"<a  href='http://localhost/result2.html?username="+username+"&source=twitter'> Click me!</a>";
			});
			}
			else{
				alert("Data: " + "Not twitter");
			}

		})();
	}
})();
