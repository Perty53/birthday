window.onload = ()=>{
    let wish_btn = $('#wish-btn');
    
    wish_btn.on('click', (e) =>{
        wish_btn.toggle();
        let init_content = $('#initial-content'),
         main_content = $('#main-content'),
         main_height = main_content.height(),
        init_height = init_content.height()
        newPos = init_height;
        console.log(init_content.html())
        init_content.animate({
            top: newPos
        }, 1200, (e) =>{addNewContent()})
    });    
}

function addNewContent(){
    let birth_form = $('#wishes-form'),
    nameLabel = $('<label for ="name">Saisir le nom de la personne :</label>')
    ;

    birth_form.addClass("formAdjust");
    birth_form.append(nameLabel)
    
}