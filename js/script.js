const StudentData = document.getElementById("student-data")
const FirstName = document.getElementById("first-name")
const LastName = document.getElementById("last-name")
const Age = document.getElementById("age")
const students = document.querySelector("#students tbody")
studentArr = []

if (localStorage.getItem("students")) {
    studentArr = JSON.parse(localStorage.getItem("students"));
}else{
    studentArr = []
}
displayItems(studentArr);

StudentData.onsubmit = (e) =>{
    e.preventDefault();
    let uid = Math.floor(Math.random() * 50000)
    let student = {uid:uid ,firstName:FirstName.value ,lastName:LastName.value , age:Age.value};
    studentArr.push(student)
    // add to local storage
    localStorage.setItem("students",JSON.stringify(studentArr))
displaystudent(student);
clearInputs(student);
     
}








// display HTML
displaystudent = (student) =>{
    students.innerHTML += `
    <tr class="text-white">
    <td>${student.firstName}</td>
      <td>${student.lastName}</td>
        <td>${student.age}</td>
          <td><i class="fa fa-trash btn btn-danger" onClick="deleteItem(${student.uid})" id="${student.uid}" ></i></td>
          </tr>
    `
    }
// clear data after set it
function clearInputs(student){
FirstName.value = '';
LastName.value = '';
Age.value = '';
}

// display all items from local storage
function displayItems(arr){
    arr.map((student) =>{
        students.innerHTML += `
        <tr class="text-white">
        <td>${student.firstName}</td>
          <td>${student.lastName}</td>
            <td>${student.age}</td>
              <td><i class="fa fa-trash btn btn-danger" onClick="deleteItem(${student.uid})" id="${student.uid}" ></i></td>
              </tr>`
    })
}
// delete element
deleteItem =(id)=>{
    document.getElementById(id).parentNode.parentNode.remove();
    data = JSON.parse(localStorage.getItem("students"));
    newData = data.filter(item => item.uid !== id);
    localStorage.setItem("students",JSON.stringify(newData))
}
// delete All
clearAll = () =>{
    localStorage.setItem("students",[])
    

}
