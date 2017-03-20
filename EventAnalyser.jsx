// Include the descriptor-info module
#include "descriptor-info.jsx"

// Include the JSON helper
#include "json.jsx"

//$.level = 1;
//debugger;


// ActionDescriptor example  

var descFlags = {
    reference : true,
	extended : false
};

// Create a new Descriptor instance
var descriptorInfo = new DescriptorInfo();


var desc = arguments[0];
var descObject = descriptorInfo.getProperties( desc, descFlags);
if(arguments[1]){
    var value = arguments[1];
    var stringID = typeIDToStringID(value);
    var charID = typeIDToCharID(value);
    
    if(stringID)
    {
        value = stringID;
    }
    else if(charID)
    {
        value = charID;
    }
    
    var newObject = {};
    newObject[value] = descObject
    descObject = newObject;
}

saveTxt ( JSON.stringify(descObject, null, 4) + "\n//////////////" );

function saveTxt(txt)
{
    var saveFile = File('~/desktop/ScriptListenerJSON.json');
    

    saveFile.encoding = "UTF8";
    saveFile.open("a", "TEXT", "????");
    saveFile.writeln('\n'+txt);
    saveFile.close();
}