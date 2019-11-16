document.getElementById("addG").onclick = function() {
    
    var input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("name", "genres");
    input.setAttribute("id", "genres");
    input.setAttribute("class", "w3-input w3-border");
    document.getElementById("addGen").appendChild(input);
    return false;

};