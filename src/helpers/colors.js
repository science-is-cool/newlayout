module.exports = function(color) {

    if (color == "primary") {
        return "#005daa";
    }
    else if (color == "secondary") {
        return "#555759";
    }
    else if (color == "safety") {
        return "#ff7d0a";
    }
    else if (color == "test") {
        return "hotpink";
    }
    else {
        return color;
    }

}