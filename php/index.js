Status = document.querySelectorAll(".Status") [0] 
updateStatus = document.getElementById("updateStatus")
SubmitStatus = document.getElementById("SubmitStatus")
SubmitStatus.addEventListener("click", function() {
    Status.textContent = updateStatus.value
})