let next = document.getElementById('next');
let nilai = document.getElementById('nilai');
let total = document.getElementById('total');
let turun = document.getElementById('turun');
let count = 0;
let scoreCount = 0;
let durasi = 0;
let quest = document.querySelectorAll('.quest');
let answer = document.querySelectorAll('.quest .answer input');

next.addEventListener('click', function(){
    step();
    durasi = 5;
});

answer.forEach(function(answerSingle){
    answerSingle.addEventListener('click', function(){
        setTimeout(function(){
            step();
            durasi = 5;
        },500)

        let valid = this.getAttribute("valid");
        if(valid == "valid"){
            scoreCount += 20;
            nilai.innerHTML = scoreCount;
            total.innerHTML = scoreCount;
        }
    })
});

function step() {
    count += 1;
    for(let i = 0; i < quest.length; i++){
        quest[i].className = 'quest';
    }
    quest[count].className = 'quest active';
    if (count == 5) {
        next.style.display = 'none';
        clearInterval(durasiTime);
        turun.innerHTML = 0;
    }
}

let durasiTime = setInterval(function(){
    if (durasi == 5) {
        durasi = 0;
    }
    durasi +=1;
    turun.innerHTML = durasi;
    if (turun.innerHTML == "5") {
        step();
    }
},1000);