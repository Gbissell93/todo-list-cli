const prompt = require("prompt-sync")();
let todoList = [];
let todoItem = "";
let itemCount = 0;





// loop init ======================================================================
let loop = true; //loop condition
while(loop === true) {
    console.log("===============================================") //line for input separation
    if (itemCount === 0) {
        console.log("\n \nyou have no todo items.")
    }
    
    else {
        console.log(`you have ${itemCount} item(s)`)
    }

    console.log(`\n ${todoList} \n`)
    console.log("What would you like to do? \n \n[1] create a new item \n \n[2] update item\n")  // user option
    const option = prompt("[Enter] exit app ") //moved prompt to last line of text to avoid loop repeat on key stroke
    console.log("") //empty string for space


// option 1 add item ==============================================================
    if (option == 1) {
        itemCount++
        const newItem = prompt("enter new item: ") //new item input
        console.log("") //empty string for space
        todoList.push(`\n ${todoList.length + 1}. [Incomplete] ${newItem}`)
        }


// option 2 update=================================================================
        else if (option == 2) {
            const update = prompt("please select an item to update: "); //item update prompt
            const updateSelect = todoList[Number(update - 1)] //item selection
            let choice = update - 1;
            console.log(`\nyou've selected ${updateSelect}`)
            console.log("\n [1] to complete ")
            const updateOpt = prompt(" [2] to remove ")
            console.log(updateSelect)
            
            // update options =====================================================
            //complete
            if (updateOpt === '1') { 
                let completed = todoList.splice(choice, 1).toString().replace(`[Incomplete]`, `[Complete]`);

                todoList.splice(choice, 0, completed)
            }
            //remove
            if (updateOpt === '2') { 
                let deleted = todoList.splice(choice, 1)
            itemCount--
        }
    

    }

    if (option == 0) { // loop exit
        loop = false
    }

   
    
}