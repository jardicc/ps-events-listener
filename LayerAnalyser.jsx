// Include the descriptor-info module
#include "descriptor-info.jsx"

// Include the JSON helper
#include "json.jsx"

//$.level = 1;
//debugger;



// Create a new Descriptor instance

// ActionDescriptor example  
/*  */
var event = typeIDToStringID(arguments[1]);
if(event=="select")
{

    var test = "";
    var descFlags = {
        reference : true,
        extended : false
    };

    var descriptorInfo = new DescriptorInfo();

    var ref = new ActionReference();  
    ref.putEnumerated( charIDToTypeID("Lyr "), charIDToTypeID("Ordn"), charIDToTypeID("Trgt") );  
    var desc = executeActionGet(ref); 

    var descObject = descriptorInfo.getProperties( desc, descFlags);
    var descObjectNextArgument;


    test = test + JSON.stringify(descObject, null, 4);
    test = test + "\n//////////////";


    saveTxt (test);

    function saveTxt(txt)
    {
        var saveFile = File('~/desktop/LayerProperties.json');
        
        saveFile.open('e');
        //var str = "";
        /*while(!saveFile.eof){ //this file reading everytime may affect performance if .log is big
            str += '\n' + saveFile.readln();
        }    
        saveFile.close();
    */
        if(saveFile.exists)
            saveFile.remove();
        
        saveFile.encoding = "UTF8";
        saveFile.open("w", "TEXT", "????");
        saveFile.writeln('\n'+txt);
        saveFile.close();
    }
}