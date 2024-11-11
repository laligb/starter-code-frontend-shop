// Exercise 6

function validate(event) {
  event.preventDefault();

  var error = 0;
  const form = event.target;
  const inputs = form.querySelectorAll("input");

  inputs.forEach((input) => {
    input.classList.remove("is-valid", "is-invalid");

    if (input.checkValidity()) {
      input.classList.add("is-valid");
    } else {
      input.classList.add("is-invalid");
      error++;
    }
  });

  if (error > 0) {
    alert("Please correct the errors in the form.");
  } else {
    alert("Form submitted successfully.");
  }
}
