
document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');


    function createTaskElement(taskText) {
        const li = document.createElement('li');

    
        const textNode = document.createTextNode(taskText);
        li.appendChild(textNode);

       
        const completeButton = document.createElement('button');
        completeButton.textContent = 'Completar';
        completeButton.addEventListener('click', () => {
            li.classList.toggle('completed');
        });
        li.appendChild(completeButton);

     
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Eliminar';
        removeButton.classList.add('remove');
        removeButton.addEventListener('click', () => {
            taskList.removeChild(li);
        });
        li.appendChild(removeButton);

        return li;
    }

 
    addTaskButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText) {
            const taskElement = createTaskElement(taskText);
            taskList.appendChild(taskElement);
            taskInput.value = ''; 
        }
    });
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTaskButton.click();
        }
    });
});
