document.getElementById("add").onclick = function() {
	
    var input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("name", "cast");
    input.setAttribute("id", "cast");
    input.setAttribute("class", "w3-input w3-border");
    document.getElementById("addCast").appendChild(input);
    return false;

};