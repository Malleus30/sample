let done = 'Done', toDo = 'To Do', inProgress = 'In Progress';

let list = [
    {name:'play a game', status:inProgress, priority:'middle', id:1,},
    {name:'sleep in the bed', status:done, priority:'low', id:2},
    {name:'drink a beer', status:toDo, priority:'high', id:3}
]


function findObjName(taskName) { return list.find(item => item.name===taskName)};
function findObjId(taskId) {return list.findIndex(item=>item.id===taskId)};



function deleteTask(taskId) {
   list.splice(findObjId(taskId),1);
}



function addTask(taskName) {
    let maxId = list[list.length-1].id+1;
    let obj ={name:taskName, status:toDo, priority:'high', id:maxId};
    list.push(obj);
}

function changeStatus(taskName, newStatus) {
    let obj = findObjName(taskName);
    obj.status = newStatus;
    if(obj.status===done) {
        obj.priority = 'low';
    }else if(obj.status===inProgress){
        obj.priority='middle';
    }
}

function loop(searchedStatus){
    let count = 0;
    list.forEach(element => {
        if(element.status===searchedStatus) {
            console.log(`   name of the task: ${element.name}. Id of the task - ${element.id} `);
        count++;
        }
    });
    if(!count) console.log("    -");
}

function showList(){
    console.log(toDo+':');
    loop(toDo);
    console.log(inProgress+':');
    loop(inProgress);
    console.log(done+':');
    loop(done);
}

changeStatus('play a game', inProgress);
deleteTask(3);
addTask('cook something');

showList();


