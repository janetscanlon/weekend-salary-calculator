console.log('JS is working!');


/**
 * A function for when the submit button is clicked
 */
function submitClicked(event){
    //prevent the default behavior within the form
    event.preventDefault();

    let newFirstName = document.getElementById('firstName-text').value;
    console.log('this is the new First Name', newFirstName);
}
