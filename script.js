let temanatalino = localStorage.getItem('temanatalino');
const botao = document.getElementById('botao');
const botao2 = document.getElementById('botao2');

function atualizar_tema(){
    if(document.getElementById("body").classList.contains("temanatalino")){
        document.getElementById("circulopatinhos").src="./fotos/merryducksmas.png";
        document.getElementById("botao").src = "./fotos/circulopatos.png";
        document.getElementById("botao2").src = "./fotos/circulopatos.png";
        document.getElementById("videozinho").style.display = "block";
        document.getElementById("nomedaempresa").src = "./fotos/rigardo2.1.png";
    }
    else{
        document.getElementById("circulopatinhos").src = "./fotos/circulopatos.png";
        document.getElementById("botao").src = "./fotos/botaonatal.png";
        document.getElementById("botao2").src = "./fotos/botaonatal.png";
        document.getElementById("videozinho").style.display = "none";
        document.getElementById("nomedaempresa").src = "./fotos/rigardo2.1.png";
    }    
}

const enabletemanatalino = () => {
    document.body.classList.add('temanatalino')
    localStorage.setItem('temanatalino', 'active')
    atualizar_tema()  
}

const disabletemanatalino = () => {
    document.body.classList.remove('temanatalino')
    localStorage.setItem('temanatalino', 'null')
    atualizar_tema()    
}

if (temanatalino === "active") {
    enabletemanatalino();
}

botao.addEventListener("click", () => {
    temanatalino !== "active" ? enabletemanatalino() : disabletemanatalino();
    temanatalino = localStorage.getItem('temanatalino');
    atualizar_tema();
})

botao2.addEventListener("click", () => {
    temanatalino !== "active" ? enabletemanatalino() : disabletemanatalino();
    temanatalino = localStorage.getItem('temanatalino');
    atualizar_tema();
})

function showSidebar(){
    const sidebar= document.getElementById('sidebar');
    sidebar.style.display = 'flex';
}

function hideSidebar(){
    const sidebar= document.getElementById('sidebar');
    sidebar.style.display = 'none';
}









































// function mudar_cor_tema(){
//     if(document.getElementById("body").classList.contains("temanatalino")){
//         document.getElementById("body").classList.remove("temanatalino");
//         document.getElementById("circulopatinhos").src = "./fotos/circulopatos.png";
//         document.getElementById("botao").src = "./fotos/botaonatal.png";
//         document.getElementById("videozinho").style.display = "none";
//         document.getElementById("nomedaempresa").src = "./fotos/rigardo2.1.png";
//     }
//     else{
//         document.getElementById("body").classList.add("temanatalino");
//         document.getElementById("circulopatinhos").src = "./fotos/merryducksmas.png";
//         document.getElementById("botao").src = "./fotos/circulopatos.png";
//         document.getElementById("videozinho").style.display = "block";
//         document.getElementById("nomedaempresa").src = "./fotos/rigardo2.1.png";
//     }    
// }

    // if(document.getElementById("body").classList.contains("temanatalino")){
        

    //     // document.getElementById("body").classList.add("temanatalino");
    //     document.getElementById("circulopatinhos").src = "./fotos/merryducksmas.png";
    //     document.getElementById("botao").src = "./fotos/circulopatos.png";
    //     document.getElementById("videozinho").style.display = "block";
    //     document.getElementById("nomedaempresa").src = "./fotos/rigardo2.1.png";
    // }
    // else{
    //     // document.getElementById("body").classList.remove("temanatalino");
    //     document.getElementById("circulopatinhos").src = "./fotos/circulopatos.png";
    //     document.getElementById("botao").src = "./fotos/botaonatal.png";
    //     document.getElementById("videozinho").style.display = "none";
    //     document.getElementById("nomedaempresa").src = "./fotos/rigardo2.1.png";
    // }    