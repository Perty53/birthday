window.onload = ()=>{
    let wish_btn = $('#wish-btn');
    
    wish_btn.on('click', (e) =>{
        let init_content = $('#initial-content');

        init_content.animate({
            top: "-=500"
        }, 5000)
    });

    
}

