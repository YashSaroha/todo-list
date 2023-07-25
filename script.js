let btn = document.getElementById("addNewBtn")
let todos = document.getElementsByClassName("todos")[0]
let i = 1;

for(let x=1 ; x<=localStorage.length ; x++)
{
    let p = document.createElement("p")
    p.innerHTML = localStorage.getItem(`task${x}`);
    todos.prepend(p)
}

const addTask = () => {
    
    let input = document.createElement("input")
    input.setAttribute(`id`,`task${i}`)
    input.style.display = "block"
    input.autofocus = true
    input.placeholder = "Add task and press Enter"
    todos.append(input) 

    document.addEventListener('keydown', function(event) {
        if (event.code == 'Enter') {
            let userInput = document.getElementById(`task${i}`).value
            localStorage.setItem(`task${i}` , userInput)

            let getInput = document.getElementById(`task${i}`)
            getInput.remove()

            let printtask = document.createElement("p")
            printtask.innerHTML = localStorage.getItem(`task${i}`)
            todos.prepend(printtask)
            i++;
        }
    });
    
}
btn.addEventListener("click" , addTask)



