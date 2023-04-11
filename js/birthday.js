//Probleme avec la selection dans les inputs

window.onload = () => {
    let wish_btn = $('#wish-btn');

    wish_btn.on('click', (e) => {
        wish_btn.toggle();
        let init_content = $('#initial-content'),
            main_content = $('#main-content'),
            main_height = main_content.height(),
            init_height = init_content.height()
        newPos = init_height;
        console.log(init_content.html())
        init_content.animate({
            top: newPos
        }, 1200, (e) => { addNewContent() })
    });


}

function addNewContent() {
    let formContainer = $('#form-container');
    formContainer.removeAttr('hidden')
    /*.append(fetch('../assets/form.html').then(resp => resp.text()).then(rep => {
        formContainer.append(rep);*/
        formContainer.addClass("formAdjust");

        let month = $('#birth-month'),
            day = $("#birth-day"),
            year = $("#birth-year");

        setDateValues(day, month, year);

        let input = $('#upload_files'),
            preview = $('.preview');

        input.css('opacity', 0);
        input.on('change', updateDislayImages);
        preview.addClass('formtwo')

        //A Continuer
        function updateDislayImages() {

            while (preview.find(':first').length > 0) {
                //console.log(preview.find(':first').html())
                preview.find(':first').remove()
            }

            currentFiles = input.get(0).files;

            if (currentFiles.length === 0) {
                preview.html('<p>Aucun fichier sélectionné<p>')
            } else {
                let listImg = $('<ol></ol>');
                for (let i = 0; i < currentFiles.length; i++) {
                    let currFile = currentFiles[i];

                    preview.append(listImg);
                    console.log(currFile.type)
                    if (validFileType(currFile)) {
                        console.log("YEESS")
                        let imageItem = $('<li></li>'),
                            params = $('<div class="infos"></div>'),
                            img = $('<img />');
                            imgContainer = $('<div><span class="material-symbols-outlined">open_in_full</span></div>');
                            imgContainer.addClass('containerImg')
                            
                            params.html('<div><p>'+currFile.name + '</p><p>' + fileSize(currFile.size)+'</p></div>');
                            
                            img.attr('src', window.URL.createObjectURL(currFile));
                            
                            imgContainer.css('background-image', 'url('+img.attr('src')+')');

                        imageItem.append(imgContainer);
                        params.appendTo(imageItem);
                        imageItem.appendTo(listImg)

                    } else {
                        alert(currFile.name + ' n\'est pas un fichier de type valide !!!')
                    }
                }
            }
        }

        function fileSize(size) {
            if (size >= 1024 && size < 1048576)
                return (size / 1024).toFixed(1) + ' Ko';

            else if (size >= 1048576)
                return (size / 1048576).toFixed(1) + ' Mo'
            else
                return size + ' o';
        }

        function validFileType(file) {
            const fileTypes = ['image/jpg',
                'image/jpeg',
                'image/png'
            ];

            for (let i = 0; i < fileTypes.length; i++) {
                if (file.type === fileTypes[i])
                    return true;
            }

            return false;

        }
    //}));


    function setDateValues(day, month, year) {
        let months = ['Janvier', "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
            currentdate = new Date(),
            days = (n) => {
                day.html('');
                for (let i = 1; i <= n; i++) {
                    day.html(day.html() + "<option value='" + i + "'" + (i === currentdate.getDate() ? 'selected' : '') + ">" + i + "</option>");
                }
            };
        days(31);
        for (let m = 0; m < months.length; m++) {
            month.html(month.html() + "<option value='" + months[m] + "'" + (m === currentdate.getMonth() ? 'selected' : '') + ">" + months[m] + "</option>");

        }

        for (let as = 1950; as <= 2099; as++) {
            year.html(year.html() + "<option value='" + as + "'" + (as === currentdate.getFullYear() ? 'selected=selected' : '') + ">" + as + '</option>');

            if (as % 400 === 0 || as % 100 !== 0 && as % 4 == 0) {

            }

        }

        month.on('change', () => {
            selectmonth = $('#birth-month option[selected]').html();
            console.log(selectmonth)
            if (selectmonth === "Février") {
                day(28);
            } else if (month === "Avril" || month === "Juin" || month === "Septembre" || month === "Novembre") {
                days(30);
            } else {
                days(31);
            }
        })

    }




}