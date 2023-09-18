const findTheOldest = require('./findTheOldest');

let people = [];

const findOldestButton = document.getElementById('findOldestButton');
const oldestPersonName = document.getElementById('oldestName');
const oldestPersonAge = document.getElementById('oldestAge');
const addUserButton = document.getElementById('addUserButton');
const userNameInput = document.getElementById('userName');
const userBirthInput = document.getElementById('userBirth');
const userDeathInput = document.getElementById('userDeath');
const userList = document.getElementById('userList');

findOldestButton.addEventListener('click', () => {
    if (people.length > 0) {
        const oldestPerson = findTheOldest(people);
        oldestPersonName.textContent = oldestPerson.name;
        const currentYear = new Date().getFullYear();
        const age = (oldestPerson.death || currentYear) - oldestPerson.birth.getFullYear();
        oldestPersonAge.textContent = age;
    }
});

addUserButton.addEventListener('click', () => {
    const userName = userNameInput.value;
    const userBirth = new Date(userBirthInput.value);
    const userDeath = new Date(userDeathInput.value);

    // Validar si la fecha de nacimiento es válida
    if (!isNaN(userBirth.getTime())) {
        // Crear un nuevo usuario
        const newUser = { name: userName, birth: userBirth };
        
        // Agregar la fecha de defunción si está definida
        if (!isNaN(userDeath.getTime())) {
            newUser.death = userDeath;
        }

        // Agregar el nuevo usuario a la lista de personas
        people.push(newUser);

        // Limpiar los campos de entrada
        userNameInput.value = '';
        userBirthInput.value = '';
        userDeathInput.value = '';

        // Actualizar la lista de usuarios
        updateUsersList();
    }
});

function updateUsersList() {
    userList.innerHTML = '';
    people.forEach(person => {
        const listItem = document.createElement('li');
        const birthDateString = person.birth.toLocaleDateString();
        const deathDateString = person.death ? person.death.toLocaleDateString() : 'Alive';

        listItem.textContent = `${person.name} (Birthdate: ${birthDateString}, Death date: ${deathDateString})`;

        // Botón para eliminar un usuario
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            // Eliminar el usuario de la lista
            people = people.filter(p => p !== person);
            updateUsersList();
        });

        listItem.appendChild(deleteButton);
        userList.appendChild(listItem);
    });
}

// Inicializar la lista de usuarios
updateUsersList();
