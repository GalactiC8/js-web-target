
// function shootToTarget (x,y) {
//     if (!isNaN(inputNumber) && n > 0) {
//         var result = {
//             score: 0
//         };
//         for (i = 0; i < x; i++) {
//             x = getRandomFloat(-2, 2, 3);
//             y = getRandomFloat(-2, 2, 3);
//             result.score += shoot(x,y);
//         }
//     }
//     return result;
// }

// function getRandomFloat(min, max, decimals) {
//     const str = (Math.random() * (max - min) + min).toFixed(decimals);
//     return parseFloat(str);
// }
// точка старта 
window.onload = function () {
    var result = 0;
    function shootHandler () {
        var x = document.getElementById("x").value;
        var y = document.getElementById("y").value;
        result += shoot(x,y);
        document.getElementById("result").innerHTML = "Результат: " + result;
    }
    function resetHandler () {
        result = 0;
        document.getElementById("result").innerHTML = "Результат: " + result;
        document.getElementById("x").value = "";
        document.getElementById("y").value = "";
        document.getElementById("z").value = "";
    }
    var button = document.getElementById("pressMe");
    button.addEventListener('click', shootHandler);
    var buttonReset= document.getElementById("reset");
    buttonReset.addEventListener('click', resetHandler);
};


