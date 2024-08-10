

# Atividade Fap - Lista de Compras
![image](https://github.com/user-attachments/assets/6ac6f161-1671-4e20-b7c1-5bcef79c1906)

## Descrição

O projeto **Atividade Fap - Lista de Compras** é uma aplicação web que permite aos usuários gerenciar uma lista de compras de maneira interativa e responsiva. Utilizando apenas HTML, CSS e JavaScript, o projeto adota uma abordagem de programação funcional para garantir uma estrutura simples e eficiente.

### Funcionalidades

- **Adicionar Item**: Inclua novos itens na lista de compras.
- **Excluir Item**: Remova itens da lista.
- **Notificação de Remoção**: Exibe uma notificação visual quando um item é removido.



### Arquitetura dos Diretórios

- **`index.html`**: A página principal da aplicação.
- **`style.css`**: Arquivo de estilo CSS.
- **`script.js`**: Arquivo JavaScript que implementa a lógica da aplicação.
- **`logo.png`**: Imagem de logo do projeto.

### Tecnologias Utilizadas

- **HTML**: Estrutura do conteúdo da página.
- **CSS**: Estilização e layout responsivo.
- **JavaScript**: Funcionalidades interativas utilizando o paradigma funcional.

### Estrutura de Código

O projeto utiliza o paradigma funcional para gerenciar a lista de compras, com funções que adicionam e removem itens diretamente no DOM. Abaixo está um exemplo de função utilizada:

```javascript
function addItem() {
    const itemInput = document.getElementById('itemInput');
    const itemText = itemInput.value.trim();

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
```

### Instruções de Uso

1. **Clonagem do Repositório**: Clone este repositório para sua máquina local usando `git clone https://github.com/aureliodeboa/Fap-lista-de-compras/`.
2. **Acessar o Projeto**: Navegue até o diretório do projeto e abra o arquivo `index.html` em um navegador da web.
3. **Interação**: Utilize a interface para adicionar e remover itens da lista de compras.

### Contribuições

Se você deseja contribuir para este projeto, por favor, envie um pull request ou entre em contato com o responsável pelo projeto.

### Licença

Este projeto é de código aberto e pode ser utilizado conforme os termos estabelecidos pelo repositório.

