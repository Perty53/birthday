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
    let formContainer = $('#form-container');
    formContainer.append(fetch('../assets/form.html').then(resp => resp.text()).then(rep => formContainer.append(rep)));
   
    formContainer.addClass("formAdjust");
      
}