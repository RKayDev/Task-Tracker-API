class Task {
    constructor(userid, title, description) {
        this.id = Date.now();
        this.userid = userid;
        this.title = title;
        this.description = description;
        this.completed = false;
    }

    complete() {
        this.completed = true;
    }

    uncomplete() {
        this.completed = false;
    }
    
}

export default Task;