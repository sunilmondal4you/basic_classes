let exportmodule1 = require("./module1");

let main = function(){
    try{
        console.log("Hello, try to import");

        let userName = exportmodule1.User;
        console.log(userName);

        let output = exportmodule1.methode1();
        console.log(output);
    }catch(err){
        console.log(err)
    }
}

main();
