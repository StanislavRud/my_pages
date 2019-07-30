var colum = document.getElementById("right_colum");

var a = document.getElementById("Objective");
var b = document.getElementById("Summary");
var c = document.getElementById("Skills");
var d = document.getElementById("Experience");
var e = document.getElementById("Education");
var f = document.getElementById("Additional_information");

var obj = {
    Objective:"I want to change my professional life, starting a career as a Junior Front-End Developer in company, " +
        "and maybe in 5 years grow to the team leader",
    Summary: "I have more than 3 years of experience working with hosts on such platforms as: ESXI, Hyper-V, Proxmox;" +
        " about 1.5 years of experience deploying web servers on Apache24, Ngnix, ISS, and their support." +
        " Introduced Jira CRM system to provide user support from developers. Launched a corporate mail, " +
        "IP telephony. Physical servers of the company were transferred to virtual ones. Configured the monitoring " +
        "system. Debugged the servers. Worked with servers as Supermicro, Dell, IBM, Cloud QNAP.\n" +
        "In my spare time, I create single-page websites according to layouts. Also, I constantly improve my skills" +
        " in website development.\n" +
        "I have an understanding and basic experience working with such assemblers as Gulp, Webpack, Grunt.\n" +
        "Have experience with Adobe Photoshop",
    Experience: "(2018 - today) System Administrator, GROUP OF COMPANIES «FACTOR»\n" +
        "\n" +
        " - Server management, workstations, routers, switches and existing network applications.\n" +
        " - Monitoring and daily system checks.\n" +
        " - Diagnostics and resolving various technical issues related to hardware and software.\n" +
        " - Support for all network systems LAN, WAN.\n" +
        " - Ensuring network security and integrity.\n" +
        " - Backup, data recovery in case of failures or other situations, system and data recovery.\n" +
        "\n" +
        "(2015 - 2018) System Administrator, Chain of supermarkets «CHUDO» \n" +
        "\n" +
        " - Server management, workstations, computers, laptops, printers, routers, switches and existing network applications.\n" +
        " - Monitoring and daily system checks.\n" +
        " - Diagnostics and resolving various technical issues related to hardware and software.\n" +
        " - Laying, construction, support of all network systems LAN, WAN.\n" +
        " - Ensuring security and integrity of the network.\n" +
        " - Backup, data recovery in case of failures or other situations, system and data recovery.\n" +
        " - Opening new branches, shops.\n" +
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
        "In practice, I made single-page websites using PSD layouts and uploaded to a server (no JS, just HTML + CSS)\n"+
        "\n"+
        "A-Level – Full Stack(2018-2019)\n"+
        "HTML5/CSS3/Flex-Box/JS/Git\n"+
        "In practice, I made single-page websites using PSD layouts and uploaded to a server",
    Additional_information: "Currently I am working as a System Administrator, but I really want to change my profession" +
        " and start a career as a Front-End Developer. In my spare time, I improve my skills in development, creating" +
        " single-page websites according to the layouts. Watching JS lessons, learning English.\n" +
        "- Quick learner\n" +
        "- Good-faith task fulfillment\n" +
        "- Initiative\n" +
        "- Executive\n" +
        "- Punctual\n" +
        "- Hard-working\n" +
        "- Responsible\n" +
        "- There is a great desire to learn new things and develop\n" +
        "\n" +
        "Hobby: picking mushrooms, kayaking, ridingle bicycles, drivingle and tuning a car.\n"
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

var data = ["HTML5/CSS3 (Responsive, Adaptive)", "JavaScript", "Adobe Photoshop", "Version Control (Git)", "Virtualizations (VMware Workstation, Hiper-V, Proxmox, ESXI)", "Active network equipment (MikroTik, Ubiquiti, Fortigate, HP)", "Windows servers", "Linux systems", "Web Servers (Apache24, Nginx, IIS)", "Database (MS SQL, MySQL, PostgreSQL)", "CRM (Jira, Mantis, Bitrix24, 1C)", "Hardware (Supermicro, Dell, IBM, QNAP)"];

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

