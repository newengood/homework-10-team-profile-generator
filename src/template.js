// generate manager div
const generateManager = (answers) => {
  return `
  <div class="col-md-4">
    <div class="card mb-4 box-shadow">
      <div class="card-body">
        <div class="container">
          <h1 class="display-4">Name: ${answers.name} </h1>
          <h3>Title: Manager</h3>
          <ul class="list-group">
            <li class="list-group-item">ID: ${answers.id} </li>
            <li class="list-group-item">Email: <a href="mailto:${answers.email}"> ${answers.email}</a></li>
            <li class="list-group-item">Office Number: ${answers.officeNumber} </li>
          </ul>
        </div>
      </div>
    </div>
  </div>`
}

// generate engineer div
const generateEngineer = (answers) => {
  return `
  <div class="col-md-4">
    <div class="card mb-4 box-shadow">
      <div class="card-body">
        <div class="container">
          <h1 class="display-4">Name: ${answers.name} </h1>
          <h3>Title: Engineer </h3>
          <ul class="list-group">
            <li class="list-group-item">ID: ${answers.id} </li>
            <li class="list-group-item">Email: <a href="mailto:${answers.email}"> ${answers.email}</a> </li>
            <li class="list-group-item">Github: <a href="https://www.github.com/${answers.github}"target="_blank">${answers.github}<a/></li>
          </ul>
        </div>
      </div>
    </div>
  </div>`
}

// generate intern div
const generateIntern = (answers) => {
  return `
  <div class="col-md-4">
    <div class="card mb-4 box-shadow">
      <div class="card-body">
        <div class="container">
          <h1 class="display-4">Name: ${answers.name} </h1>
          <h3>Title: Intern </h3>
          <ul class="list-group">
            <li class="list-group-item">ID: ${answers.id} </li>
            <li class="list-group-item">Email: <a href="mailto:${answers.email}"> ${answers.email}</a> </li>
            <li class="list-group-item">School: ${answers.school} </li>
          </ul>
        </div>
      </div>
    </div>
  </div>`
}


// generate HTML

const generateHTML = (divs) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <title>Team Profile Generator</title>
  </head>
  <body>
    <div class="jumbotron text-center">
      <h1>My Team</h1> 
    </div>
    <div class="album py-5 bg-light">
      <div class="container">
      <div class="row">
        ${divs}
      </div>
    </div>
</div>
</body>
</html>`;
};

// Join the created divs into an array
const joinDivs = (employees) => {

  divs = [];

  for (let i = 0; i < employees.length; i++) {
    const employee = employees[i];
    const role = employee.getRole();
    if (role === "manager") {
      const managerDiv = generateManager(employee);
      divs.push(managerDiv);
    }
    else if (role === "engineer") {
      const engineerDiv = generateEngineer(employee);
      divs.push(engineerDiv);
    }
    else if (role === "intern") {
      const internDiv = generateIntern(employee);
      divs.push(internDiv);
    };
  };
  // add the div array into the html page
  const finalHTML = generateHTML(divs);
  return finalHTML;
};


module.exports = joinDivs;