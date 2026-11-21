document.getElementById('signup-form').addEventListener('submit',function(event){
    // prevents moving to a different page and http submit
    event.preventDefault();

    const personname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    // Ensure the ID is unique from the name
    const password = document.getElementById('pass').value;
    const age = document.getElementById('age').value;
    const birthdate = document.getElementById('bdate').value;
    const message = document.getElementById('message');

    if (!personname || !email){
        alert("You need a name and an email.");
        return;
    }
    if(!age || age < 18 || age > 110){
        alert("Submitted age must be between 18 and 110.");
        return;
    }
    if(!password || password.length < 5){
        alert("You need to create a password with at least 5 characters.");
        return;
    }
    const formData = {
        name: personname,
        email: email,
        password: password,
        age: age,
        birthdate: birthdate
    };
    console.log(formData);
    // js for json message and notifying user of successful submit
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "submit.json", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function (){
        if(xhr.readyState == 4 && xhr.status == 200){
            // Alert('form submitted successfully');
            const response = JSON.parse(xhr.responseText);
            message.textContent = response.message;
            const form = document.getElementById('signup-form');
            form.reset();
            alert("Form Submitted");
        }else if(xhr.readyState == 4){
            alert('Error submitting form');
        }
    };
    xhr.send(JSON.stringify(formData));
    // alert('Success: ${firstName} ${lastName}');
});