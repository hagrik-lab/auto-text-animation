let containerEl = document.querySelector('.container');

//Массив который содержить встовляемые нами слова
let careers = ['Orc', 'Elf', 'Dwarf'];

let careersIndex = 0;
let characterIndex = 0;


//Функция отвечающая за обновление текста
function updateIndex() {
    characterIndex++;
    containerEl.innerHTML = `<h1>I am only ${careers[careersIndex].slice(0, characterIndex)}</h1>`;
    
    if(characterIndex == careers[careersIndex].length) {
        careersIndex++;
        characterIndex = 0;
    }

    setTimeout(updateIndex, 400)

    //для перезапуска действия функции
    if(careersIndex == careers.length) {
        careersIndex = 0
    }
}

updateIndex()


