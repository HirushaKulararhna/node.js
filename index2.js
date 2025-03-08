//  video 3 codes

// create path modules
import { log } from 'node:console';
import { dirname,join } from 'node:path';
import {fileURLToPath} from 'node:url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

log (__dirname);
log (__filename);

///                 read file             //////////////////////////////////////////////////////

import  { readFile } from 'node:fs';

readFile(join(__dirname,'video3.txt'),{encoding:'utf-8'},(err,data)=>{
    if (!err){
        log(data);
    }
})

/////////////////////////////////////////////////////////////////////////////////////////////////


///                   write file             //////////////////////////////////////////////////////

import  { writeFile } from 'node:fs';

writeFile(join(__dirname,'video3_wirtefile.txt'),'This is a new file created by nodejs',(err)=>{
                        //api hadana file eka    //file eka athule liyann ona ewa
    if(err){
        log(err);
    }
});

/////////////////////////////////////////////////////////////////////////////////////////////////



///   append file (add new data to the file)   //////////////////////////////////////////////////////
import{appendFile} from 'node:fs';

appendFile(join(__dirname,'video3.txt'),`\nnew data`,(err)=>{
    if(!err){
        log('new data added');
    }
})

/////////////////////////////////////////////////////////////////////////////////////////////////



///        js file ekakuth hadamu                //////////////////////////////////////////////////////

appendFile(join(__dirname,'newjavascriptfile.js'),
`
const a = "Hirusha";
const b = [1,2,3];

console.log(a);
console.log(b);
`
,(err)=>{
    if(!err){
        log('new js file has been created');
    }
})