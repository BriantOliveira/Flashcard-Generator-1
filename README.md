# UCF Coding Bootcamp Week 11 Project (Cloze Constructors)
# Flashcard - Generator

### Overview

In this project I created the backend for a basic flashcard application.

The backend essentially constitutes an API that allows users to create two types of flashcards.

1. **Basic** flashcards, which have a front (_"Who was the first president of the United States?"_), and a back (_"George Washington"_).

2. **Cloze-Deleted** flashcards, which present _partial_ text (_"... was the first president of the United States."_), and the full text when the user requests it (_"George Washington was the first president of the United States."_)

#### Cloze Deletions

A **cloze deletion** is simply a sentence that has had some of its text removed. For example, given the sentence:

_"George Washington was the first president of the United States."_

...We can create a "cloze deletion" by removing the words _"George Washington"_:

_"... was the first president of the United States."_

This is useful for building flash card applications that forces users to remember the important part of a sentence, and is [a common device in educational applications](https://en.wikipedia.org/wiki/Cloze_test).

### Install the Flashcard-Generator

1. Fork or clone this repo to your local machine. You will need Node.js installed on the machine to run this app.

2. Install the needed node packages (homework assigned).
   * [Inquirer](https://www.npmjs.com/package/inquirer) - used to ask questions and take responses from the user.

3. Install the needed node packages (extra ones I choose to use).
   * [Colors](https://www.npmjs.com/package/colors) - used to color certain text and make it more readable.

## Instructions

* open your command line program (Bash, Terminal, etc...) and navigate to the folder you cloned or forked onto your system.

* Type `node flashcard.js` to run the application

* It will start with a basic menu of options

  * `Create` will allow the user to create a basic (front & back) or Cloze (text & cloze) flashcard and add it to the deck.

  * `Use All` will run the user through all the flashcards in their current order, giving questions and asking for the answers, giving correct or incorrect responses.

  * `Random` will randomly pick one card from the existing deck to use.

  * `Shuffle` will randomly mix up the order of all cards in the deck.

  * `Show All` will print all cards currently in the deck, in their current order, to the screen for the user to review.

  * `Exit` will take the user out of the application and back to their command prompt.

- - -
## Known Issues & TODO Items

  * Need to fix the shuffle to work correctly with out having to reload the app.

  * Add a menu item (function) to delete a card or whole deck for the user.

- - -

## Copyright

Jason O'Brien (C) 2017.
