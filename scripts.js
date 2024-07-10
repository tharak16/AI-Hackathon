document.addEventListener('DOMContentLoaded', function() {
    const problemForm = document.getElementById('problemForm');
    const nominateForm = document.getElementById('nominateForm');
    const solutionForm = document.getElementById('solutionForm');
    const selectProblem = document.getElementById('selectProblem');
    const selectProblemForSolution = document.getElementById('selectProblemForSolution');

    let problems = [];
     // Prepopulate with some dummy users
     let users = [
        {
            firstName: 'John',
            lastName: 'Doe',
            email: 'john.doe@example.com',
            username: 'john',
            password: '1234'
        },
        {
            firstName: 'Jane',
            lastName: 'Doe',
            email: 'jane.doe@example.com',
            username: 'jane',
            password: '5678'
        }
    ];


    // Handle login form submission
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            const user = users.find(user => user.username === username && user.password === password);
            if (user) {
                window.location.href = 'home.html';
            } else {
                alert('Invalid username or password');
            }
        });
    }

    // Handle signup form submission
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const firstName = document.getElementById('firstName').value;
            const lastName = document.getElementById('lastName').value;
            const email = document.getElementById('email').value;
            const newUsername = document.getElementById('newUsername').value;
            const newPassword = document.getElementById('newPassword').value;

            users.push({
                firstName: firstName,
                lastName: lastName,
                email: email,
                username: newUsername,
                password: newPassword
            });
            alert('Signup successful! Please log in.');
            window.location.href = 'index.html';
        });
    }

    // Handle problem form submission
    if (problemForm) {
        problemForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const problemName = document.getElementById('problemName').value;
            const problemDescription = document.getElementById('problemDescription').value;
            const problemFile = document.getElementById('problemFile').files[0];

            const problem = {
                name: problemName,
                description: problemDescription,
                file: problemFile
            };

            problems.push(problem);
            updateProblemOptions();

            problemForm.reset();
        });
    }

    // Handle nominate form submission
    if (nominateForm) {
        nominateForm.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Problem nominated successfully!');
        });
    }

    // Handle solution form submission
    if (solutionForm) {
        solutionForm.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Solution uploaded successfully!');
        });
    }

    // Update problem options in dropdowns
    function updateProblemOptions() {
        selectProblem.innerHTML = '';
        selectProblemForSolution.innerHTML = '';

        problems.forEach((problem, index) => {
            const option = document.createElement('option');
            option.value = index;
            option.textContent = problem.name;

            selectProblem.appendChild(option);
            selectProblemForSolution.appendChild(option.cloneNode(true));
        });
    }
});
