# Photoshop Event Listener
Read very detailed events from Photoshop on the fly in human friendly format

1. place all file inside one folder on your disk
2. open "File > Scripts > Script Event Manager" in Photoshop
3. Enable events
4. Select Photoshop Event everything
5. Select "Browse" in combobox for script and pick EventAnalyser.jsx
6. Click add
7. Click done

Now you should have ScriptListenerJSON.json file on your desktop about everthing what can Script Listener see plus something more.

You also can modify event analyser and trigger function if event fulfills some conditions.
E.g.
```
var isComicSans;
try{
  isComicSans = descObject.make.using.textStyleRange[0].textStyleRange.textStyle.fontName == "Comic Sans MS";
}
catch(ignore){
  isComicSans = false
}
if(isComicSans){
  var result = confirm("Comic Sans? Rly?", false);  
  if (result == false) {  
   alert(":-)");
  }else{
      alert(":-(");
  }
}
```
