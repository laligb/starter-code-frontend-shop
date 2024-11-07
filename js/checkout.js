// Exercise 6

function validate(event) {
  event.preventDefault();

  var error = 0;

  // Select all inputs inside the form
  const form = event.target;
  const inputs = form.querySelectorAll("input");

  console.log(inputs);

  // Loop for all inputs. is-valid and is-invalid are bootstrap methods to make inputs red and green.
  inputs.forEach((input) => {
    // Clear previous validation classes
    input.classList.remove("is-valid", "is-invalid");

    if (input.checkValidity()) {
      input.classList.add("is-valid");
    } else {
      input.classList.add("is-invalid");
      error++;
    }
  });

  // Runs alerts on successful or unsuccessfull validation
  if (error > 0) {
    alert("Please correct the errors in the form.");
  } else {
    alert("Form submitted successfully.");
  }
}
