//TODO: Add Your Code Below
window.addEventListener("load", function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        response.json().then(function(json){
            const destination = document.getElementById("container");
            let finalString = "";
            for (let x in json) {
                finalString += `<div class="astronaut">
                <div class="bio">
                    <h3>${json[x].firstName} ${json[x].lastName}</h3>
                    <ul>
                    <li>Hours in space: ${json[x].hoursInSpace}</li>
                    <li>Active: ${json[x].active}</li>
                    <li>Skills: ${json[x].skills}</li>
                    </ul>
                </div>
                <img class="avatar" src=${json[x].picture}>
            </div> `
            }
            destination.innerHTML = finalString
            console.log(finalString)

        });
    });
});

