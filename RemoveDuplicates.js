let arr = [1,2,1,2,3,4,4,5,2,1];
console.log("Before Removing Duplicates: "+arr)

console.log("After Removing Duplicates: "+removeDuplicates(arr));
function removeDuplicates(arr){
    let newValue = new Set(arr);
    return [...newValue];
}