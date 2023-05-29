var historybtn = document.querySelector('.history')
var vision = document.querySelector('.vision')
var goals = document.querySelector('.goals')
let heading = document.querySelector('.open-tab');
let description = document.querySelector('.open-desc');



let showArray = [
    {
        heading: 'History',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat iusto eos deleniti mollitia, provident veniam iste magni ex explicabo! Provident maxime voluptatibus excepturi, dolores ipsum reiciendis quod consequatur cupiditate numquam, minus, earum porro unde aliquam voluptate magni dolor ut officia quis modi! Id, eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam rerum quis veniam libero explicabo unde! Laudantium tempore commodi delectus cumque, sint porro saepe voluptatem dolorem atque repellendus nihil necessitatibus nostrum, corporis minima adipisci culpa. lore'
    },
    {
        heading: 'Vision',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat iusto eos deleniti mollitia, provident veniam iste magni ex explicabo! Provident maxime voluptatibus excepturi, dolores ipsum reiciendis quod consequatur cupiditate numquam, minus, earum porro unde aliquam voluptate magni dolor ut officia quis modi! Id, eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam rerum quis veniam libero explicabo unde! Laudantium tempore commodi delectus cumque, sint porro saepe voluptatem dolorem atque repellendus nihil necessitatibus nostrum, corporis minima adipisci culpa. lore'
    },
    {
        heading: 'Goals',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat iusto eos deleniti mollitia, provident veniam iste magni ex explicabo! Provident maxime voluptatibus excepturi, dolores ipsum reiciendis quod consequatur cupiditate numquam, minus, earum porro unde aliquam voluptate magni dolor ut officia quis modi! Id, eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam rerum quis veniam libero explicabo unde! Laudantium tempore commodi delectus cumque, sint porro saepe voluptatem dolorem atque repellendus nihil necessitatibus nostrum, corporis minima adipisci culpa. lore'
    }
]

heading.innerHTML = showArray[0].heading;
description.innerHTML = showArray[0].description;



vision.addEventListener('click', () => {

    historybtn.classList.remove('hidden');
    goals.classList.remove('hidden');
    vision.classList.add('hidden');
    heading.innerHTML = showArray[1].heading;
    description.innerHTML = showArray[1].description;
})
historybtn.addEventListener('click', () => {

    historybtn.classList.add('hidden');
    vision.classList.remove('hidden');
    goals.classList.remove('hidden');
    heading.innerHTML = showArray[0].heading;
    description.innerHTML = showArray[0].description;
})
goals.addEventListener('click', () => {

    historybtn.classList.remove('hidden');
    vision.classList.remove('hidden');
    goals.classList.add('hidden');
    heading.innerHTML = showArray[2].heading;
    description.innerHTML = showArray[2].description;
})
