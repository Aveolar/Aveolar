        function yuGiHo(num) {

             const myArray = [];

            for (let i = 1; i <= num; i++) {
                
                let r = "";

                if (i % 2 === 0 || i % 3 === 0 || i % 5 === 0) {
                    if (i % 2 === 0) {
                            r = "yu";
                    }
                    if (i % 3 === 0) {
                        if (r !== "") {
                            r += "-gi";
                        }else {
                            r = "gi";
                        }
                    }
                    if (i % 5 === 0) {
                        if (r !== "") {
                            r += "-oh";
                        }else {
                            r = "oh";
                        }
                    }
                }else {
                    r = i;
                }

                myArray.push(r); 
            }
                
            return myArray;
           
        }
        
       console.log(yuGiHo(100));
       console.log(yuGiHo(50));
       
