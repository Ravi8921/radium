/*write an api which gives the missing number in an array of integers starting from 1….e.g 
[1,2,3,5,6,7] : 4 is missing*/

router.post("/missingNumber",function(req,res){
    const arr=req.body.entries
    const first=arr[0]
    const last =arr[arr.length-1]
    let sum=0
    let arrsum=0
    for(let i=first;i<=last;i++){
        sum=sum+i;
    }
    for(let j=0;j<arr.length;j++){
        arrSum=arrSum+arr[j];
    }
    let numberMissing=sum-arrSum;
    res.send("missing Number is:"+numberMissing)
});