    function addItem() {
        const itemInput = document.getElementById('itemInput');
        const itemText = itemInput.value.trim();
        console.log(itemText)
        if (itemText !== '') {
            const todoList = document.querySelector('.lista');
            const listItem = document.createElement('li');
            
            const divContainer = document.createElement('div');
            
            const checkboxLabel = document.createElement('label');
            checkboxLabel.className = 'container-checkbox';
            
            const checkboxInput = document.createElement('input');
            checkboxInput.type = 'checkbox';
            
            const checkmark = document.createElement('span');
            checkmark.className = 'checkmark';
            
            checkboxLabel.appendChild(checkboxInput);
            checkboxLabel.appendChild(checkmark);
            
            const spanContent = document.createElement('span');
            spanContent.className = 'lista-content';
            spanContent.textContent = itemText;
            
            divContainer.appendChild(checkboxLabel);
            divContainer.appendChild(spanContent);
            
            const deleteSpan = document.createElement('span');
            deleteSpan.className = 'material-symbols-outlined';
            deleteSpan.textContent = 'delete';
            deleteSpan.onclick = function() {
                showNotification();
                todoList.removeChild(listItem);

            };
            
            listItem.appendChild(divContainer);
            listItem.appendChild(deleteSpan);
            todoList.appendChild(listItem);

            itemInput.value = '';
        }
    }

function showNotification() {
        const notification = document.getElementById('notification');
        notification.style.opacity = 1;
    
        setTimeout(() => {
            notification.style.opacity = 0;
        }, 5000); // Exibe a notificação por 5 segundos
    }
    