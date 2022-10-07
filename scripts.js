// Переключатель фото
let images = [
    './snake.png',
    './3Dgame.png',
    './tetris.png'
];

let number_image = 0;
function get_new_image(){
    number_image += 1;
    if(number_image === images.length){
        number_image = 0;
        return number_image;
    }
    console.log(number_image);
    return number_image;
}

let button = document.querySelector('#change_image');
let image = document.querySelector('.image');

button.addEventListener('click', function () {
    let Element = get_new_image();
    smoothly(image, 'src', images[Element]);
})

// Темная тема
const btn = document.querySelector("#change_theme");
btn.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");
});