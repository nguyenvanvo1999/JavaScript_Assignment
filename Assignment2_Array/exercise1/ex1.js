//1.    Create an integer array with 10 elements and the fill the data for this array.

var integerArray = [1,2,4,5,40,2,5,6,8,10];

//2.    Write a function to print all member of array to screen

var printArray = function(arrayName){
    document.write(arrayName.join(","));
}

//3.   Write a function to permit user enter a value and find this is exits in array or not.

var searchMember = function(arrayName){
    var member = parseInt(prompt("Enter member: "));
    var isMember = arrayName.includes(member);
    if(isMember == true){
        alert("YES");
    }
    else{
        alert("NO");
    }
}

//4.    Write a function to find the maximum value in this array

var maximumArray = function (arrayName) {
    var max = -Infinity;
   for (var i in arrayName) {
         if(arrayName[i] > max)
         {
            max = arrayName[i];
         }
   }
   document.write("<br>Maximum of array is : "+ max);
    
}
//5.    Write a function to calculate sum of all elements of array.

//Cách 1:
// var sumArray = function (arrayName) {
//     var sum = 0;
//     for (var i in arrayName) {
//               sum += arrayName[i];
//     }
//     document.write("<br>Sum of Arrays = "+ sum);
// }

//Cách 2:
var sumArray = function (arrayName){
    var sum = integerArray.reduce(function(a,b){
        return a+b;
    });
    document.write(sum);
}

//6.    Write a function to sort all elements of array by descending

var sortArray = function(arrayName){
    arrayName.sort(function(a,b){
        return b-a;
    });
    printArray(arrayName);
}

//7.    Setup a menu to permit user enter a number to select to run a function.
        //Example: 1 – Print Array, 2- Search a member, 3- Find Maximum Number

var programArray = function(arr){
    var index = parseInt(prompt("Enter number :  1–Print Array   2-Search a member   3-Find Maximum Number   4-Sort array by descending  5-Sum array"));
    switch(index){
        case 1:
            printArray(arr);
            break;
        case 2:
            searchMember(arr);
            break;
        case 3:
            maximumArray(arr);
            break;
        case 4:
            sortArray(arr);
            break; 
        case 5:
            sumArray(arr);
            break;   
    }
}
window.onload = programArray(integerArray);
