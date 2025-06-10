const addButton = document.getElementById('add-button');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');

addButton.addEventListener('click', addItem);
itemInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    addItem();
  }
});

function addItem() {
  const itemText = itemInput.value.trim();
  if (itemText === '') {
    alert('Digite um item válido!');
    return;
  }

  const li = document.createElement('li');
  li.innerHTML = `
    <span>${itemText}</span>
    <button class="remove-button">Remover</button>
  `;

  const removeButton = li.querySelector('.remove-button');
  removeButton.addEventListener('click', () => {
    itemList.removeChild(li);
    showNotification('O item foi removido da lista');
  });

  itemList.appendChild(li);
  itemInput.value = '';
  itemInput.focus();
}

function showNotification(message) {
  const notification = document.getElementById('notification');
  notification.textContent = message;
  notification.classList.remove('hidden');
  notification.classList.add('show');

  setTimeout(() => {
    notification.classList.remove('show');
    setTimeout(() => {
      notification.classList.add('hidden');
    }, 300); // tempo para o fade-out
  }, 2000); // tempo visível na tela
}
