var colum = document.getElementById("right_colum");

var a = document.getElementById("Objective");
var b = document.getElementById("Summary");
var c = document.getElementById("Skills");
var d = document.getElementById("Experience");
var e = document.getElementById("Education");
var f = document.getElementById("Additional_information");

var obj = {
    Objective:'I want start a career as a junior Front-end developer in company X and maybe in 5 years grow to the team leader',
    Summary: "Опыт работы с хостами на платформах ESXI, Hyper-V, Proxmox, разворачивании web серверов apache24, ngnix, ISS, поддержка работоспособности, в последнее время верстаю одностраничные сайты на HTML/CSS и немного JS.  Также имею опыт работы c Photoshop.\n .Имею хорошие аналитические способности. Легко обучаюсь. Хорошо работаю в коллективе",
    Skills: "HTML CSS SCSS JS Git MSSQL MySQL Postgress *nix Windows*, server* Bitrix24 Jira QA Core",
    Experience: "System Administrator, Chudo, Factor",
    Education: "KHAI – Engineer Constructor Aircrafts and Helicopters (2007 – 2013)\\n\" +\n" +
    "          Telesens Academy – QA Core (2015)\\n\" +\n" +
    "          NT School – Front-end developer (2018)\\n\" +\n" +
    "          A-Level – Full Stack (but not finished) (2018-2019)",
    Additional_information: "Additional information",
};

var div = document.createElement('div');

a.onclick = function () {
    colum.innerHTML = "";
    div.className = "Objective";
    div.innerText = (obj.Objective);
    colum.insertBefore(div, colum.firstChild);
};

b.onclick = function () {
    colum.innerHTML = "";
    div.className = "Summary";
    div.innerText = (obj.Summary);
    colum.insertBefore(div, colum.firstChild);
};

c.onclick = function () {
    colum.innerHTML = "";
    div.className = "Skills";
    div.innerText = (obj.Skills);
    colum.insertBefore(div, colum.firstChild);
};

d.onclick = function () {
    colum.innerHTML = "";
    div.className = "Experience";
    div.innerText = (obj.Experience);
    colum.insertBefore(div, colum.firstChild);
};

e.onclick = function () {
    colum.innerHTML = "";
    div.className = "Education";
    div.innerText = (obj.Education);
    colum.insertBefore(div, colum.firstChild);
};

f.onclick = function () {
    colum.innerHTML = "";
    div.className = "Additional_information";
    div.innerText = (obj.Additional_information);
    colum.insertBefore(div, colum.firstChild);
};
//
// a.onclick = function () {
//     colum.innerHTML = "";
//     // var div = document.createElement('div');
//     // div.className("Objective2");
//     colum.innerHTML += (obj.Objective);
// };

// b.onclick = function () {
//     colum.innerHTML = "";
//     colum.innerHTML +=("<p>Опыт работы с хостами на платформах ESXI, Hyper-V, Proxmox, разворачивании web серверов apache24, ngnix, ISS, поддержка работоспособности, в последнее время верстаю одностраничные сайты на HTML/CSS и немного JS.  Также имею опыт работы c Photoshop.\n" +
//         "                    Имею хорошие аналитические способности. Легко обучаюсь. Хорошо работаю в коллективе</p>")
//
// };
// c.onclick = function () {
//     colum.innerHTML = "";
//     colum.innerHTML +=("<p>HTML CSS SCSS JS Git MSSQL MySQL Postgress *nix Windows*, server* Bitrix24 Jira QA Core </p>");
// };
//
// d.onclick = function () {
//     colum.innerHTML = "";
//     colum.innerHTML +=("<p>System Administrator, Chudo, Factor</p>");
// };
//
// e.onclick = function () {
//     colum.innerHTML = "";
//     colum.innerHTML +=("<p>KHAI – Engineer Constructor Aircrafts and Helicopters (2007 – 2013)\n" +
//         "                    Telesens Academy – QA Core (2015)\n" +
//         "                    NT School – Front-end developer (2018)\n" +
//         "                    A-Level – Full Stack (but not finished) (2018-2019)</p>");
// };
//
// f.onclick = function () {
//     colum.innerHTML = "";
//     colum.innerHTML +=("<p>Additional information</p>");
// };


