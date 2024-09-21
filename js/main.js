
var myInput = document.getElementById('myInput');
var myTable = document.getElementById('myTable');
var myList = [];
console.log(myInput);

if(localStorage.getItem('myTasks')!= null){
    myList = JSON.parse(localStorage.getItem('myTasks'));
    showData(myList);
}


function addTask(){
    console.log(myInput.value);
    myList.push(myInput.value);
    localStorage.setItem("myTasks",JSON.stringify(myList));
    console.log(myList);
    clearInput();
    showData(myList);
}

function clearInput(){
    myInput.value = ''
}

function showData(arr){
    var x = '';

    for(var i=0 ; i< arr.length ;i++){
        x+= `
        <tr class="bg-white d-flex justify-content-between p-2 mt-3 rounded-2">
            <td>${arr[i]}</td>
            <td><button onclick='deleteTask(${i})' class="btn btn-outline-danger"> <i class="fa-solid fa-trash"></i> delete</button></td>
        </tr>
        `
    }
    myTable.innerHTML= x;
}

function deleteTask(index){
    myList.splice(index,1);
    localStorage.setItem("myTasks",JSON.stringify(myList));
    showData(myList);
}
