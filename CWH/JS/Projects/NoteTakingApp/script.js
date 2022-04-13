showNotes();

let addBtn = document.getElementById('addBtn');
addBtn.addEventListener("click", function(e){
    let addText = document.getElementById("addText");
    let notes = localStorage.getItem("notes");
    if(notes == null){
        notesObj = [];
    } 
    else{
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addText.value);
    localStorage.setItem("notes",JSON.stringify(notes));
    addText = "";
    showNotes();
});

function showNotes(){
    let notes = localStorage.getItem("notes");
    if(notes == null){
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }
    let html="";
    notesObj.forEach(function(element,index){
        html+=`
        <div class="notecard my-2 mx-2" style="width: 18rem;">
                <div class="card-body">
                  <h5 class="card-title">Card ${index +1}</h5>
                  <p class="card-text">${element}</p>
                  <a href="#" class="btn btn-primary">Delete Note</a>
                </div>`
    });
    let notesElm = document.getElementById('notes');
    if(notes.length != 0){
        notesElm.innerHTML = html;
    }else{
        notesElm.innerHTML = `Nothing to Show!`
    }
}
