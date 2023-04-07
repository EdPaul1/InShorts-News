document.addEventListener('DOMContentLoaded', () => {
    loadDefaultEndpoints(); // Load data with default endpoints on page load

    const userInput = document.getElementById('my-input');

    userInput.addEventListener('input', (e) => {
        e.preventDefault();
        const inputValue = e.target.value.trim();

        if (inputValue) {
            firstGrid(inputValue);
            secondGrid(inputValue);
            thirdGrid(inputValue);
            fourthGrid(inputValue);
            fifthGrid(inputValue);
            sixthGrid(inputValue);
        } else {
            loadDefaultEndpoints(); // Load data with default endpoints if input is empty
        }
    });
});

function loadDefaultEndpoints() {
    firstGrid();
    secondGrid();
    thirdGrid();
    fourthGrid();
    fifthGrid();
    sixthGrid();
}

function firstGrid(endpoint = 'https://inshorts.deta.dev/news?category=business') {
    const firstDiv = document.getElementById('firstDiv');
    fetch(endpoint)
        .then(response => response.json())
        .then((news) => {
            const firstImage = document.getElementById('firstImage');
            firstImage.src = news.data[0].imageUrl;
            firstImage.height = 265;
            firstImage.width = 340;

            const firsttitle = document.getElementById('firsttitle');
            firsttitle.textContent = news.data[0].title;

            firsttitle.addEventListener("mouseover", () => {
                firsttitle.classList.add("hover");
            });

            firsttitle.addEventListener("mouseout", () => {
                firsttitle.classList.remove("hover");
            });

            firsttitle.addEventListener("click", () => {
                window.location.href = news.data[0].url;
            });
        });
}


    function secondGrid(){
    const secondDiv = document.getElementById('secondDiv')
        fetch('https://inshorts.deta.dev/news?category=politics')
        .then(response => response.json())
        .then((news) => {
            const secondImage = document.getElementById('secondImage')
            secondImage.src = news.data[0].imageUrl;
            secondImage.height = 265;
            secondImage.width = 340;

            const secondtitle = document.getElementById('secondtitle')
            secondtitle.textContent = news.data[0].title

            secondtitle.addEventListener("mouseover", () => {
                secondtitle.classList.add("hover"); // Add the "hover" class to the element
              });
              secondtitle.addEventListener("mouseout", () => {
                secondtitle.classList.remove("hover"); // Remove the "hover" class from the element
              });
              secondtitle.addEventListener("click", () => {
                window.location.href = news.data[0].url; // Replace with the URL you want to redirect to
              });
        })
    }
    function thirdGrid(){
    const thirdDiv = document.getElementById('thirdDiv')
        fetch('https://inshorts.deta.dev/news?category=technology')
        .then(response => response.json())
        .then((news) => {
            const thirdImage = document.getElementById('thirdImage')
            thirdImage.src = news.data[0].imageUrl;
            thirdImage.height = 265;
            thirdImage.width = 340;

            const thirdtitle = document.getElementById('thirdtitle')
            thirdtitle.textContent = news.data[0].title

            thirdtitle.addEventListener("mouseover", () => {
                thirdtitle.classList.add("hover"); // Add the "hover" class to the element
              });
              thirdtitle.addEventListener("mouseout", () => {
                thirdtitle.classList.remove("hover"); // Remove the "hover" class from the element
              });
              thirdtitle.addEventListener("click", () => {
                window.location.href = news.data[0].url; // Replace with the URL you want to redirect to
              });
        })
    }
    function fourthGrid(){
    const fourthDiv = document.getElementById('fourthDiv')
        fetch('https://inshorts.deta.dev/news?category=startup')
        .then(response => response.json())
        .then((news) => {
            const fourthImage = document.getElementById('fourthImage')
            fourthImage.src = news.data[0].imageUrl;
            fourthImage.height = 265;
            fourthImage.width = 340;

            const fourthtitle = document.getElementById('fourthtitle')
            fourthtitle.textContent = news.data[0].title

            fourthtitle.addEventListener("mouseover", () => {
                fourthtitle.classList.add("hover"); // Add the "hover" class to the element
              });
              fourthtitle.addEventListener("mouseout", () => {
                fourthtitle.classList.remove("hover"); // Remove the "hover" class from the element
              });
              fourthtitle.addEventListener("click", () => {
                window.location.href = news.data[0].url; // Replace with the URL you want to redirect to
              });
        })
    }
    function fifthGrid(){
    const fifthDiv = document.getElementById('fifthDiv')
        fetch('https://inshorts.deta.dev/news?category=entertainment')
        .then(response => response.json())
        .then((news) => {
            const fifthImage = document.getElementById('fifthImage')
            fifthImage.src = news.data[0].imageUrl;
            fifthImage.height = 265;
            fifthImage.width = 340;

            const fifthtitle = document.getElementById('fifthtitle')
            fifthtitle.textContent = news.data[0].title

            fifthtitle.addEventListener("mouseover", () => {
                fifthtitle.classList.add("hover"); // Add the "hover" class to the element
              });
              fifthtitle.addEventListener("mouseout", () => {
                fifthtitle.classList.remove("hover"); // Remove the "hover" class from the element
              });
              fifthtitle.addEventListener("click", () => {
                window.location.href = news.data[0].url; // Replace with the URL you want to redirect to
              });
        })
        
    }
    function sixthGrid(){
    const sixthDiv = document.getElementById('sixthDiv')
        fetch('https://inshorts.deta.dev/news?category=science')
        .then(response => response.json())
        .then((news) => {
            const sixthImage = document.getElementById('sixthImage')
            sixthImage.src = news.data[0].imageUrl;
            sixthImage.height = 265;
            sixthImage.width = 340;

            const sixthtitle = document.getElementById('sixthtitle')
            sixthtitle.textContent = news.data[0].title

            sixthtitle.addEventListener("mouseover", () => {
                sixthtitle.classList.add("hover"); // Add the "hover" class to the element
              });
              sixthtitle.addEventListener("mouseout", () => {
                sixthtitle.classList.remove("hover"); // Remove the "hover" class from the element
              });
              sixthtitle.addEventListener("click", () => {
                window.location.href = news.data[0].url; // Replace with the URL you want to redirect to
              });
        })
    }

    const commentForm = document.getElementById('commentForm')
    
    commentForm.addEventListener('submit', (e)=>{
        e.preventDefault();
        const name = document.getElementById('name')
        const comment = document.getElementById('comment')
        const firstcomment = document.getElementById('firstComment')
        const secondComment = document.getElementById('secondComment')

        const h3 = document.createElement('h3')
        const p = document.createElement('p')
        h3.textContent = name.value;
        p.textContent = comment.value;
        
        firstcomment.appendChild(h3)
        firstcomment.appendChild(p)
    })
