"use strict";

/*
 * Name: Isabella Mester
 * Date: October 25, 2023
 *
 * This .js file is the interactivity for the todo list and adds functionality.
 */

// Wait for the DOM to be fully loaded
window.addEventListener("load", init);

function init() {
    const addButton = document.getElementById("add-button");
    addButton.addEventListener("click", addTask);
}

function addTask() {
    const taskInput = document.getElementById("task");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const taskList = document.getElementById("task-list");
        const newTask = document.createElement("li");
        newTask.textContent = taskText;

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.addEventListener("click", function () {
            taskList.removeChild(newTask);
        });

        newTask.appendChild(removeButton);
        taskList.appendChild(newTask);

        taskInput.value = ""; 
    }
}

