var colum = document.getElementById("right_colum");

var a = document.getElementById("Objective");
var b = document.getElementById("Summary");
var c = document.getElementById("Skills");
var d = document.getElementById("Experience");
var e = document.getElementById("Education");
var f = document.getElementById("Additional_information");

var obj = {
    Objective:"I want to change the direction of my life and start a career as a junior Front-end developer in " +
        "company and maybe in 5 years grow to the team leader",
    Summary: "I have more than 3 years of experience with hosts on platforms: ESXI, Hyper-V, Proxmox, about 1.5 years" +
        " of deployment of web servers on apache24, ngnix, ISS, and their support. Introduced jira CRM system to support" +
        " users by developers. Launched corporate mail, ip-telephony. Physical servers of the company were transferred" +
        " to virtual ones. Configured the monitoring system. Debugged the servers.\n" +
        "In my spare time I create one-page sites according to layouts. And I constantly improve my skills in site development.\n" +
        "I have an understanding and a small experience of working with assemblers Gulp, Webpack, Grunt.\n" +
        "Have experience with Photoshop.",
    Experience: "(2018 - today) System Administrator, GROUP OF COMPANIES «FACTOR»\n" +
        "\n" +
        " - Server management, workstations, routers, switches and existing network applications.\n" +
        " - Monitoring and daily system checks.\n" +
        " - Diagnostics and solution of all technical problems related to hardware and software.\n" +
        " - Support for all network systems LAN, WAN.\n" +
        " - Ensuring network security and integrity.\n" +
        " - Backup, data recovery in case of failures or other situations, system and data recovery.\n" +
        "\n" +
        "(2015 - 2018) System Administrator, Chain of supermarkets «CHUDO» \n" +
        "\n" +
        " - Server management, workstations, computers, laptops, printers, routers, switches and existing network applications.\n" +
        " - Monitoring and daily system checks.\n" +
        " - Diagnose and solve all technical problems related to hardware and software.\n" +
        " - Laying, construction, support of all network systems LAN, WAN.\n" +
        " - Ensuring security and integrity of the network.\n" +
        " - Backup, data recovery in case of failures or other situations, system and data recovery.\n" +
        " - Opening of new branches, shops.\n" +
        " - Connecting and configuring commercial equipment.\n" +
        " - Remote user support.\n" +
        " - Working with users.\n" +
        " - Tenders and contracts with equipment suppliers.",
    Education: "KHAI – (2007 – 2011)\n" +
        "Bachelor - Engineer Constructor Aircrafts and Helicopters\n"+
        "\n"+
        "KHAI – (2011 – 2013)\n" +
        "Specialist - Aircraft Testing and Certification\n" +
        "\n"+
        "Telesens Academy – (2015)\n" +
        "QA Core (manual testing WEB,mobile,desktop, check-list, test-cases, bag-report)\n" +
        "\n"+
        "NT School – Front-end developer (2018)\n" +
        "HTML5/CSS3/SCSS/Flex-box/Grid CSS\n" +
        "In practice, I made one-page websites on PSD layouts and uploaded to hosting (no js, just HTML + CSS)\n"+
        "\n"+
        "A-Level – Full Stack(2018-2019)\n"+
        "HTML5/CSS3/Flex-Box/JS/Git\n"+
        "In practice, I made one-page websites on PSD layouts and uploaded to hosting",
    Additional_information: "I am currently working as a system administrator, but I really want to change my profession" +
        " and start a career as a front-end developer. In my spare time I improve my skills in development, create" +
        " one-page sites according to the layouts. Watching JS lessons, learning English.\n" +
        "- Quickly learning\n" +
        "- Fulfillment of tasks in good faith\n" +
        "- Initiative\n" +
        "- Executive\n" +
        "- Punctual\n" +
        "- Hard-working\n" +
        "- Responsible\n" +
        "- There is a great desire to learn new things and develop\n" +
        "\n" +
        "Marital status: Married.\n" +
        "\n" +
        "Hobby: I like to pick mushrooms, walk kayaks, ride bicycles, drive a car.\n" +
        "\n" +
        "Languages:\n" +
        "English pre-intermediate",
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

var data = ["HTML5/CSS3 (Responsive, Adaptive)", "JavaScript", "Adobe Photoshop", "Version Control (Git)", "Virtualizations (VMware Workstation, Hiper-V, Proxmox, ESXI)", "Active network equipment (MikroTik, Ubiquiti, Fortigate, HP)", "Win servers", "Linux systems", "Web Servers (apache24, nginx, IIS)", "Database (MS SQL, MySQL, PostgreSQL)", "CRM (Jira, Mantis, Bitrix24, 1C)"];

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
    h3.innerText = "Work Experience";
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

