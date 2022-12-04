const quotesList = [
    {
        quote : "자만은 스스로를 정당화 함으로써 얻어지는 기쁨이다."  
    },
    {
        quote : "화살 하나는 쉽게 부러져도 화살 한 묶음은 절대 부러지지 않는다."  
    },
    {
        quote : "변명을 잘 하는 자는 다른 어떤 것도 잘 할 수 없다."  
    },
    {
        quote : "자신의 부족한 점을 더 많이 부끄러워할 줄 아는 이는 더 존경받을 가치가 있는 사람이다."  
    },
    {
        quote : "커피는 가장 저렴하게 심장을 필요 이상으로 데울 수 있는 사치다."  
    },
    {
        quote : "여유는 어떤 상황에서도 평점심을 잃지 않는 자심감이다."  
    },
    {
        quote : "집은 한 사람이 시작되는 곳이다."  
    },
]

const list = quotesList[Math.floor(Math.random() * quotesList.length)];
const listQuote = list.quote;

const quotes = document.querySelector("#quotes");
quotes .innerText = listQuote;

