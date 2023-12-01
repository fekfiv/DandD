/* eslint-disable no-plusplus */
/* eslint-disable linebreak-style */
const form = document.querySelector('#form');
const container = document.querySelector('#containerCard');
const uselessText = document.querySelector('.uselessText');

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
    if (uselessText) {
      uselessText.classList.add('hidden');
    }

    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <div class="card-body">
      <div class="name">
        <h5 data-id=${result.id} class="card-name"><u>Имя персонажа:</u> ${result.name}</h5>
        <input size={15} type="text" name="name" data-id=${result.id} value=${result.name} />
      </div>
      <div class="classes">
        <p data-id=${result.id} class="card-classes"><u>Класс персонажа:</u> ${result.classes}</p>
        <input size={15} type="text" name="class" data-id=${result.id} value=${result.classes} />
      </div>
      <div class="cardBtn">
        <button data-id=${result.id} id=${result.id} type="button" class="btn btn-delete">
          Удалить
        </button>
        <button data-id=${result.id} id=${result.id} type="button" class="btn btn-edit">
          Изменить
        </button>
      </div>
    </div>
    <div class="image">
      тут в будущем будет капча
    </div>
  `;

    container.appendChild(div);

    e.target.name.value = '';
    e.target.race.value = 'Выберите расу';
    e.target.gender.value = '';
    e.target.age.value = '';
    e.target.hairColor.value = 'Выберите цвет волос';
    e.target.classes.value = 'Выберите класс';
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
      const response = await fetch(`/api/character/${id}`, {
        method: 'DELETE',
      });

      if (response.status === 200) {
        const card = e.target.closest('.card');
        container.removeChild(card);
      }
    } else if (e.target.classList.value.includes('edit')) {
      const id = Number(e.target.id);

      const inputName = e.target.parentElement.parentElement.children[0].children[1];
      const inputclass = e.target.parentElement.parentElement.children[1].children[1];

      const formData = {
        name: inputName.value,
        class: inputclass.value,
      };

      const response = await fetch(`/api/character/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.status === 200) {
        const result = await response.json();

        const h5 = document.querySelectorAll('.card-classes');
        for (let i = 0; i < h5.length; i++) {
          if (h5[i].dataset.id === e.target.dataset.id) {
            h5[i].textContent = `Класс персонажа: ${result.classes}`;
          }
        }

        const p = document.querySelectorAll('.card-name');
        for (let i = 0; i < p.length; i++) {
          if (p[i].dataset.id === e.target.dataset.id) {
            p[i].textContent = `Имя персонажа: ${result.name}`;
          }
        }
      }
    }
  }
});
