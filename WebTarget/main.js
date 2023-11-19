// let numberShots = prompt("Введите количество выстрелов: ") - 0;
let countPoint = 0;

function shotTarget() {
    numberShots = document.getElementById('z').value
    for (let i = 0; i<numberShots; i++){
        let xminus = Math.round(Math.random()) // x и y от -1 до 1 включительно
        let yminus = Math.round(Math.random())
        let x = Math.random() - xminus
        let y = Math.random() - yminus

        if (x == 0 && y == 0) {
            point = 10

        }else if (((Math.sqrt(1-(Math.sqrt(1-(Math.abs(x)))**4)))+Math.abs(y)<=1) && (x != 0 && y != 0)) {
            point = 4

        }else if (Math.abs(x) + Math.abs(y) <= 1) {
            point = 3

        }else if ((x**2)+(y**2)<=1) {
            point = 2

        }else if ((x <= 1 && x >= -1) && (y <= 1 && y >= -1)) {
            point = 1

        }else {
            point = 0
        }
        countPoint = point + countPoint;
    }
    console.log(`Количество очков: ${countPoint}, процент попадания - 100%`)    
};

shotTarget(numberShots);










