
const btnToggle = document.querySelector('.btnTheme');


// Función para aplicar el tema
export const toggleTheme = () => {

    const body = document.body;
    const iconCounter = document.querySelector('.iconCounter');
    const btnTheme = document.querySelector('.btnTheme');
    const iconBtn = document.querySelector('.iconTheme');
    const title = document.querySelector('.title');
    const excludeSpace = document.querySelector('.excludeSpace');
    const setCharacter = document.querySelector('.setCharacter');
    const textArea = document.querySelector('.wrapper');
    const spaces = document.querySelector('.spaces');
    const character = document.querySelector('.character');
    const numbers = document.querySelector('.numbers');
    const reading = document.querySelector('.reading');
    const titleGraph = document.querySelector('.title__graph');
    const message = document.querySelector('.message');
    const letter = document.querySelectorAll('.letter');
    const track = document.querySelectorAll('.track');
    const value = document.querySelectorAll('.value');
    const seeMore = document.querySelector('.see-more');

    const isDark = body.classList.toggle('dark');

    //CAMBIAR EL LOGO
    if(iconCounter){
        iconCounter.src = isDark
        ? '/starter-code/assets/images/logo-dark-theme.svg'
        : '/starter-code/assets/images/logo-light-theme.svg';
    }

    //CAMBIAR EL COLOR DEL BOTON SEGUN EL THEME
    btnTheme.classList.toggle('dark', isDark);
    btnTheme.classList.toggle('light', !isDark);

    //CAMBIAR ICON DE BOTON DE THEME
    if(iconBtn){
        iconBtn.src = isDark
        ? '/starter-code/assets/images/icon-sun.svg'
        : '/starter-code/assets/images/icon-moon.svg';
    }

    //CAMBIAR TITULO
    title.classList.toggle('dark', isDark)
    title.classList.toggle('light', !isDark)

    //CAMBIAR EL TEXTAREA
    textArea.classList.toggle('dark', isDark);
    textArea.classList.toggle('light', !isDark);

    //CAMBIAR INPUSTS TEXT
    excludeSpace.classList.toggle('dark', isDark);
    excludeSpace.classList.toggle('light', !isDark);

    setCharacter.classList.toggle('dark', isDark);
    setCharacter.classList.toggle('light', !isDark);

    spaces.classList.toggle('dark', isDark);
    spaces.classList.toggle('light', !isDark);

    numbers.classList.toggle('dark', isDark);
    numbers.classList.toggle('light', !isDark);

    character.classList.toggle('dark', isDark);
    character.classList.toggle('light', !isDark);

    reading.classList.toggle('dark', isDark);
    reading.classList.toggle('light', !isDark);

    //DENSITY GRAPH
    titleGraph.classList.toggle('dark', isDark);
    titleGraph.classList.toggle('light', !isDark);

    message.classList.toggle('dark', isDark);
    message.classList.toggle('light', !isDark);

    letter.forEach(el => {
        el.classList.toggle('dark', isDark);
        el.classList.toggle('light', !isDark);
    });

    track.forEach(tra => {
        tra.classList.toggle('dark', isDark);
        tra.classList.toggle('light', !isDark);
    })

    value.forEach(val => {
        val.classList.toggle('dark', isDark);
        val.classList.toggle('light', !isDark);
    })

    // Actualizar todos los botones see-more que existan dinámicamente
    const seeMoreButtons = document.querySelectorAll('.see-more');
    seeMoreButtons.forEach(btn => {
        btn.classList.toggle('dark', isDark);
        btn.classList.toggle('light', !isDark);
    });

}

btnToggle.addEventListener('click', toggleTheme)
