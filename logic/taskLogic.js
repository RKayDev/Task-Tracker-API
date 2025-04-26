import database from "../data/database.js";
import Task from "../models/task.js";


const createTask = async (userid, title, description) => {
    try {
        let task = new Task(userid, title, description);
        let tasks = [];
        try {
            tasks = JSON.parse(await database.read());
        }
        catch {
            tasks = [];
        }

        console.log(tasks);
        if (tasks === null) {
            tasks = [];
        }
        else {
            if (tasks.find(t => t.id === task.id)) throw new Error("Task already exists");
        }

        tasks.unshift(task);
        console.log(tasks);
        await database.write(JSON.stringify(tasks, null, 2));

        return task;
    } catch (error) {
        throw new Error(`Error creating task: ${error.message}`);
    }
};

const deleteTask = async (id) => {

    let tasks = [];
    try {
        tasks = JSON.parse(await database.read());
    }
    catch {
        tasks = [];
        return;
    }
    if (tasks === null) {
        tasks = [];;
    }
    else {

        if (tasks.find(t => t.id == id)) {
            let taskIndex = tasks.findIndex(t => t.id == id);
            tasks.splice(taskIndex, 1);
            await database.write(JSON.stringify(tasks, null, 2));
            return id + " deleted";
        }
    }
}

const updateTask = async (id, title, description, completed) => {
    let tasks = [];
    try {
        tasks = JSON.parse(await database.read());
    }
    catch {
        tasks = [];
    }

    if (tasks === null) {
        tasks = [];
    }
    else {
        console.log(completed);
        if (tasks.find(t => t.id == id)) {
            let taskIndex = tasks.findIndex(t => t.id == id);
            if (title != undefined && title.length > 0) tasks[taskIndex].title = title;
            if (description != undefined && description.length > 0) tasks[taskIndex].description = description;
            if (completed != undefined) tasks[taskIndex].completed = completed.toString() == "true";

            await database.write(JSON.stringify(tasks, null, 2));
            return tasks[taskIndex];
        }
    }
};

const getTask = async (id) => {
    let tasks = [];
    let task = {};
    try {
        tasks = JSON.parse(await database.read());
    }
    catch {
        tasks = [];
        return;
    }
    if (tasks === null) {
        tasks = [];
        task = {};
    }
    else {
        if (tasks.find(t => t.id == id)) {
            let taskIndex = tasks.findIndex(t => t.id == id);
            task = tasks[taskIndex];
        }
    }
    console.log(task);
    return task;
}

const getTasks = async (userid) => {
    let tasks = [];
    try {
        tasks = JSON.parse(await database.read());
    }
    catch {
        tasks = [];
        return;
    }
    if (tasks === null || tasks.length == 0) {
        tasks = JSON.parse(await database.reset());
        database.write(JSON.stringify(tasks, null, 2));
    }
    else {
        if (tasks.find(t => t.userid == userid)) {
            let usertasks = tasks.filter(t => t.userid == userid);            
            return usertasks;
        }
    }

}


export default {
    createTask,
    deleteTask,
    updateTask,
    getTask,
    getTasks
};

