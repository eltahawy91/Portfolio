function SendMail() {
  var params = {
    from_name: document.getElementById("FullName").value,
    email_id: document.getElementById("EmailAddress").value,
    subject: document.getElementById("Subject").value,
    message: document.getElementById("Message").value,
  };
  emailjs
    .send("service_ihuheo8", "template_pdx9cjf", params)
    .then(function (res) {
      alert("Success!" + res.status);
    });
}
