const btnMobile = document.getElementById('btn_mobile');

function toggleMenu(){
    const dadRow2 = document.getElementById('dadRow2');
    const list    = document.getElementById('list');
    //se não existir, cria. se existir, deleta
    dadRow2.classList.toggle('active');
    list.classList.toggle('activeL');
}



btnMobile.addEventListener('click', toggleMenu);