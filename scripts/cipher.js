function cipher(str,shift){

    //master string
    let alphas = "abcdefghijklmnopqrstuvwxyz";
    let arr = alphas.split("");
    let obj1 = {};
    for(let i = 0;i<26;i++){
        obj1[arr[i]] = i;
    }

    let obj2 = {};
    for(let i = 0;i<26;i++){
        obj2[i] = arr[i];
    }
    //created two objects to reference letters by their numbers and vice versa

    let strr = str.split("");
    let res = [];
    for(let j = 0;j<strr.length;j++){
        if(alphas.includes(strr[j].toLowerCase())){//if it is a letter


            let temp = strr[j].toLowerCase();
            let x = obj1[temp];
            let n = (x+shift)%26;//formula for caesars cipher
            let nlet = obj2[n];
            if(strr[j]===strr[j].toUpperCase()){//if strr uppercase, res also uppercase
                res.push(nlet.toUpperCase());
            }

            else{
            res.push(nlet);
            }
        }

        else{
            res.push(strr[j]);
        }
    }


    

   return res.join("");


}

//console.log(cipher("abcd eg",1));


module.exports = cipher;