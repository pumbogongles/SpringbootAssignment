const displayAPI = 'http://localhost:8080/list/all';

let infoController = [];
displayInfo();

function displayInfo() {

//fetch data from database using the REST API endpoint from Spring Boot
          fetch(displayAPI)
              .then((resp) => resp.json())
              .then(function(data) {
                  console.log("2. receive data")
                  console.log(data);
                  data.forEach(function (list) {

                      const listObj = {
                          id: list.id,
                          title: list.title,
                          description: list.description,
                          targetDate: list.targetDate
                     };
                     //This array consists of 12 objects
                      infoController.push(listObj);
                });
                  //Display all the 12 objects from the productController array
                renderInfoPage();
              })
              .catch(function(error) {
                  console.log(error);
              });
}

function renderInfoPage() {

let display = `<table class="table table-striped mb-5" style="border:1px solid #ddd">
                 <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Target Date</th>
                 </tr>`;

   for (let i = 0; i < infoController.length; i++ ) {
       display += `
       <tr>
           <td>${infoController[i].title}</td>
           <td>${infoController[i].description}</td>
           <td>${infoController[i].targetDate}</td>
       </tr>
       `
          }
          display += `</table>`;
          document.querySelector("#contentID").innerHTML= display;

       } //End of renderProductPage function
