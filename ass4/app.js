const fs=require("fs");
//sync method creation
// fs.writeFileSync("./test.txt","I am Saurabh");


// //async method
// fs.writeFile("./test.txt","hey there",(err)=>{

// })

//readFile Sync
// const result=fs.readFileSync("./contacts.txt","utf-8");
// console.log(result);


//async
fs.readFile("./contacts.txt","utf-8",(err,result)=>{
    if(err){
        console.log("error",err)
    }else{
        console.log(result)
    }
})