function analyzeArray(arr){
    let obj = {};
    let sum = 0;
    let length = arr.length;
    let max = arr[0];
    let min = arr[0];
    for(let i =0;i<length;i++){
        if(arr[i]>max){
            max = arr[i];
        }
        //console.log(arr[i]);
        if(arr[i]<min){
            min = arr[i];
        }

        sum+=arr[i];
    }

    average = sum/length;
    return {average,min,max,length};
}


//console.log(analyzeArray([1,8,3,4,2,6]));

module.exports = analyzeArray;