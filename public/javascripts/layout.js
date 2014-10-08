void function() {
	var isExpanded = true;
	document.getElementById("split-toggle").onclick = function(ev) {
	    var splitCont = document.getElementById("split-container");
	    if(isExpanded) {
	        splitCont.className = "split-collapsed";
	        this.firstChild.data = "expand";
	    } else {
	        splitCont.className = "";
	        this.firstChild.data = "collapse";
	    }
	    isExpanded = !isExpanded;
	}
}();