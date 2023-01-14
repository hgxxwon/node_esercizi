import * as fs from "node:fs";

fs.writeFile('./greeting.txt', 'Hello Mirko!', 'utf8', (error, data)=> {
    if(error){
        console.log(error);
    }


    fs.writeFile('./goodbye.txt', 'Goodbye Mirko', 'utf8', (error, data)=>{
        if(error){
            console.log(error);
        }
     });
});