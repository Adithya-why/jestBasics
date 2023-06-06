const capitalize = function(str){
    if(str){
        let ar = str.split("");
        ar[0] = ar[0].toUpperCase();
        return ar.join("");
    }

    else{
        return "Empty string";
    }
}


module.exports = capitalize;