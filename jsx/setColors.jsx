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
    var colorObject = isColorSpace(obj,colorType);
    if(!colorObject){
        alert("the color type invalid");
        return false;
    }
    var selects = app.activeDocument.selection;
    if(selects[0].typename == "GroupItem"){
        alert("グループされてないアイテムを選択してください");
        return false;
    }   
    //for(var i=0;i<selects.length;i++){
        if(obj.fillIn){
            selects[0].fillColor = colorObject;
        }
        if(obj.stroke){
            selects[0].strokeColor = colorObject;
        }
    //}
    alert("check the fill");
    return true;


    function isColorSpace(obj,space){
        if(obj.typename == "CMYKColor" && space == "DocumentColorSpace.CMYK"){
            return setCMYKColor(obj);
        }
        if(obj.typename == "RGBColor" && space == "DocumentColorSpace.RGB"){
            return setRGBColor(obj);
        }
        return false;
        
        function setCMYKColor(obj){
            var CMYK = new CMYKColor();
            CMYK.cyan = obj.cyan;
            CMYK.magenta = obj.magenta;
            CMYK.yellow = obj.yellow;
            CMYK.black = obj.black;
            return CMYK;
        }
        
        function setRGBColor(obj){
            var RGB = new RGBColor();
            RGB.red = obj.red;
            RGB.green = obj.green;
            RGB.blue = obj.blue;
            return RGB;
        }
    }

    /*    
    function fillInColor(obj,select){

        for(var key in obj){
            if(key === "typename"){
                continue;
            }
            select.fillColor[key] = obj[key];
        }
    }
    */
    
}
