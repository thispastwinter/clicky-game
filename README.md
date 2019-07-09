# Clicky-Game

## Our First Utilization of ReactJS

## What's Under The Hood?

1) This app pulls its data from a JSON containing 12 "Office Characters."
2) There are serveral methods used here to manage dynamically generated content.
3) Each one of these methods act on some "state" within the app. This ensures that the dom only manipulates the "ImgContainer" only when a method is called on it.

## How The Game Works: 

1) A users score increases with each click of a character that has yet to be selected. 
2) Each time a new character card is selected, the "shuffle" method is called and the array is shuffled. This is updated in the app's state.
3) Each time a character is selected, the app checks to make sure that character has not yet been selected, and acts accordingly. 
4) Once a user has selected a duplicate, the game notifies the user they've guessed incorrectly, and the game resets.
5) If a user reaches a score of 12, they win the game.

## Take Aways:

I still have much to learn with React, but feel better prepared for all future React projects. This app really helped me to better understand how to manage state and establish props within a React app.


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
