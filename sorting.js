//program to arrange elements in an array in descending order
var input = prompt();
var nums = input.split(',').map(Number);
for(var i=0;i<nums.length-1;i++){
    for(var j=i+1;j<nums.length;j++){
        if(nums[i]<nums[j]){
            var temp=nums[i];
            nums[i]=nums[j];
            nums[j]=temp;
        }
    }
}

console.log(nums);
