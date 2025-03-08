import math from './myFunction.js';


const yname  = "Hirusha"
console.log(yname);


//const  os = require("os"); // OS
//const path = require("path");

import os from 'os';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);




console.log(os.platform()); // OS Platform
console.log(os.version());    //

console.log(__dirname); // Directory of the file
console.log(__filename); // Full file path

console.log(path.basename(__filename)); // File name
console.log(path.extname(__filename)); // File extension  
console.log(path.parse(__filename));  // File name and extension



///   for read the text file    ///////////////////////////////////////////////////////////
import { dirname , join } from 'node:path'; // path  // we use join for path ek hariyata hadala denna
import { readFile } from 'node:fs';  // fs----> file system module

readFile(join(__dirname, "myname.txt"), "utf-8", (err, data) => { // read the file
                                    //optional  //callbackFunction
    if (err) {
        console.log(err);
    } else {
        console.log(data); // we can use toString()to optional utf-8
        // or
        console.log(data.toString());
    }
});
//////////////////////////////////////////////////////////////////////////////////////////////






