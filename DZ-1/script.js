// var table = document.createElement("table");
// var td = document.createElement("td");
// var tr = document.createElement("tr");
// var date1 = document.getElementById("date1");
// var p = document.createElement("p");
// var time = document.getElementById('appt-time');
// date1.appendChild(table);
// table.appendChild(td);
// // for (let i = 1; i < 7; i++ ){
// //     var str = p(i);
// //     td.appendChild(p);
// //     p.innerText = "Custom " + p(i);
// //
// // }
//
// var imgClick = document.getElementById('click_time');
// var clearTime = document.getElementsByClassName('clear_time');
//
// imgClick.onclick = function () {
//     document.getElementById('appt-time').type = 'datetime-local';
//     document.getElementById('appt-time').value = '2019-05-22T08:00';
//     document.getElementById('click_time').src = 'img/checkmark.svg';
//     document.getElementById('click_time').className = 'timeOk';
// };
// clearTime.onclick = function () {
//     document.getElementById('appt-time').value = '';
//     document.getElementById('appt-time2').value = '';
//
// };
// var timeOk = document.getElementsByClassName('timeOk');
// timeOk.onclick = function () {
//     document.getElementById('click_time').className = 'second'
// };
// // timeOk.onclick = function () {
// //     document.getElementById('click_time').className += 'selectedTime';
// //     document.getElementById('click_time').src = 'img/edit.svg';
// // };
//
//



var taskInput=document.getElementById('new-task');
var addButton=document.getElementById('add-task');
var incompleteTaskHolder=document.getElementById("incomplete-tasks");//ul of #incomplete-tasks
var completedTasksHolder=document.getElementById("completed-tasks");//completed-tasks


var ul = document.getElementById('newTasks');




var addTasks = document.getElementById('tasks');

addButton.onclick = function () {
    var li = document.createElement('li');
    var tegp = document.createElement('p');
    var nameTask = document.getElementById('new-task').value;
    var dateRunTask = document.getElementById('date-task').value;
    var timeStartTask = document.getElementById('time-start').value;
    var timeEndTask = document.getElementById('time-end').value;
    var createNameTask = document.createTextNode(nameTask);
    var createStartTask = document.createTextNode(timeStartTask);
    var createEndTask = document.createTextNode(timeEndTask);
    var createDateTask = document.createTextNode(dateRunTask);
    ul.appendChild(li);
    li.appendChild(tegp);
     // tegp.innerText.createNameTask;
    // tegp.appendChild(createDateTask);


    // var t = document.createTextNode(nameTask);
    // tegp.innerText = t;
    // tegp.appendChild(document.createTextNode(nameTask));
    // tegp.appendChild(document.createTextNode(dateRunTask));
    // tegp.appendChild(document.createTextNode((nameTask.value) + (dateRunTask.value) + (timeStartTask.value) +
    //     (timeEndTask.value)));
    // tegp.appendChild(document.createTextNode(dateRunTask.value));

    document.getElementById('new-task').value = '';
    // document.getElementById('date-task').value = '';
    // document.getElementById('time-start').value = '';
    // document.getElementById('time-end').value = '';
};