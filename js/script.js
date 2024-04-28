// Copyright (c) 2024 Mr. Adam Batiuk All rights reserved
//
// Created by: Adam Batiuk
// Created on: Mar 2024
// This file contains the JS functions for index.html

const randomNumber = Math.floor(Math.random() * 6) + 1

function myButtonClicked() {
  // input
  const userNumber = parseInt(document.getElementById("user-number").value)
  
  // process
  if (userNumber == randomNumber) {
    // output
    document.getElementById("answer").innerHTML = "You have guessed the correct number!"
  }

  if (userNumber != randomNumber) {
    document.getElementById("answer").innerHTML = "You have not guessed the correst number!"
  }
}