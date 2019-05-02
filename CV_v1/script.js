var colum = document.getElementById("right_colum");

var a = document.getElementById("Objective");
var b = document.getElementById("Summary");
var c = document.getElementById("Skills");
var d = document.getElementById("Experience");
var e = document.getElementById("Education");
var f = document.getElementById("Additional_information");

a.onclick = function () {
    colum.innerHTML = "";
    colum.innerHTML += ("<p>I want start a career as a junior Front-end developer in company X and maybe in 5 years grow to the team leader</p>");
};

b.onclick = function () {
    colum.innerHTML = "";
    colum.innerHTML +=("<p>Опыт работы с хостами на платформах ESXI, Hyper-V, Proxmox, разворачивании web серверов apache24, ngnix, ISS, поддержка работоспособности, в последнее время верстаю одностраничные сайты на HTML/CSS и немного JS.  Также имею опыт работы c Photoshop.\n" +
        "                    Имею хорошие аналитические способности. Легко обучаюсь. Хорошо работаю в коллективе</p>")

};
c.onclick = function () {
    colum.innerHTML = "";
    colum.innerHTML +=("<p>HTML CSS SCSS JS Git MSSQL MySQL Postgress *nix Windows*, server* Bitrix24 Jira QA Core </p>")
};




