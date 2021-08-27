function insert(num){
    document.getElementById('result').innerHTML += num;
}

function clean(){
    document.getElementById('result').innerHTML = null;
}

function cleanLast(){
    document.getElementById('result').innerHTML = document.getElementById('result').innerHTML.slice(0,-1);
}

function calcular(){
    const result = document.getElementById('result').innerHTML;
    if(result) document.getElementById('result').innerHTML = eval(result);
}
