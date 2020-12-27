let form = document.getElementById('addForm');
let itemList = document.getElementById('items');

// add submit  event
form.addEventListener('submit',addQuote);

function addQuote(e){
    e.preventDefault()
    let quoteItem = document.getElementById('quote').value;
    let author = document.getElementById('author').value;
    //create div element
    let div = document.createElement('div');

    // add class
    div.className = 'pb-3';
    
    // creating card element serately
    let card = document.createElement('div');
    // add className 
    card.className = 'card';
    // creating card header
    let cardHeader = document.createElement('div');
    cardHeader.className = 'card-header';
    //add text to the header
    cardHeader.appendChild(document.createTextNode('Quote'));
    
    // add the header to the  card 
    card.appendChild(cardHeader);
    //creating card-body
    let cardBody = document.createElement('div')
    cardBody.className = 'card-body';
 
    // create blockquote element 
    let blockquote = document.createElement('blockquote');
    blockquote.className = 'blockquote mb-0';
    // console.log(blockquote)
    //creating the p element
    let p = document.createElement('p');
    p.appendChild(document.createTextNode(quoteItem));
    blockquote.appendChild(p);
    // console.log(blockquote)
    // create footer 
    let footer = document.createElement('footer');
    footer.className = 'blockquote-footer';
    footer.appendChild(document.createTextNode(author));
    blockquote.appendChild(footer);
    cardBody.appendChild(blockquote);
    card.appendChild(cardBody);
    div.appendChild(card);
    itemList.appendChild(div)
    
    console.log(div);


    

}