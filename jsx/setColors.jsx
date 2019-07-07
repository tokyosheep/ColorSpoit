/*
obj = {
    black:0,
    cyan:50,
    magenta:70,
    typename:"CMYKColor",
    yellow:60

}
setColor(obj);
*/
function setColor(obj){
    var colorType = app.activeDocument.documentColorSpace;
    $.writeln(colorType);
    if(!isColorSpace(obj,colorType)){
        alert("the color type invalid");
        return false;
    }
    var selects = app.activeDocument.selection;
    for(var i=0;i<selects.length;i++){
        fillInColor(obj,selects[i]);
    }
    alert("filled out");
    return true;


    function isColorSpace(objColor,space){
        if(objColor.typename == "CMYKColor" && space == "DocumentColorSpace.CMYK"){
            return true;
        }
        if(objColor.typename == "RGBColor" && space == "DocumentColorSpace.RGB"){
            return true;
        }
        return false;
    }

    function fillInColor(obj,select){

        for(var key in obj){
            if(key === "typename"){
                continue;
            }
            select.fillColor[key] = obj[key];
        }
    }
    
}
