// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  //created an array of new employees
  const employeesArray = [];
  // used addEventListener so that users can interact with "Add Employees" button and start adding empolyees 
  addEmployeesBtn.addEventListener('click', collectEmployees);
  // this is used to start and exit the while loop 
  let addEmployees = true;

  while(addEmployees) {
    // ask user for first name
    let userFirst = window.prompt("Enter First Name: ");
    // if no first name then exit while loop  
    if(!userFirst) {
      return;
    }
    // ask user for last name
    let userLast = window.prompt("Enter Last Name: ");
    // if no last name then exit while loop
    if(!userLast) {
      return;
    }
    //ask user for Salary, used Number() to make sure it is a number
    let userSalary = Number(window.prompt("Enter Salary: "));
    //if user input is not a number then it will tell the user that it is not a number
    if(isNaN(userSalary)) {
      return window.alert("This is not a number");
    }
    //creating a new object called newEmployee with user input
    let newEmployee = {firstName: userFirst, lastName: userLast, salary: userSalary};
    //pushing the object into the array
    employeesArray.push(newEmployee);
    //asking the user if they wish to add more employees so that more employees can get added to the array
    addEmployees = window.confirm("Do you want to add another employee?"); 
  }
    //returning the array of objects
    return employeesArray;
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  //creating a total to add all salaries together
  let total = 0;
  //using a for loop to access all employees' salaries and add them to the total
  for(let i=0; i < employeesArray.length; i++) {
    total += employeesArray[i].salary;
  }
  //finding the average by dividing the total salary amount by the amount of employees
  let average = (total / employeesArray.length);
  //returning the average salary
  return console.log(`The average salary between our ${employeesArray.length} employee(s) is $${average}`);

}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  //used math.random() to help choose a random employee and math.floor to round down to an integer
  const randomEmployee = Math.floor(Math.random() * employeesArray.length);
  //using the randomEmployee number to choose from the employeesArray
  const choice = employeesArray[randomEmployee];
  //storing the winner's first name
  const winnerName = choice.firstName;
  //returning a message with the winner
  return console.log(`congratulations to ${winnerName} , for winning random drawing.`);
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
