console.log('JS is working!');

//global value for the total monthly amount
let totalMonthlyValue = 0; 
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
                            <td><button data-testid="deleteButton" id="deleteButton" onclick="deleteThis(event)"> Delete
                            </button></td>`


    //select the <tbody> element so we can add our newEmployeeInfo to it! 
    let newEmployeeRow = document.getElementById('tableBody');

    //Manipulate the DOM to add the newEmployeeInfo to the newEmployeeRow using .innerHTML
    newEmployeeRow.innerHTML += newEmployeeInfo;
    
    //clear out the input fields
    document.getElementById('firstName-text').value = '';
    document.getElementById('lastName-text').value = ''
    document.getElementById('id-text').value = '';
    document.getElementById('title-text').value = '';
    document.getElementById('annualSalary-text').value = '';

    //add total monthly amount to the footer element 

    totalMonthlyValue += Number(newAnnualSalary);
    console.log('test for total monthly value', totalMonthlyValue);
}


/**
 * A function to delete a row when the delete button is clicked
 */
function deleteThis(event){
    console.log('you clicked delete this!');
    //create a variable for which button specifically was clicked
    let buttonClicked = event.target;

    //select the button's parent parent element to delete the row 
    let rowToDelete = buttonClicked.parentElement.parentElement;
console.log('this is a test to see if the parent element was captured', rowToDelete );
    //use .remove method to remove the row
    rowToDelete.remove();
}