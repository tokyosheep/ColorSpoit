import "@babel/polyfill";

window.onload = () =>{
    "use strict";
    var csInterface = new CSInterface();
    themeManager.init();
    
    const getColor = document.getElementById("getColor");
    const colorObj = document.getElementById("colorObj");
    const reflect = document.getElementById("reflect");
    const saveJSON = document.getElementById("saveJSON");
    const savedList = document.getElementById("savedList");
    const fs = require("fs");
    
    const filePath = csInterface.getSystemPath(SystemPath.EXTENSION) +`/js/`;
    const extensionRoot = csInterface.getSystemPath(SystemPath.EXTENSION) +`/jsx/`;
    csInterface.evalScript(`$.evalFile("${extensionRoot}json2.js")`);//json2読み込み
    const json_path = `${extensionRoot}colorData.json`;
    
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
        li.textContent = `${key}:${value}`;
        parent.appendChild(li);
        li.dataset.value = value;
        li.dataset.key = key;
    }
    
    class CreateColorObj{
        constructor(btn){
            this.btn = btn;
        }
        
        getColorProp(){
            if(!colorObj.firstChild){
                alert("カラー情報が登録されていません");
                return false;
            }
            const lists = document.querySelectorAll("#colorObj li");
            console.log(lists);
            const colorData = {};
            lists.forEach(v=>{
                colorData[v.dataset.key] = v.dataset.value;
            });
            return colorData;
        }
    }
    
    class AdoptColor extends CreateColorObj{
        constructor(btn){
            super(btn);
            this.btn.addEventListener("click",this);
        }
        
        handleEvent(){
            const colorData = this.getColorProp();
            Array.from(document.getElementsByClassName("adoptColor")).forEach(v=>{
                colorData[v.id] = v.checked;
            });
            if(!colorData){
                return;
            }
            if(!colorData.fillIn&&!colorData.stroke){
                alert("線か塗りのどちらかにチェックをつけてください");
                return false;
            }
            csInterface.evalScript(`setColor(${JSON.stringify(colorData)})`);
        }
    }
    
    const fillIn = new AdoptColor(reflect);
    
    class SaveJson extends CreateColorObj{
        constructor(btn){
            super(btn);
            this.btn.addEventListener("click",this);
        }
        
        async handleEvent(){
            const colorData = this.getColorProp();
            colorData.name = document.getElementById("colorName").value;
            if(!colorData){
                return;
            }
            const jsonList = await readJson();
            jsonList.push(colorData);
            await writeJson(JsonList);
        }
        
        async loadJson(){
            const jsonList = await readJson();
            removeChildren(savedList);
            jsonList.forEach(v=>{
                
                const topLi = document.createElement("li");
                savedList.appendChild(topLi);
                const radioBtn = makeRadio();
                savedList.appendChild(radioBtn);
                const ul = document.createElement("ul");
                topLi.appendChild(ul);
                
                Object.entries(v).forEach(([key,value])=>{
                    writeList(ul,value,key);
                });
            });
        }
    }
    
    function makeRadio(){
        const label = document.createElement("label");
        label.classList.add("topcoat-radio-button");
        const _input = document.createElement("input");
        _input.type = "radio";
        _input.name = "preset";
        label.appendChild(_input);
        const div = document.createElement("div");
        div.classList.add("topcoat-radio-button__checkmark");
        label.appendChild(div);
        return label;
    }
    
    function writeJson(json){
        return new Promise((resolve,reject)=>{
            fs.writeFile(json_path,JSON.stringify(json,null,4),err=>{
                if(err){
                    alert(err);
                    reject(false);
                }else{
                    csInterface.evalScript(`alert("your preset is saved")`);
                }
                resolve(true);
            })
        })
    }
    
    function readJson(){
        return new Promise((resolve,reject)=>{
            fs.readFile(json_path,"utf-8",(err,data)=>{
                if(err){
                    alert(err);
                    reject(false);
                }
                const objects = JSON.parse(data);
                resolve(objects);
            })
        });
    }
    
    const pickJson = new SaveJson(saveJSON);
    pickJson.loadJson();
}
