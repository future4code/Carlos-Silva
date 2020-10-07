let contador = 0


function criarTarefa(){

    const inputTarefa = document.getElementById("tarefa")
    const daySelect = document.getElementById("dias-semana").value
    const diaEscolhido = document.getElementById(daySelect)

    contador += 1

    let identifica = `apaga-${contador}`
    
    if(inputTarefa.value !== ""){

        diaEscolhido.innerHTML += `<li id=${identifica} onclick="riscarTarefa(id)">${inputTarefa.value}</li>`
        inputTarefa.value = ""
       
    }else{

        alert("Digite uma tarefa válida!")
        
    }
}

function riscarTarefa(id){

    document.getElementById(id).style.textDecoration = "line-through"
    
}

function apagarTarefas(){
    
    const daySelect = document.getElementById("dias-semana").value
    const diaEscolhido = document.getElementById(daySelect)

    diaEscolhido.innerHTML = ""
    inputTarefa.value = ""

}