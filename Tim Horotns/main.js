/// Tim Hortons 

/// Event Listenrs
document.getElementById('btnonce').addEventListener('click', SimulateOnce);
document.getElementById('btn5').addEventListener('click', Simulate5);
document.getElementById('btngrand').addEventListener('click', Simulategrand);
document.getElementById('btn500').addEventListener('click', Simulate500)


/// Globa Variables
let againcount = 0;
let grandprizecount = 0;
let donutcount = 0;
let coffeecount = 0;

/// Function simulate once
function SimulateOnce() {
    let input = document.getElementById('input').value;
    input = input.toLowerCase();

    /// ALBERTA
    if (input == 'ab' || input == 'alberta') {
        randNum = Math.random();
        console.log(randNum);
        if (randNum <= 0.15) {
            document.getElementById('output').innerHTML = 'Please Play Again';
            againcount++;
            document.getElementById('againcount').innerHTML = againcount;
        } else if (randNum <= 0.55) {
            document.getElementById('output').innerHTML = 'Free Coffee';
            coffeecount++;
            document.getElementById('coffeecount').innerHTML = coffeecount;
        } else if (randNum <= 0.95) {
            document.getElementById('output').innerHTML = 'Free Donut';
            donutcount++;
            document.getElementById('donutcount').innerHTML = donutcount;
        } else {
            document.getElementById('output').innerHTML = 'Grand Prize';
            grandprizecount++;
            document.getElementById('grandprizecount').innerHTML = grandprizecount;
        }

        /// BRITISH COLUMBIA
    } else if (input == 'bc' || input == 'british columbia') {
        randNum = Math.random();
        console.log(randNum);
        if (randNum <= 0.70) {
            document.getElementById('output').innerHTML = 'Please Play Again';
            againcount++;
            document.getElementById('againcount').innerHTML = againcount;
        } else if (randNum <= 0.80) {
            document.getElementById('output').innerHTML = 'Free Coffee';
            coffeecount++;
            document.getElementById('coffeecount').innerHTML = coffeecount;
        } else if (randNum <= 0.90) {
            document.getElementById('output').innerHTML = 'Free Donut';
            donutcount++;
            document.getElementById('donutcount').innerHTML = donutcount;
        } else {
            document.getElementById('output').innerHTML = 'Grand Prize';
            grandprizecount++;
            document.getElementById('grandprizecount').innerHTML = grandprizecount;
        }

        /// SASKATCHEWAN
    } else if (input == 'sk' || input == 'saskatchewan') {
        randNum = Math.random();
        console.log(randNum);
        if (randNum <= 0.70) {
            document.getElementById('output').innerHTML = 'Please Play Again';
            againcount++;
            document.getElementById('againcount').innerHTML = againcount;
        } else if (randNum <= 0.71) {
            document.getElementById('output').innerHTML = 'Free Coffee';
            coffeecount++;
            document.getElementById('coffeecount').innerHTML = coffeecount;
        } else if (randNum <= 0.72) {
            document.getElementById('output').innerHTML = 'Free Donut';
            donutcount++;
            document.getElementById('donutcount').innerHTML = donutcount;
        } else {
            document.getElementById('output').innerHTML = 'Grand Prize';
            grandprizecount++;
            document.getElementById('grandprizecount').innerHTML = grandprizecount;
        }
    }
}

/// function simulate 5 times

function Simulate5() {
    for (let n = 1; n <= 10; n++) {
        SimulateOnce();
    }
}

/// function simulate until a grand prize is won
function Simulategrand() {
    while (grandprizecount < 1) {
        SimulateOnce();
    }
}

/// function simulate until 500 donuts
function Simulate500() {
    while (donutcount < 500) {
        SimulateOnce();
    }
}