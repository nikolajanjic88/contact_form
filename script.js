const form = document.querySelector("form"),
statusTxt = document.querySelector(".button-area span")

form.onsubmit = (e) => {
    e.preventDefault()
    statusTxt.style.display = "block"
    statusTxt.style.color = "#0D6EFD";

    let xhr = new XMLHttpRequest()
    xhr.open("POST", "message.php", true)
    xhr.onload = () => {
        if(xhr.readyState == 4 && xhr.status == 200) {
            let response = xhr.response
            //console.log(response)
            if(response.indexOf("Email and message required") != -1 || response.indexOf("Invalid email") != -1 || response.indexOf("Sorry, failed to send your message") != -1) {
                statusTxt.style.color = "red";
            } else {
                form.reset()
                setTimeout(() => {
                    statusTxt.style.display = "none"
                }, 3000)
            }
            statusTxt.innerText = response
        }
    }
    let formData = new FormData(form)
    xhr.send(formData)
}
