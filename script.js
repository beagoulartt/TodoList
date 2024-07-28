document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-button');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    // Function to create a new to-do item
    function createTodoItem(text) {
        const listItem = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        const span = document.createElement('span');
        span.textContent = text;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';

        // Event handler for checkbox change
        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                listItem.classList.add('completed');
                // Move the item to the bottom
                todoList.appendChild(listItem);
                // Play a sound
                new Audio('ding.mp3').play();
            } else {
                listItem.classList.remove('completed');
            }
        });

        // Event handler for delete button
        deleteButton.addEventListener('click', () => {
            listItem.classList.add('fade');
            setTimeout(() => {
                todoList.removeChild(listItem);
            }, 500); // Wait for fade transition to complete
        });

        listItem.appendChild(checkbox);
        listItem.appendChild(span);
        listItem.appendChild(deleteButton);
        return listItem;
    }

    // Event handler for add button
    addButton.addEventListener('click', () => {
        const text = todoInput.value.trim();
        if (text) {
            const newTodo = createTodoItem(text);
            todoList.appendChild(newTodo);
            todoInput.value = '';
        }
    });

    // Allow pressing Enter to add new to-do
    todoInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addButton.click();
        }
    });
});