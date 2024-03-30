console.log('JS is working!');


/**
 * A function for when the submit button is clicked
 */
function submitClicked(event){
    //prevent the default behavior within the form
    event.preventDefault();

    //select all of the new input values and create new variables for them
    let newFirstName = document.getElementById('firstName-text').value;
    let newLastName = document.getElementById('lastName-text').value;
    let newId = document.getElementById('id-text').value;
    let newTitle = document.getElementById('title-text').value;
    let newAnnualSalary = document.getElementById('annualSalary-text').value;


    //create a variable for the new table row html 
    let newEmployeeInfo =  `<td>${newFirstName}</td>
                            <td>${newLastName}</td>
                            <td>${newId}</td>
                            <td>${newTitle}</td>
                            <td>${newAnnualSalary}</td>
                            <td><button data-testid="deleteButton"> Delete
                            </button></td>;`

    console.log('all of the new values are:', newFirstName, newLastName, newId, newTitle,newAnnualSalary);
    console.log('test for the html with all the new inputs', newEmployeeInfo);
    
}
