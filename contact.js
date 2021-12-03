function submitForm() {
    let name = document.getElementById("input-name").value
    let email = document.getElementById("input-email").value
    let phone = document.getElementById("input-phone").value
    let subject = document.getElementById("input-subject").value
    let message = document.getElementById("input-Your_Message").value
    
    if (!name || !email || !phone || !subject || !message) {
        return alert('All input fields must be not empty');
      }

    console.log (name)
    console.log (email)
    console.log (phone)
    console.log (subject)
    console.log (message)

    let receiveMail = "zidanealfarisi3103@gmail.com"

    let a = document.createElement("a");

    a.href = "mailto:" + receiveMail + "?subject=" + subject + "&body=halo nama saya " + name + "," + message
   
    a.click()
}