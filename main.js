let done = 'Done', toDo = 'To Do', inProgress = 'In Progress';

let list = [
    {name:'play a game', status:inProgress, priority:'middle', id:1,},
    {name:'sleep in the bed', status:done, priority:'low', id:2},
    {name:'drink a beer', status:toDo, priority:'high', id:3}
]
function findObj(taskName) { return list.find(item => item.name===taskName)};


function deleteTask(taskName) {
    list.splice(findObj(taskName),1);
    
}

function addTask(taskName) {
    let maxId = list[list.length-1].id+1;
    let obj ={name:taskName, status:toDo, priority:'high', id:maxId};
    list.push(obj);
}

function changeStatus(taskName, newstatus) {
    let obj = findObj(taskName);
    obj.status = newstatus;
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
            console.log('   '+element.name);
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


addTask('became a programmer');
changeStatus('drink a beer', done);
changeStatus('drink a beer', inProgress);
changeStatus('sleep in the bed', toDo);
showList();


