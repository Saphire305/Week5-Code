/*
Create lists: (ie. shopping list, wish list, etc)
    add items to list
    delete items from list
Delete lists
View lists

^^^^^^^^^^^^
Initial Thinking
*/



class Menu {
    constructor(){
        this.lists = [];
        // Constructor gives the class its properties. In this case an empty array that will have lists in it later.
    }

    createList(){
        let list = new List(prompt(`What would you like to name the list?`));
        this.lists.push(list);
        /*
        This method asks the user what they would like to name their new list.
        This then creates the list with the given name and pushes the object to the lists array.
        */
    }

    deleteList(){
        if(this.lists.length === 0){
            alert(`You don't have any lists to delete`);
        }

        let selection = prompt(`Please choose the index of the list you wish to delete: \n${this.viewLists()}`);

        if(selection > -1 && selection < this.lists.length){
            this.lists.splice(selection, 1);
        }
        /*
        This method checks if there are any lists to delete, if not, it will inform the user that there are no lists to delete
        before returning to the main menu. If there are lists, it asks the user which list to delete and deletes the selected list.
        */
    }

    viewLists(){
        let result = '';
        if(this.lists.length === 0){
            alert(`You have no lists`)
        }
        for(let i = 0; i < this.lists.length; i++){
            result += `${i}) ${this.lists[i].name} \n`;
        }
        return result;
        /*
        This method simply shows all current lists.
        */
    }

    editList(){
        if(this.lists.length === 0){
            alert('You must create a list first');
        }

        let selection = prompt(`Please choose the index of the list you wish to edit: \n${this.viewLists()}`);

        if(selection > -1 && selection < this.lists.length){
            this.lists[selection].edit();
        }
        /*
        This method asks the user wich list they would like to edit before initializing the edit() method in the List class.
        */
    }

    showMenu(){
        let selection = prompt(`
                0) Exit
                1) Create a List
                2) Delete a List
                3) Edit a List
                4) View all Lists
            `);
        return selection;
        /**
         * This method shows the user the main menu and asks them to choose which option they would like.
         */
    }

    start(){
        let selection = this.showMenu();
        while(selection != 0){
            switch(selection){
                case '1':
                    this.createList();
                    break;
                case '2':
                    this.deleteList();
                    break;
                case '3':
                    this.editList();
                    break;
                case '4':
                    alert(this.viewLists());
                    break;
                default:
                    selection = 0;
            }
        selection = this.showMenu();
        }
        /**
         * This method starts the app. This will show the user the main menu, ask them what they would like to do
         * and perform the appropriate method for what the user would like to do.
         */
    }
}

class List {
    constructor(name){
        this.items = [];
        this.name = name;
        /**
         * This constructor gives each List created a name and has an empty array that will later be filled
         * with items the user wishes to put on their list.
         */
    }

    edit(){
        let selection = prompt(`
                0) Exit
                1) Add Item
                2) Delete Item
                3) View Items
            `);
        while(selection != 0){
            switch(selection){
                case '1':
                    this.addItem();
                    break;
                case '2':
                    this.deleteItem();
                    break;
                case '3':
                    alert(this.viewItems());
                    break;
                default:
                    selection = 0;
            }
        selection = prompt(`
            0) Exit
            1) Add Item
            2) Delete Item
            3) View Items
        `);
        }
        /**
         * This method allows the user to modify their list by adding an item, deleting an item, or just viewing what items are on their list.
         */
    }

    deleteItem(){
        if(this.items.length === 0){
            alert(`You don't have any items to delete`);
        }

        let selection = prompt(`Please choose the index of the item you wish to delete: \n${this.viewItems()}`);

        if(selection > -1 && selection < this.items.length){
            this.items.splice(selection, 1);
        }
        /**
         * This method allows the user to remove an item from their list.
         */
    }

    addItem(){
        let item = prompt(`What would you like to add?`);
        this.items.push(item);
        /**
         * This method allows the user to add an item to their list.
         */
    }

    viewItems(){
        let result = '';
        for(let i = 0; i < this.items.length; i++){
            result += `${i}) ${this.items[i]} \n`;
        }
        return result;
    }
    /**
     * This method allows the user to view the items on their list.
     */
}

let menu = new Menu;
menu.start(); //This starts the app.
