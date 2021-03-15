var n = parseInt(prompt("Enter n : "));
var m = parseInt(prompt("Enter m: "));

// //1.	Declare a 2 dimension array with n rows and m column.

var integerArray = new Array(n);
for(var i = 0; i < integerArray.length; i++)
{
    integerArray[i] = new Array(m);
}

// 2.	Write a function to permit user enter the values for elements of array.

var enterArray = function(nameArray){
    for(var i = 0; i < nameArray.length; i++){
        for(var j = 0; j < nameArray[i].length; j++){
            nameArray[i][j] = prompt("Enter value array: ");
        }
    }
}

// 3.	Write another function to print all the elements of array to screen.

var printArray = function(nameArray){
    var result = "The elements of Array is: <br>";
    for(var i = 0; i < nameArray.length; i++)
    { 
        for(var j = 0; j < nameArray[i].length; j++)
        {
            result += (nameArray[i][j] + "  ");
        }
        result += "<br>";
    }
    document.write(result);
}

// 4.	Write a function to calculate the total of elements of array.

var sumArray = function(nameArray){
    var sum = 0;
    for(var i = 0; i < nameArray.length; i++)
    { 
        for(var j = 0; j < nameArray[i].length; j++)
        {
            sum += parseInt(nameArray[i][j]);
        }
    }
    document.write("<br> Total of elements of Array = " +sum);
}

// 5.	Write a function to enter a number and then check it is exist in array or not. 

var searchMember = function(arrayName){
    var member = (prompt("Enter member : "));
    var flat = arrayName.reduce(function(result,array){
        return result.concat(array);
    });
    console.log(flat);
    console.log(arrayName);
    var isMember = flat.includes(member);
    if(isMember == true){
        alert("YES");
    }
    else{
        alert("NO");
    }
}

// 6.	Write a method to sort the elements of this array by ascending.

var sortArray = function(array1){
    for(var i = 0; i < array1.length; i++){
            array1[i].sort(function(a,b){
                return a - b;
        });
    }
    document.write("<br>After sort ")
    printArray(array1);
}

// 7.	Setup a menu for this program.

var programArray = function(arr){
    enterArray(arr);
    var index = parseInt(prompt("Enter number :  1–Print Array  2-Search a member  3-Sum elements of Array  4-Sort array by descending"));
    switch(index){
        case 1:
            printArray(arr);
            break;
        case 2:
            searchMember(arr);
            break;
        case 3:
            sumArray(arr);
            break; 
        case 4:
            sortArray(arr);
            break;
    }
}
window.onload = programArray(integerArray);