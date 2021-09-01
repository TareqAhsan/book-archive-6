// variable part
const searchBtn = document.getElementById('search-btn');
const inputField = document.getElementById('input-field');
const booksDiv = document.getElementById('books');
const Errors = document.getElementById('result');


//adding event listener on button
searchBtn.addEventListener('click',function(){
    const inputVal = inputField.value;
    inputField.value = '';
    console.log(inputVal);
    booksDiv.textContent =''
    Errors.textContent = ''
    fetch(`http://openlibrary.org/search.json?q=${inputVal}`) //fetching data
    .then(res => res.json())
    .then(data => displayBook(data.docs));   //get the data and passing in function
     
})

const displayBook = (books)=> {
    console.log(books);
    if (books.length===0) {   //checking if the search result is exist or not
        Errors.innerText = "NO Result Found"
    }
    books.forEach(book => {  // run a loop in the array for each book item
        Errors.innerText=`Search Result ${books.length} Found`
        const div = document.createElement('div');
        div.classList.add('col')
        div.innerHTML = `
        <div  class="card  h-100  border-0 p-3 shadow rounded-3">
             <img class='img-fluid rounded-3' src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="...">
        <div class="card-body">
             <h5 class="card-title text-uppercase">book name: ${book.title}</h5>
             <p class="card-text text-uppercase">author name: ${book.author_name}</p>
             <p class="card-text text-uppercase">first_publish_year: ${book.first_publish_year}</p>
         </div>
       </div>
        `
        booksDiv.appendChild(div);
    });
}
