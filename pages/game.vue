<template>
    <p class="text-center mt-2.5 mb-2.5">{{ currentPlayer }}'s turn</p> 
    <div class="flex flex-col justify-center">
     <div class="container h-80 w-80 bg-gray-500 flex flex-col justify-center items-center mx-auto">
     <div class="flex flex-row">
       <button @click="changeData(0, 0)" class="inner-box h-16 w-16 m-4 text-white bg-gray-600 text-3xl cursor-pointer">{{ grid[0][0] }}</button>
       <button @click="changeData(0, 1)" class="inner-box h-16 w-16 m-4 text-white bg-gray-600 text-3xl cursor-pointer">{{ grid[0][1] }}</button>
       <button @click="changeData(0, 2)" class="inner-box h-16 w-16 m-4 text-white bg-gray-600 text-3xl cursor-pointer">{{ grid[0][2] }}</button>
     </div>
     <div class="flex flex-row">
       <button @click="changeData(1, 0)" class="inner-box h-16 w-16 m-4 text-white bg-gray-600 text-3xl cursor-pointer">{{ grid[1][0] }}</button>
       <button @click="changeData(1, 1)" class="inner-box h-16 w-16 m-4 text-white bg-gray-600 text-3xl cursor-pointer">{{ grid[1][1] }}</button>
       <button @click="changeData(1, 2)" class="inner-box h-16 w-16 m-4 text-white bg-gray-600 text-3xl cursor-pointer">{{ grid[1][2] }}</button>
     </div>
     <div class="flex flex-row">
       <button @click="changeData(2, 0)" class="inner-box h-16 w-16 m-4 text-white bg-gray-600 text-3xl cursor-pointer">{{ grid[2][0] }}</button>
       <button @click="changeData(2, 1)" class="inner-box h-16 w-16 m-4 text-white bg-gray-600 text-3xl cursor-pointer">{{ grid[2][1] }}</button>
       <button @click="changeData(2, 2)" class="inner-box h-16 w-16 m-4 text-white bg-gray-600 text-3xl cursor-pointer">{{ grid[2][2] }}</button>
     </div>
     </div>
       <p v-if="winner" class="text-center mt-2.5 mb-2.5">{{ winner }} wins!</p>
       <p v-else-if="isTie" class="text-center mt-2.5 mb-2.5">It's a tie!</p>
       <button  @click="resetGame" class="h-120 w-120 p-2 cursor-pointer bg-blue-500 text-white rounded-md text-lg mt-10 mx-auto my-auto">Reset Game</button>
   </div>
 </template>
 
 <script setup>
 import { ref,nextTick } from "vue";

 definePageMeta({
  middleware : ['auth']
})
  
 
 const currentPlayer = ref("X");
 const winner = ref(null);
 const isTie = ref(false);
 
 const grid = [
   ["", "", ""],
   ["", "", ""],
   ["", "", ""],
 ];
 
 
 const checkRow = (row) => {
   return (
     grid[row][0] === currentPlayer.value &&
     grid[row][1] === currentPlayer.value &&
     grid[row][2] === currentPlayer.value
   );
 };
 
 const checkColumn = (col) => {
   return (
     grid[0][col] === currentPlayer.value &&
     grid[1][col] === currentPlayer.value &&
     grid[2][col] === currentPlayer.value
   );
 };
 
 const checkDiagonals = () => {
   return (
     (grid[0][0] === currentPlayer.value &&
       grid[1][1] === currentPlayer.value &&
       grid[2][2] === currentPlayer.value) ||
     (grid[0][2] === currentPlayer.value &&
       grid[1][1] === currentPlayer.value &&
       grid[2][0] === currentPlayer.value)
   );
 };

 const checkWinner = (row, col) => {
   return (
     checkRow(row) || checkColumn(col) || checkDiagonals()
   );
 };
 
 const checkTie = () => {
   return grid.every((row) => row.every((cell) => cell !== "")) && !winner.value;
 };

 const changeData = async (row, col) => {
   if (grid[row][col] === "") {
       grid[row][col] = currentPlayer.value;
       console.log(grid[row][col])

       await nextTick();
       
     if (checkWinner(row, col)) {
       winner.value = currentPlayer.value;
     } else if (checkTie()) {
       isTie.value = true;
     }else {
       currentPlayer.value = currentPlayer.value === "X" ? "O" : "X";
     }
   }
 };
 
 const resetGame = () => {
   for (let i = 0; i < 3; i++) {
     for (let j = 0; j < 3; j++) {
       grid[i][j] = "";
     }
   }
   winner.value = null;
   isTie.value = false;
   currentPlayer.value = "X";
 };
 </script>

 