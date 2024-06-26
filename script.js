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
    //update the <span>'s text content and divide annualSalary by 12 to get the monthly total 
    totalMonthlyValue += Number(newAnnualSalary)/12;
    console.log('test for total monthly value', totalMonthlyValue);

    //update the #monthlyCount <span>: 
    // select the <span>
    let monthlyCount = document.getElementById('monthlyCount')
    console.log('test to see if monthly count was selected', monthlyCount)
    
    
    //console.log('test for total monthly value', totalMonthlyValue);
    monthlyCount.textContent = (totalMonthlyValue);

    //select the footer element by class 
    let footer = document.getElementById('footer');
    console.log('this is a test to verify footer element selection', footer);

    //conditional for the totalMonthlyValue over 20000
    if(totalMonthlyValue > 20000){
        console.log('test for overbudget conditional', footer);
        
        //implement footer color class toggle 
    footer.classList.toggle("over-budget");

     }

}


/**
 * A function to delete a row when the delete button is clicked
 */
function deleteThis(event){
    //create a variable for which button specifically was clicked
    let buttonClicked = event.target;

    //select the button's parent parent element to delete the row 
    let rowToDelete = buttonClicked.parentElement.parentElement;

    //use .remove method to remove the row
    rowToDelete.remove();
}


 
