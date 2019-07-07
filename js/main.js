window.onload = () =>{
    "use strict";
    var csInterface = new CSInterface();
    themeManager.init();
    
    const getColor = document.getElementById("getColor");
    const colorObj = document.getElementById("colorObj");
    const reflect = document.getElementById("reflect");
    
    
    const extensionRoot = csInterface.getSystemPath(SystemPath.EXTENSION) +`/jsx/`;
    csInterface.evalScript(`$.evalFile("${extensionRoot}json2.js")`);//json2読み込み
    
    getColor.addEventListener("click",()=>{
        csInterface.evalScript(`$.evalFile("${extensionRoot}readColor.jsx")`,(o)=>{
            const obj = JSON.parse(o);
            console.log(obj);
            removeChildren(colorObj);
            Object.entries(obj).forEach(([key,value])=>{
                writeList(colorObj,value,key);
            });
        });
    });
    
    function removeChildren(parent){
        while(parent.firstChild){
            parent.removeChild(parent.firstChild);
        }
    }
    
    function writeList(parent,value,key){
        const li = document.createElement("li");
        li.textContent = value;
        parent.appendChild(li);
        li.dataset.value = value;
        li.dataset.key = key;
    }
    
    reflect.addEventListener("click",()=>{
        const lists = document.querySelectorAll("#colorObj li");
        console.log(lists);
        const colorData = {};
        lists.forEach(v=>{
            colorData[v.dataset.key] = v.dataset.value;
        });
        console.log(colorData);
        csInterface.evalScript(`setColor(${JSON.stringify(colorData)})`,()=>{
        });
    });
}
