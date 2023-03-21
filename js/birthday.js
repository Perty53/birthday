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
    formContainer.append(fetch('../assets/form.html').then(resp => resp.text()).then(rep => {
        formContainer.append(rep);
        formContainer.addClass("formAdjust");

        let month = $('#birth-month'),
            day = $("#birth-day"),
            year = $("#birth-year");

        setDateValues(day, month, year);


    }));


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
            year.html(year.html() + "<option value='" + as + "'" + (as === currentdate.getFullYear() ? 'selected' : '') + ">" + as + '</option>');

            if (as % 400 === 0 || as % 100 !== 0 && as % 4 == 0) {

            }

        }

        month.on('change', ()=>{
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

