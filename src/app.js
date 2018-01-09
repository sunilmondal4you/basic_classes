let exportmodule1 = require("./module1");
let exportmodule2 = require("./module2");

let main = function(){
    try{
        console.log("Hello, try to import");

        let userName = exportmodule1.User;
        console.log(userName);

        let output = exportmodule1.methode1();
        console.log(output);

        let data = {
            x : 10,
            y : 20
        }

        let output = exportmodule2.methode1(data);
        console.log("summation is "+output);

    }catch(err){
        console.log(err)
    }
}

main();
