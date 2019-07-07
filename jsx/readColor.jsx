(function(){
    var select = app.activeDocument.selection[0];
    var color = {};
    for(var key in select.fillColor){
        $.writeln(key+":"+select.fillColor[key]);
        color[key] = select.fillColor[key];
    }
    $.writeln(color.typename);
    return JSON.stringify(color);
})();