var colum = document.getElementById("right_colum");

var a = document.getElementById("Objective");
var b = document.getElementById("Summary");
var c = document.getElementById("Skills");
var d = document.getElementById("Experience");
var e = document.getElementById("Education");
var f = document.getElementById("Additional_information");

var obj = {
    Objective:'I want start a career as a junior Front-end developer in company X and maybe in 5 years grow to the team leader',
    Summary: "Опыт работы с хостами на платформах: ESXI, Hyper-V, Proxmox, разворачивании web серверов apache24, ngnix, ISS, поддержка работоспособности, в последнее время верстаю одностраничные сайты на HTML/CSS и немного JS.  Также имею опыт работы c Photoshop.\n .Имею хорошие аналитические способности. Легко обучаюсь. Хорошо работаю в коллективе",
    Skills: "HTML CSS SCSS JS Git MSSQL MySQL Postgress *nix Windows*, server* Bitrix24 Jira QA Core",
    Experience: "System Administrator, Chudo, Factor",
    Education: "KHAI – Engineer Constructor Aircrafts and Helicopters (2007 – 2013)\\n\" +\n" +
    "          Telesens Academy – QA Core (2015)\\n\" +\n" +
    "          NT School – Front-end developer (2018)\\n\" +\n" +
    "          A-Level – Full Stack (but not finished) (2018-2019)",
    Additional_information: "Additional information",
};

var h3 = document.createElement('h3');
var div = document.createElement('div');
var tegP = document.createElement('p');
var ul = document.createElement('ul');
var li = document.createElement('li');
a.onclick = function () {
    colum.innerHTML = "";
    div.className = "Objective";
    tegP.innerText = (obj.Objective);
    h3.innerText = "Objective";
    colum.appendChild(div);
    div.appendChild(h3);
    div.appendChild(tegP);
};

b.onclick = function () {
    colum.innerHTML = "";
    div.className = "Summary";
    tegP.innerText = (obj.Summary);
    h3.innerText = "Summary";
    colum.appendChild(div);
    div.appendChild(h3);
    div.appendChild(tegP);

};

c.onclick = function () {
    colum.innerHTML = "";
    div.className = "Skills";
    colum.appendChild(div);
    div.appendChild(ul);

    // tegP.innerText = (obj.Skills);
    // h3.innerText = "Skills";
    var data = ["Первая строка", "Вторая строка", "n строка"];
        for (var i = 0; i < data.length; i++) {
            li.innerText= data[i];
            ul.appendChild(li);
        }


};

d.onclick = function () {
    colum.innerHTML = "";
    div.className = "Experience";
    tegP.innerText = (obj.Experience);
    h3.innerText = "Experience";
    colum.appendChild(div);
    div.appendChild(h3);
    div.appendChild(tegP);
};

e.onclick = function () {
    colum.innerHTML = "";
    div.className = "Education";
    tegP.innerText = (obj.Education);
    h3.innerText = "Education";
    colum.appendChild(div);
    div.appendChild(h3);
    div.appendChild(tegP);
};

f.onclick = function () {
    colum.innerHTML = "";
    div.className = "Additional_information";
    h3.innerText = "Additional information";
    tegP.innerText = (obj.Additional_information);
    colum.appendChild(div);
    div.appendChild(h3);
    div.appendChild(tegP);
};

