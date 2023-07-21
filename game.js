const squares = document.querySelectorAll('.gameboard div');
// console.log(squares);

let Clocation = 159;
const width = 11;

function moveFrog(e) {

    squares[Clocation].classList.remove('frog');

    if (e.key === 'ArrowLeft' && Clocation % width !== 0) {
        Clocation -= 1;
    } else if (e.key === 'ArrowRight' && Clocation % width < width - 1) {
        Clocation += 1;
    } else if (e.key === 'ArrowUp' && Clocation - width >= 0) {
        Clocation -= width;
    } else if (e.key === 'ArrowDown' && Clocation + width < width * width) {
        Clocation += width;
    }
    squares[Clocation].classList.add('frog');

}

document.addEventListener('keydown', moveFrog);

