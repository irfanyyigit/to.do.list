const taskInput = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');

// görev ekleme fonksiyonu
addBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  const li = document.createElement('li');
  li.className = 'task-item';
  li.innerHTML = `
    <span>${taskText}</span>
    <div>
      <button class="complete-btn">✔</button>
      <button class="edit-btn">✎</button>
      <button class="delete-btn">🗑</button>
    </div>
  `;

  taskList.appendChild(li);
  taskInput.value = '';

  // Buton eventleri
  li.querySelector('.complete-btn').addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  li.querySelector('.delete-btn').addEventListener('click', () => {
    li.remove();
  });

  li.querySelector('.edit-btn').addEventListener('click', () => {
    const newTask = prompt('Görevi düzenle:', li.querySelector('span').textContent);
    if (newTask !== null && newTask.trim() !== '') {
      li.querySelector('span').textContent = newTask;
    }
  });
});

// Enter tuşu ile ekleme
taskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') addBtn.click();
});
