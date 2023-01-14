import * as fs from "node:fs";

fs.writeFile('./greeting.txt', 'Hello Mirko!', 'utf8', (error)=> {
    if(error){
        console.log(error);
    }
    console.log('Done.');
})