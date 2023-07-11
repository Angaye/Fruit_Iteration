const nutruments=["glucide","lipides","protides"];
const aliments =[
    {
        "nom":"Miel chocolat bonbons"
    },
    {
        "nom":"Lait yaourts fromage "
    },
    {
        "nom":"Bœuf, porc, poulet "
    },
]

 for(let nutrument of nutruments){
    const article = document.createElement("article");
    const nomElement = document.createElement("h3");
    nomElement.innerHTML += nutrument;
    const buttonElement = document.createElement("button");
    buttonElement.textContent="les fruits";
    article.appendChild(nomElement);
    article.appendChild(buttonElement);
    const blocArticle = document.querySelector('.blocArticle');
    blocArticle.append(article)
    
 }
  const piecesFruits = document.querySelectorAll('.aliment .blocArticle article button');
  console.log(piecesFruits);
  for(let pieceElement of piecesFruits){
    pieceElement.addEventListener("click",function(event){
        const paragrapheFruit = event.target.parentElement
        const divAliment =document.createElement("p")
        for(let aliment of aliments){
           divAliment.innerText=aliment;
        }
       paragrapheFruit.appendChild(divAliment);
    })
  }