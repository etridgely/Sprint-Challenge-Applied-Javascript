// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

// <div class="tabs">
//  <div class="topics">
//   <span class="title">TRENDING TOPICS:</span>
// </div>
// </div>

axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then (response => {
    console.log(response)
        response.data.topics.forEach(title => {
            const lambdaTab = createTab(title);
            console.log(lambdaTab)
        })
    });

function createTab(arg) {
    //create elements
    const tab = document.createElement('div');
    const topics = document.querySelector('.topics');

    //classes
    tab.classList.add('tab');

    //set structure
    topics.appendChild(tab);

    //content
    tab.textContent = arg

    return tab;
}