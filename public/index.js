/* eslint-disable linebreak-style */
const form = document.querySelector('#form');
const container = document.querySelector('#container');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = {
    name: e.target.name.value,
    race: e.target.race.value,
    gender: e.target.gender.value,
    age: e.target.age.value,
    hairColor: e.target.hairColor.value,
    classes: e.target.classes.value,
    characterStory: e.target.characterStory.value,
  };

  const response = await fetch('/api/character', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });
  if (response.status === 200) {
    const result = await response.json();
    const div = document.createElement('div');
    div.classList.add('card');
    div.style.width = '18rem';
    div.id = `character-${result.id}`;
    div.innerHTML = `
            <div class="card-body">
            <h5 class="card-">${result.name}</h5>
            <p class="card-classes">${result.classes}</p>
            <button id=${result.id} type="button" class="btn btn-delete">
            Удалить
            </button>
            <button id=${result.id} type="button" class="btn btn-edit">
           Изменить
            </button>
        </div>`;

    container.appendChild(div);

    e.target.name.value = '';
    e.target.race.value = '';
    e.target.gender.value = '';
    e.target.age.value = '';
    e.target.hairColor.value = '';
    e.target.classes.value = '';
    e.target.characterStory.value = '';
  } else {
    console.error('АШИБКА');
  }
});

container.addEventListener('click', async (e) => {
  e.preventDefault();
  if (e.target.tagName === 'BUTTON') {
    if (e.target.classList.value.includes('delete')) {
      const { id } = e.target;
      const response = await fetch(`/api/charcter/${id}`, {
        method: 'DELETE',
      });

      if (response.status === 200) {
        const card = e.target.closest('.card');
        container.removeChild(card);
      }
    }
  }
});
