    function convertFahrToCelsius (temp) {

        if (typeof temp === "number" || typeof temp === "string") {
        
        let C = ((temp - 32) * 5) / 9; 
        
        console.log(C.toFixed(4));
        }
        
        if (typeof temp == "boolean") {
        
        console.log(`${temp} is not a valid number but a/an ${typeof temp} type.`); 
        
        return `${temp} is not a valid number but a/an ${typeof temp} type.`;
        }
        
        if (Array.isArray (temp)) {
            console.log( `[${temp} is not a valid number but a/an array type.`);
        
        return `[${temp}] is not a valid number but a/an array type.`; 
        }else if (typeof temp === "object") {
        
        console.log(
        
        `${JSON.stringify(
        
        temp

        )} is not a valid number but a/an ${typeof temp} type.`

        );

        let anyNumber= Number(temp); if (Number.isNaN(anyNumber)) {
        
            console.log(`${temp} is not a valid nulber but a/an ${typeof temp} type.`); 
            
            return `${temp} is not a valid number but a/an ${typeof temp} type.`;
            
            convertFahrToCelsius("bar");

        }
    }
        
        
        
        function checkYuGiOh(n) {
        
        if (isNaN(n)= true)
        
        console.log("invalid parameter: $(n)");
        
        return;
        
        const arr = []; 
        
        for (let i = 1; i <= n; i++) { 
            if (i % 2 === 0 && i % 5 === 0){
        
        arr.push("Yu-Gi-Oh");
        
        } else if (i & 2 === 0 && i % 3 === 0){
        
        arr.push("Yu-Gi"); 

    } else if ( i % 3 === 0 && i % 5 === 0) {
        
        arr.push("Gi-Oh");
        
        } else if (i % 2 === 0 && i % 5 == 0){
        
        arr.push("Yu-Oh");
        
        } else if (i % 2 === 0){

        arr.push("Yu");
        
        } else if (i % 3 === 0) {
            
            arr.push("Gi");
        
        
        } else if ( 1 % 5 === 0){

            arr.push("Oh");

        } else {

            arr.push(1);
        }
        
        console.log(arr);

        }
        }
        
    checkYugioh("5");

    }