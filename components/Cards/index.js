// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        console.log(response)

        const cardContainer = document.querySelector('.cards-container')

        let articleInfo = response.data.articles;

        for (article in articleInfo){
            articleInfo[article].forEach( entry => {
            const cards = createCards(entry)
            console.log(cards)
            cardContainer.appendChild(cards)   
            })
        }
})
        
const cards = document.querySelector(`.cards`)
function createCards(obj){

    //elements
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imgContainer = document.createElement('div');
    const img = document.createElement('img');
    const authorName = document.createElement('span');

    //classes
    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');

    //structure
    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgContainer);
    author.appendChild(authorName);
    imgContainer.appendChild(img);

    //content
    headline.textContent = obj.headline
    img.src = obj.authorPhoto
    authorName.textContent = `By ${obj.authorName}`

    return card;
}

