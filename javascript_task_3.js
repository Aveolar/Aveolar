 const myArray = [];

        function yuGiHo(num) {

            for (let i = 1; i <= num; i++) {

                let r = "";

                if (i % 2 === 0 || i % 3 === 0 || i % 5 === 0) {
                    if (i % 2 === 0) {
                        if (r !== "") {
                            r += "-yu";
                        }else {
                            r = "yu";
                        }
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

            console.log(myArray);
            
           
        }
        yuGiHo(100);
