(function(){
    var select = app.activeDocument.selection[0];
    var ColorObject = getColorObj(select);

    $.writeln(ColorObject);
    return JSON.stringify(ColorObject);

    function getColorObj(select){
        $.writeln(select.fillColor.typename);
        if(select.fillColor.typename === "SpotColor"){
            return readSpotColor(select.fillColor);
        }
        if(select.fillColor.typename === "RGBColor"||select.fillColor.typename === "CMYKColor"){
            return getOrdinalColor(select);
        }
        alert("無効なカラーです");
        return false;
    }



    function getOrdinalColor(select){
        var color = {};
        for(var key in select.fillColor){
            $.writeln(key+":"+select.fillColor[key]);
            color[key] = select.fillColor[key];
        }
        return color;
    }
    
    function readSpotColor(select){
    var obj = {};    
        for(var k in select.spot.color){
            obj[k] = select.spot.color[k];
            $.writeln(k+":"+select.spot.color[k]);
        }
        return obj;
    }

    function debugObject(obj){
        for(var k in obj){
            $.writeln("debug:"+k+":"+obj[k]);
        }
    }
})();