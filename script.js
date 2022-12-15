function openModal (mn){
    let modal = document.getElementById(mn);

    if(typeof modal == 'undefined' || modal === null)
        return;

        modal.style.display = 'Block';

}

function closeModal (mn){
    let modal = document.getElementById(mn);

    if(typeof modal == 'undefined' || modal === null)
        return;

        modal.style.display = 'none';
}

function submit (){
    swal({
        title: "Candidatura enviada com sucesso.",
        text: "Boa sorte!",
        icon: "success",
      });
}

