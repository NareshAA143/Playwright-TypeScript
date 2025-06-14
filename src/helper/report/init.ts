//this file is intednded to ensure the existence of test-results folder
//test-results from previous runs need to be deleted and new run will be created

const fs = require('fs-extra');//imports fs-extra module

try{
    fs.ensureDir("test-results");//this method ensures that the directory exists, if not it creates it
    fs.emptyDir("test-results");//this method empties files in it, but folder remains like that
}
catch(error){
    console.log("Folder not created! "+error)

}
 