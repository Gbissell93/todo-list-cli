const prompt = require("prompt-sync")();
let todoList = [];
let todoItem = "";
let itemCount = 0;

let loop = true; //loop condition
while(loop === true) {
    console.log(`\n ${todoList} \n`)
    console.log("\nWhat would you like to do? \n \n[1] Create a new item \n \n[2]  update item\n \n[3] delete an item\n")  // user option
    const option = prompt("[4] exit app \n") //moved prompt to last line of text to avoid loop repeat on key stroke

    if (option == 1) {
        itemCount++
        const newItem = prompt("\nenter a new item\n") //new item input
        todoList.push(`${itemCount}. [Incomplete] ${newItem}`)
    }


}