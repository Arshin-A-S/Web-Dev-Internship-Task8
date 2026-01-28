let tasks = [];

const input = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');


const addTask = () => {
    const text = input.value.trim();
    if (text === "") {
        return alert("Please enter a task");
    }
    const newTask = {
        id: Date.now(),
        text: text,
        completed: false
    };
    tasks.push(newTask);
    input.value = "";
    renderTasks();
};

const renderTasks = () => {
    todoList.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement('li');

        if (task.completed){
            li.classList.add('completed');
        }
        
        li.innerHTML = `
            <span class="task-number">${index + 1}.</span>
            
            <h3 class="task-name-heading">${task.text}</h3>
            
            <div class="actions">
                <button 
                    class="complete-btn ${task.completed ? 'active-completed' : ''}" 
                    onclick="toggleTask(${task.id})">✓ Done
                </button>
                <button class="delete-btn" onclick="deleteTask(${task.id})">✗ Delete</button>
            </div>
        `;
        todoList.appendChild(li);     
    });
};

window.toggleTask = (id) => {
    tasks = tasks.map(t => t.id === id ? { ...t, completed: !t.completed} : t);
    renderTasks();
};

window.deleteTask = (id) => {
    tasks = tasks.filter(t => t.id !== id);
    renderTasks();
};

addBtn.addEventListener('click', addTask);
input.addEventListener('keypress', (e) => {if(e.key === 'Enter') addTask(); });

