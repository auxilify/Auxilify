function calculate(){
    var workTypeValue = 0;
    var totalCost=document.getElementById("total-cost");
    var workType = document.getElementById('work-type').value;
    var quantity = Number(document.getElementById('quantity').value);
    var dogg=document.getElementById("dogg");
    if(quantity==420){
        dogg.style.display = "block";
    }
    else {
        dogg.style.display = "none";
    }
    if (workType=="ixl-topics"){
        workTypeValue = 3;
    }
    if (workType=="geometry-nation-test"){
        workTypeValue = 10;
    }
    if (workType=="algebra-nation-test"){
        workTypeValue = 8;
    }
    if (workType=="other"){
        workTypeValue = -1
    }
    if (quantity > 0 && quantity < 100 && workTypeValue > 0){
        totalCost.innerHTML = "$" + Math.round(quantity * workTypeValue);
    }
    else if (workTypeValue==-1){
        totalCost.innerHTML = "Depends";
    }
    else if (quantity==null || quantity==0){
        totalCost.innerHTML = "$0";
    }
    else {
        totalCost.innerHTML = "Not Avaliable";
    }
    

}
function calculateFunction(){
    calculate();
    calculate();
}
function workFormSubmit(workType, workDesc, dueDate, exchangeType, gradeGoal){
    var copyButton = document.getElementById("copy-text-button");
    var copyText = document.getElementById("text-to-copy");
    var text = "Work Type: " + workType + "<br>Work Description: " + workDesc + "<br>Due Date: " + dueDate + "<br>Exchange Type: " + exchangeType + "<br>Grade Goal %: " + gradeGoal;
    copyText.innerHTML = text;
    copyButton.innerHTML = "Copy Text";
    copyButton.style.backgroundColor = "green";
    copyButton.style.cursor = "pointer";
}
function showWorkForm(){
    var container1 = document.getElementById("work-form");
    var container2 = document.getElementById("copy-text-container");
    container1.style.display = "flex";
    container1.style.flexFlow = "column";
    container2.style.display = "none";
}
function showCopyText(){
    var container1 = document.getElementById("copy-text-container");
    var container2 = document.getElementById("work-form");
    container1.style.display = "flex";
    container1.style.flexFlow = "column";
    container2.style.display = "none";
}
function checkInputs(){
    var workType = "";
    var workDesc = "";
    var dueDate = "";
    var exchangeType = "";
    var gradeGoal = "";
    if (document.getElementById("work-form-work-type").value!=""){
        workType = document.getElementById("work-form-work-type").value.trim();
    }
    if (document.getElementById("work-form-work-description").value!=""){
        workDesc = document.getElementById("work-form-work-description").value.trim();
    }
    if (document.getElementById("work-form-due-date").value!=""){
        dueDate = document.getElementById("work-form-due-date").value.trim();
    }
    if (document.getElementById("work-form-exchange-type").value!=""){
        exchangeType = document.getElementById("work-form-exchange-type").value;
    }
    if (document.getElementById("work-form-grade-goal").value!=""){
        gradeGoal = document.getElementById("work-form-grade-goal").value.trim();
    }
    if (workType!="" && workDesc!="" && dueDate!=""){
        if (exchangeType!="none-selected"){
            if (Number(gradeGoal) <= 100 && Number(gradeGoal) >= 1){
                workFormSubmit(workType, workDesc, dueDate, exchangeType, gradeGoal);
                showCopyText();
            }
            else {
                alert("Grade goal % cannot be above 100 or below 1")
            }
        }
        else{
            alert("Exchange type must be selected");
        }
    }
    else{
        alert("All inputs have to be filled out before proceeding.");
    }
}
function copyToClipboard(){
    var workType = document.getElementById("work-form-work-type").value;
    var workDesc = document.getElementById("work-form-work-description").value;
    var dueDate = document.getElementById("work-form-due-date").value;
    var exchangeType = document.getElementById("work-form-exchange-type").value;
    var gradeGoal = document.getElementById("work-form-grade-goal").value;

    var copyButton = document.getElementById("copy-text-button");
    var text = "Work Type: " + workType + "\r\nWork Description: " + workDesc + "\r\nDue Date: " + dueDate + "\r\nExchange Type: " + exchangeType + "\r\nGrade Goal %: " + gradeGoal;
    console.log(text);
    navigator.clipboard.writeText(text)
      .then(() => {
        copyButton.innerHTML = "Copied";
        copyButton.style.backgroundColor = "#2c2c2c";
        copyButton.style.cursor = "default";
      })
      .catch(err => {
        alert('Error in copying text: ', err);
      });
}