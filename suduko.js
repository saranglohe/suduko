var board = [
    "--74916-5",
    "2---6-3-9",
    "-----7-1-",
    "-586----4",
    "--3----9-",
    "--62--187",
    "9-4-7---2",
    "67-83----",
    "81--45---"
]

var solution = [
    "387491625",
    "241568379",
    "569327418",
    "758619234",
    "123784596",
    "496253187",
    "934176852",
    "675832941",
    "812945763"
]

let selectedNumber = null;
let err = 0;
document.querySelector('h3').innerText = err;

function main() {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            let div = document.createElement('div');
            div.id = i.toString() + ',' + j.toString();
            div.addEventListener('click', clickDigit);
            if (i == 2 || i == 5) {
                div.classList.add('horz');
            }
            if (j == 2 || j == 5) {
                div.classList.add('vert');
            }

            if (board[i][j] !== '-') {
                div.innerText = board[i][j];
                div.classList.add('teal');
            }

            document.querySelector('#grid').append(div);

            let sol = document.querySelector('button');
            sol.style.cursor = 'pointer';
            sol.addEventListener('click', () => {
                div.innerText = solution[i][j];
            })
        }
    }

    for (let i = 1; i <= 9; i++) {
        let div = document.createElement('div');
        div.innerText = i;
        div.style.cursor = 'pointer';

        div.addEventListener('click', (event) => {
            if (selectedNumber !== null) {
                selectedNumber.classList.remove('grey');
            }
            selectedNumber = event.target
            div.classList.add('grey');
        })

        document.querySelector('#number').append(div);
    }
}

main();

function clickDigit() {
    // if(selectedNumber == null || this.innerText !== '') {
    //     return;
    // }
    // this.innerText = selectedNumber.innerText;

    // or

    const temp = this.id.split(',') // [0,0]
    const i = Number(temp[0]);
    const j = Number(temp[1]);

    if (this.innerText == '' && selectedNumber !== null && selectedNumber.innerText === solution[i][j]) {
        this.innerText = selectedNumber.innerText;
    }
    else if (this.innerText == '' && selectedNumber !== null) {
        err++;
        document.querySelector('h3').innerText = err;
    }
}