let todayDate = new Date().toISOString().slice(0, 10);
document.querySelector('#todoDate').setAttribute("min", todayDate)

const addAPI= 'http://localhost:8080/list/add';

let addTodoButton = document.querySelector('#addTodo');

addTodoButton.addEventListener('click', (event) => {
    event.preventDefault();

    const title = document.querySelector('#todoTitle').value
    const description = document.querySelector('#todoDescription').value
    const d = document.querySelector('#todoDate').value;
//    const d = new Date()
//    d = document.querySelector('#todoDate').value
    addNewTODOList(title, description, d);

})

function addNewTODOList(title, description, d)
{
    const formData = new FormData() ;
    formData.append('title', title);
    formData.append('description', description);
    formData.append('targetDate', d);

    fetch(addAPI, {
        method: 'POST',
        body: formData
    })
    .then(function(response) {
        console.log(response.status); // Will show you the status
        if (response.ok) {
            alert("New task added into TO DO LIST")
        }
        else {
           console.log(response);
        }
    })
    .catch((error) => {
        console.error('Error:', error);
        alert("Error adding item to TO DO LIST")
    });
}