var inquirer = require("inquirer");
var library = require("./cardLibrary.json");
var fs = require("fs");

var count = 0;

//initially give option to the user to Create new flashcards or use exiting ones.

inquirer.prompt([													//use inquirer to ask question
    {
        type: "list",												//type list gives user a list of options
        message: "Would you like to create or use flash cards?",	//message shown to the user
        choices: ["Create", "Use"],									//options that show in list
        name: "createOrUse"											//refrence name of object
    }
]).then(function (answer) {							//Once inquirer gets answer then...
    if (answer.createOrUse === "Create") {			//If the answer to createOrUse is Create then
        createCard();								//call the createCard function
    } else {										//else (if the answer isnt create its use)
        askQuestions();								//call the askQuestions function
    }
});

//If the choice is to create a card then this function will run
function createCard() {
    inquirer.prompt([
        {
            type: "list",
            message: "What type of flashcard do you want to create?",
            choices: ["Basic Card", "Cloze Card"],
            name: "cardType"
        }

    ]).then(function (appData) {

        var cardType = appData.cardType;  			//the variable cardType will store the choice from the cardType inquirer object. 
        console.log(cardType);			  			//prints the card type chosen to the user		

        if (cardType === "Basic Card") {
            inquirer.prompt([
                {
                    type: "input",
                    message: "Please fill out the front of your card (Your Question).",
                    name: "front"
                },

                {
                    type: "input",
                    message: "Please fill out the back of your card (Your Answer).",
                    name: "back"
                }

            ]).then(function (cardData) {

                var cardObj = {						//builds an object with front and back info
                    type: "BasicCard",
                    front: cardData.front,
                    back: cardData.back
                };
                library.push(cardObj);				//push the new card into the array of cards
                fs.writeFile("cardLibrary.json", JSON.stringify(library, null, 2)); //write the updated array to the carLibrary.json file

                inquirer.prompt([					//use inquirer to ask if the user wants to keep making cards				
                    {
                        type: "list",
                        message: "Do you want to create another card?",
                        choices: ["Yes", "No"],
                        name: "anotherCard"
                    }

                ]).then(function (appData) {				//once the user gives answer....
                    if (appData.anotherCard === "Yes") {	//If 'Yes' then..
                        createCard();						//call the create card function again (recursion)
                    } else {								//Else (if the answer isnt Yes then its No)...
                        return;								//end the app and reurn to the command prompt
                    }
                });
            });

        } else {						//Else (if the anser isn't Basic it had to be Cloze)
            inquirer.prompt([
                {
                    type: "input",
                    message: "Please type out the full text of your statement (remove cloze in next step).",
                    name: "text"
                },

                {
                    type: "input",
                    message: "Please type the portion of text you want to cloze, replacing it with '...'.",
                    name: "cloze"
                }

            ]).then(function (cardData) {            //once we have the users cloze data run this function

                var cardObj = {						//builds and object from the text and cloze info
                    type: "ClozeCard",
                    text: cardData.text,
                    cloze: cardData.cloze
                };
                if (cardObj.text.indexOf(cardObj.cloze) !== -1) {   //checking to make sure the Cloze matches some text in the statement
                    library.push(cardObj);							//push the new card into the array of cards
                    fs.writeFile("cardLibrary.json", JSON.stringify(library, null, 2)); //write the updated array to the cardLibrary file
                } else {											//if the cloze doesnt match then give a message to the user.
                    console.log("Sorry, The cloze must match some word(s) in the text of your statement.");
                }
                inquirer.prompt([					//use inquirer to ask if the user wants to keep making cards				
                    {
                        type: "list",
                        message: "Do you want to create another card?",
                        choices: ["Yes", "No"],
                        name: "anotherCard"
                    }

                ]).then(function (appData) {				//once the user gives answer....
                    if (appData.anotherCard === "Yes") {	//If 'Yes' then..
                        createCard();						//call the create card function again (recursion)
                    } else {								//Else (if the answer isnt Yes then its No)...
                        return;								//end the app and reurn to the command prompt
                    }
                });
            });
        }

    });
};

			// build out a BasicCard Constructor and ClozeCard constructor.

			// **Basic Card Constructor -- ask the user for there question and then ask for an answer. Store the responses in 
			//   a JSON object to pull from later

			// **Cloze Card Constuctor -- ask the user for the full text of their card. Then ask for the cloze portion they
			//   want to replace with '...'

//if the answer is 'Use' then run an askQuestions function

			// pull the stored cards from the stored JSON and present them to the user. use a function that uses a counter to loop 
			// through the questions using recursion.

			//after each question print if the user is correct, if not print the correct answer.

