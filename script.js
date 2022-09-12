let btn=document.getElementsByTagName("span"); //botoes da calculadora
let tela=document.getElementById("value"); //tela da calculadora
let n1; //primeiro numero
let n2; //segundo numero
let operador=""; //operador

for(let i=0; i<btn.length; i++){
       btn[i].addEventListener("click",function(){ //adicionando funcao a todos botoes
         if(tela.innerHTML=="ERRO"){ //apagar o visor depois do aviso de erro
            tela.innerHTML="";
         }

         if(this.innerHTML=="="){ //funcao do igual
            n2=parseFloat(tela.innerHTML);
            calcular(n1, operador, n2);
            operador="";
           
         }else if(this.innerHTML=="/"||this.innerHTML=="*"||this.innerHTML=="-"||this.innerHTML=="+"){ //funcao das operacoes
            if(operador==""){ 
                n1=parseFloat(tela.innerHTML);
           operador=this.innerHTML
            }else{ //mais de uma operacao por vez
               n2=parseFloat(tela.innerHTML);
               calcular(n1, operador, n2);
               n1=parseFloat(tela.innerHTML);
           operador=this.innerHTML;
            }
            tela.innerHTML="";
           
            
         }else if(this.innerHTML=="."){ //adicionando o decimal
            if(!tela.innerHTML.includes(".")){ //adicionando decimal apenas se não houver outro
               tela.innerHTML+=".";
            }
         }else if(this.innerHTML=="C"){ //funcao de limpar a tela
            tela.innerHTML="";
            operador="";
         }else{
            if(tela.innerHTML=="0"){ //adicionar os numeros
               tela.innerHTML=this.innerHTML;
            }else{
               tela.innerHTML+=this.innerHTML;
            }
         }
       })
   }

   function calcular(n1, operador, n2){ //funcao de calcular
      let resultado;
      if(operador=="+"){
         resultado=n1+n2;
      }else if(operador=="-"){
         resultado=n1-n2;
      }else if(operador=="*"){
         resultado=n1*n2
      }else if(operador=="/"){
         resultado=n1/n2
      }

      if(typeof resultado==="undefined"|| isNaN(resultado)){ //aviso de erro
         resultado="ERRO";
      }

      tela.innerHTML=resultado;
   }

   function darkMode(){//funcao do modo escuro
      document.body.classList.toggle('dark');
   }
