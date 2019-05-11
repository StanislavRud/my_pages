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
    Experience: "(2018 - today) System Administrator, GROUP OF COMPANIES «FACTOR»\n" +
        "\n" +
        " - Managed servers, workstations, computers, laptops, printers, routers, switches and existing network applications.\n" +
        " - Conducted daily system health checks.\n" +
        " - Diagnosed and resolved all technical issues related to hardware and software.\n" +
        " - Supported all LAN, WAN and other networking systems.\n" +
        " - Ensured security and integrity of network.\n" +
        " - Performed quarterly audits for the purpose of improving efficiency of systems.\n" +
        " - Initiates backup process, data recoveries and other disaster recovery contingencies.\n" +
        " - Collaborates with Systems Team to create and update security audit measures for all systems.\n" +
        "\n" +
        "(2015 - 2018) System Administrator, Company «CHUDO» \n" +
        "\n" +
        " - Managed servers, workstations, computers, laptops, printers, routers, switches and existing network applications\n" +
        " - Conducted daily system health checks.\n" +
        " - Diagnosed and resolved all technical issues related to hardware and software.\n" +
        " - Supported all LAN, WAN and other networking systems.\n" +
        " - Ensured security and integrity of network.\n" +
        " - Performed quarterly audits for the purpose of improving efficiency of systems.\n" +
        " - Initiates backup process, data recoveries and other disaster recovery contingencies.\n" +
        " - Collaborates with Systems Team to create and update security audit measures for all systems.\"",
    Education: "KHAI – Engineer Constructor Aircrafts and Helicopters (2007 – 2013)\n" +
    "Telesens Academy – QA Core (2015)\n" + "NT School – Front-end developer (2018)\n" +
    "A-Level – Full Stack(2018-2019)",
    Additional_information: "Additional information",
};

var h3 = document.createElement('h3');
var div = document.createElement('div');
var tegP = document.createElement('p');
var ul = document.createElement('ul');

function clear() {
    div.innerHTML="";
    colum.innerHTML = "";
    ul.innerHTML = "";
}

a.onclick = function () {
    clear();
    div.className = "Objective";
    tegP.innerText = (obj.Objective);
    h3.innerText = "Objective";
    colum.appendChild(div);
    div.appendChild(h3);
    div.appendChild(tegP);
};

b.onclick = function () {
    clear();
    div.className = "Summary";
    tegP.innerText = (obj.Summary);
    h3.innerText = "Summary";
    colum.appendChild(div);
    div.appendChild(h3);
    div.appendChild(tegP);

};

var data = ["HTML5/CSS3 (Responsive, Adaptive)", "JavaScript", "Adobe Photoshop", "Version Control/Git", "Win servers", "Linux systems", "Web Servers/apache24, nginx, IIS", "CRM/Jira, Mantis, Bitrix"];

c.onclick = function () {
    clear();
    h3.innerText = "Skills";
    div.className = "Skills";
    colum.appendChild(div);
    div.appendChild(h3);
    div.appendChild(ul);
            for (var i = 0; i < data.length; i++) {
            var li = document.createElement('li');
            li.innerText= data[i];
            ul.appendChild(li);
        }
};


d.onclick = function () {
    clear();
    div.className = "Experience";
    tegP.innerText = (obj.Experience);
    h3.innerText = "Experience";
    colum.appendChild(div);
    div.appendChild(h3);
    div.appendChild(tegP);
};

e.onclick = function () {
    clear();
    div.className = "Education";
    tegP.innerText = (obj.Education);
    h3.innerText = "Education";
    colum.appendChild(div);
    div.appendChild(h3);
    div.appendChild(tegP);
};

f.onclick = function () {
    clear();
    div.className = "Additional_information";
    h3.innerText = "Additional information";
    tegP.innerText = (obj.Additional_information);
    colum.appendChild(div);
    div.appendChild(h3);
    div.appendChild(tegP);
};

