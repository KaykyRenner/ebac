class validaAeB{
    constructor(){
        this.formulario = document.querySelector('.formulario')
        this.Aa = document.querySelector('#inputA')
        this.Bb = document.querySelector('#inputB')
        this.resultado=document.querySelector('.resultado')
        this.evento()
    }
    evento(){
        this.formulario.addEventListener('submit',e=>{
            e.preventDefault()
            this.valida()
            document.getElementById('inputA').value='';
            document.getElementById('inputB').value='';
        })
    }
    valida(){
        const RecebeA = Number(this.Aa.value)
        const RecebeB = Number(this.Bb.value)
        if(RecebeB > RecebeA) this.resultado.innerHTML = 'valido' 
        if(RecebeB == RecebeA) this.resultado.innerHTML = 'mesma coisa'
        if(RecebeA > RecebeB) this.resultado.innerHTML = 'inválido'
        
    }
}
const Mostra = new validaAeB()