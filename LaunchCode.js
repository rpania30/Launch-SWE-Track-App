//Forge Launch Skills Challenge

//Group 1 Programming Questions:

//"Write a function that will tell me if a phrase, word, or input (STRING) is a palindrome.":
/**
 * Checks if string input is a palindrome
 * @param {string} input input string
 * @returns boolean representation of palindrome
 */
function isPal(input) {
    //Palindromes are not case-sensitive, so lower-case can be standardized for comparisons
    input = input.toLowerCase();
    
    //Creates an array with each character from input string, starting from last character
    const revArr = [];
    let inpCtr = 0;
    //First character of array will be final character of input string -- repeat until \
    //final character of array is first character of input string 
    for (let revCtr = input.length - 1; revCtr >= 0; --revCtr) {
        revArr[inpCtr] = input[revCtr];
        inpCtr++; 
    }
    
    //Compares characters of input string to characters of array
    for (inpCtr = 0; inpCtr < input.length - 1; inpCtr++) {
        //If characters at same index do not match, input is not a palindrome
        if (input[inpCtr] !== revArr[inpCtr]) {
            console.log("The user input is not a palindrome!");
            return false;
        }
    }
    
    //If loop completes, input is a palindrome and each character in input string and \
    //array match at given indexes
    console.log("The user input is a palindrome!");
    return true;
}

//"Write a function that will take an array of strings or numbers and randomly reorder them.":
/**
 * Randomly reorders elements within an array
 * @param {Object[]} input array of strings and/or numbers
 * @returns randomized array of input
 */
function randOrd(input) {
    //Initializes counters, and storage variables
    let pceHold, temp, randCtr = input.length;

    //Runs until all elements of input array have been looped
    while (randCtr > 0) {
        //Randomized index calculated by multiplying remaining number of elements in array \
        //by a randomized number from 0-1. Value then is rounded down to an integer value 
        pceHold = Math.floor(Math.random() * randCtr);
        //Decrements the remaining length of the input array
        --randCtr;
        
        //Swaps latest element with the randomized index's element, using a temporary variable
        temp = input[randCtr];
        input[randCtr] = input[pceHold];
        input[pceHold] = temp;
    }
    //Returns randomized array
    return input;
}


//Group 2 Programming Questions:

//Question A:

//Creates an array of to-do-list items
let items = [];

/**
 * Adds an item to to-do-list
 * @param {string} title represents title of an item
 * @param {string} description represents description of an item
 * @param {string} dateCreated represents date created of an item
 * @param {string} dateDue represents date due of an item
 * @param {string} status represents status of an item
 */
function addItem(title, description, dateCreated, dateDue, status) {
    //Stores an object to a variable, using parameter inputs
    let person = {
        title: title,
        description: description,
        dateCreated: dateCreated,
        dateDue: dateDue,
        status: status
    };
    //Adds object to list
    items[items.length] = person;
}

/**
 * Deletes an item from to-do-list
 * @param {string} title represents title of an item
 * @param {string} description represents description of an item
 * @param {string} dateCreated represents date created of an item
 * @param {string} dateDue represents date due of an item
 * @param {string} status represents status of an item
 */
function delItem(title, description, dateCreated, dateDue, status) {
    //Edge Case: If no items in to-do-list
    if (items.length == 0) {
        console.log("There are no items in the list.");
    }
    else {
        //Looks for item in to-do-list
        for (let inc = 0; inc < items.length; inc++) {
            let temp = items[inc];
            //If item is found, it is removed from to-do-list
            if (temp.title === title && temp.description === description && temp.dateCreated 
                === dateCreated && temp.dateDue === dateDue && temp.status === status) {
                items.splice(inc, 1);
            }
        }
    }
}

/**
 * Changes location of item in to-do-list
 * @param {number} inIndex current index of item
 * @param {number} finIndex desired index of item
 */
function organize(inIndex, finIndex) {
    const pceHold = items[inIndex];
    //Removes item at initial index and moves it to desired index
    items.splice(inIndex, 1);
    items.splice(finIndex, 0, pceHold);
}

/**
 * Edits title property of item
 * @param {Object} item to-do-list item
 * @param {string} title desired title of item
 */
function editTitle(item, title = item.title) {
    //Searches for item in to-do-list
    for (let i = 0; i < items.length; i++) {
        //If item is found, title is changed
        if (items[i] === item) {
            items[i].title = title;
        }
    }
}

/**
 * Edits description property of item
 * @param {Object} item to-do-list item
 * @param {string} description desired description of item
 */
function editDesc(item, description = item.description) {
    //Searches for item in to-do-list
    for (let i = 0; i < items.length; i++) {
        //If item is found, description is changed
        if (items[i] === item) {
            items[i].description = description;
        }
    }
}

/**
 * Edits dateCreated property of item
 * @param {Object} item to-do-list item
 * @param {string} dateCreated desired dateCreated of item
 */
function editCreDate(item, dateCreated = item.dateCreated) {
    //Searches for item in to-do-list
    for (let i = 0; i < items.length; i++) {
        //If item is found, dateCreated is changed
        if (items[i] === item) {
            items[i].dateCreated = dateCreated;
        }
    }
}

/**
 * Edits dateDue property of item
 * @param {Object} item to-do-list item
 * @param {string} dateDue desired dateDue of item
 */
function editDueDate(item, dateDue = item.dateDue) {
    //Searches for item in to-do-list
    for (let i = 0; i < items.length; i++) {
        //If item is found, dateDue is changed
        if (items[i] === item) {
            items[i].dateDue = dateDue;
        }
    }
}

/**
 * Edits status property of item
 * @param {Object} item to-do-list item
 * @param {string} status desired status of item
 */
function editStatus(item, status = item.status) {
    //Searches for item in to-do-list
    for (let i = 0; i < items.length; i++) {
        //If item is found, status is changed
        if (items[i] === item) {
            items[i].status = status;
        }
    }
}