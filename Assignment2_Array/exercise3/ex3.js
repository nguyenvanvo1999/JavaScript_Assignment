var listName = [];
while(true){
   isName = prompt("Enter name: ");
   if(isName == ""){
       break;
   }
   else{
    listName[listName.length] = isName;
   }
}
listName.sort();
document.write(listName.join(", "));