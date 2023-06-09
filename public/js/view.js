function profile()
{
    var isLog = sessionStorage.getItem('logged');
    var name = sessionStorage.getItem('name');
    var email = sessionStorage.getItem('email');
    var sex = sessionStorage.getItem('sex');
    var date = sessionStorage.getItem('date');
    if(isLog == 1){
        const id_name = document.getElementById("name");
        id_name.textContent = name;
        const id_email = document.getElementById("email");
        id_email.textContent = email;
        const id_sex = document.getElementById("sex");
        id_sex.textContent = sex;
        const id_date = document.getElementById("date");
        id_date.textContent = date;
    }
}

