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
    let currentIndex = 0;
    let newsData = [];

    function updateGrid() {
        if (newsData.length === 0) {
            fetch(endpoint)
                .then(response => response.json())
                .then((news) => {
                    newsData = news.data;
                    updateNewsItem();
                });
        } else {
            currentIndex++;
            if (currentIndex >= newsData.length) {
                currentIndex = 0;
            }
            updateNewsItem();
        }
    }

    function updateNewsItem() {
        const newsItem = newsData[currentIndex];
        const firstImage = document.getElementById('firstImage');
        firstImage.src = newsItem.imageUrl;
        firstImage.height = 265;
        firstImage.width = 340;

        const firsttitle = document.getElementById('firsttitle');
        firsttitle.textContent = newsItem.title;

        firsttitle.addEventListener("mouseover", () => {
            firsttitle.classList.add("hover");
        });

        firsttitle.addEventListener("mouseout", () => {
            firsttitle.classList.remove("hover");
        });

        firsttitle.addEventListener("click", () => {
            window.location.href = newsItem.url;
        });
    }

    setInterval(() => {
        updateGrid();
    }, 3000);
}

function secondGrid(endpoint = 'https://inshorts.deta.dev/news?category=politics') {
    const secondDiv = document.getElementById('secondDiv');
    let currentIndex2 = 0;
    let newsData2 = [];

    function updateGrid2() {
        if (newsData2.length === 0) {
            fetch(endpoint)
                .then(response => response.json())
                .then((news) => {
                    newsData2 = news.data;
                    updateNewsItem2();
                });
        } else {
            currentIndex2++;
            if (currentIndex2 >= newsData2.length) {
                currentIndex2 = 0;
            }
            updateNewsItem2();
        }
    }

    function updateNewsItem2() {
        const newsItem2 = newsData2[currentIndex2];
        const secondImage2 = document.getElementById('secondImage');
        secondImage2.src = newsItem2.imageUrl;
        secondImage2.height = 265;
        secondImage2.width = 340;

        const secondtitle2 = document.getElementById('secondtitle');
        secondtitle2.textContent = newsItem2.title;

        secondtitle2.addEventListener("mouseover", () => {
            secondtitle2.classList.add("hover");
        });

        secondtitle2.addEventListener("mouseout", () => {
            secondtitle2.classList.remove("hover");
        });

        secondtitle2.addEventListener("click", () => {
            window.location.href = newsItem2.url;
        });
    }

    setInterval(() => {
        updateGrid2();
    }, 4025);
}

function thirdGrid(endpoint = 'https://inshorts.deta.dev/news?category=technology') {
    const thirdDiv = document.getElementById('thirdDiv');
    let currentIndex3 = 0;
    let newsData3 = [];

    function updateGrid3() {
        if (newsData3.length === 0) {
            fetch(endpoint)
                .then(response => response.json())
                .then((news) => {
                    newsData3 = news.data;
                    updateNewsItem3();
                });
        } else {
            currentIndex3++;
            if (currentIndex3 >= newsData3.length) {
                currentIndex3 = 0;
            }
            updateNewsItem3();
        }
    }

    function updateNewsItem3() {
        const newsItem3 = newsData3[currentIndex3];
        const secondImage3 = document.getElementById('thirdImage');
        secondImage3.src = newsItem3.imageUrl;
        secondImage3.height = 265;
        secondImage3.width = 340;

        const secondtitle3 = document.getElementById('thirdtitle');
        secondtitle3.textContent = newsItem3.title;

        secondtitle3.addEventListener("mouseover", () => {
            secondtitle3.classList.add("hover");
        });

        secondtitle3.addEventListener("mouseout", () => {
            secondtitle3.classList.remove("hover");
        });

        secondtitle3.addEventListener("click", () => {
            window.location.href = newsItem3.url;
        });
    }

    setInterval(() => {
        updateGrid3();
    }, 4900);
}
function fourthGrid(endpoint = 'https://inshorts.deta.dev/news?category=startup') {
    const fourthDiv = document.getElementById('fourthDiv');
    let currentIndex4 = 0;
    let newsData4 = [];

    function updateGrid4() {
        if (newsData4.length === 0) {
            fetch(endpoint)
                .then(response => response.json())
                .then((news) => {
                    newsData4 = news.data;
                    updateNewsItem4();
                });
        } else {
            currentIndex4++;
            if (currentIndex4 >= newsData4.length) {
                currentIndex4 = 0;
            }
            updateNewsItem4();
        }
    }

    function updateNewsItem4() {
        const newsItem4 = newsData4[currentIndex4];
        const secondImage4 = document.getElementById('fourthImage');
        secondImage4.src = newsItem4.imageUrl;
        secondImage4.height = 265;
        secondImage4.width = 340;

        const secondtitle4 = document.getElementById('fourthtitle');
        secondtitle4.textContent = newsItem4.title;

        secondtitle4.addEventListener("mouseover", () => {
            secondtitle4.classList.add("hover");
        });

        secondtitle4.addEventListener("mouseout", () => {
            secondtitle4.classList.remove("hover");
        });

        secondtitle4.addEventListener("click", () => {
            window.location.href = newsItem4.url;
        });
    }

    setInterval(() => {
        updateGrid4();
    }, 4400);
}
function fifthGrid(endpoint = 'https://inshorts.deta.dev/news?category=entertainment') {
    const fifthDiv = document.getElementById('fifthDiv');
    let currentIndex5 = 0;
    let newsData5 = [];

    function updateGrid5() {
        if (newsData5.length === 0) {
            fetch(endpoint)
                .then(response => response.json())
                .then((news) => {
                    newsData5 = news.data;
                    updateNewsItem5();
                });
        } else {
            currentIndex5++;
            if (currentIndex5 >= newsData5.length) {
                currentIndex5 = 0;
            }
            updateNewsItem5();
        }
    }

    function updateNewsItem5() {
        const newsItem5 = newsData5[currentIndex5];
        const secondImage5 = document.getElementById('fifthImage');
        secondImage5.src = newsItem5.imageUrl;
        secondImage5.height = 265;
        secondImage5.width = 340;

        const secondtitle5 = document.getElementById('fifthtitle');
        secondtitle5.textContent = newsItem5.title;

        secondtitle5.addEventListener("mouseover", () => {
            secondtitle5.classList.add("hover");
        });

        secondtitle5.addEventListener("mouseout", () => {
            secondtitle5.classList.remove("hover");
        });

        secondtitle5.addEventListener("click", () => {
            window.location.href = newsItem5.url;
        });
    }

    setInterval(() => {
        updateGrid5();
    }, 4015);
}
function sixthGrid(endpoint = 'https://inshorts.deta.dev/news?category=science') {
    const sixthDiv = document.getElementById('sixthDiv');
    let currentIndex6 = 0;
    let newsData6 = [];

    function updateGrid6() {
        if (newsData6.length === 0) {
            fetch(endpoint)
                .then(response => response.json())
                .then((news) => {
                    newsData6 = news.data;
                    updateNewsItem6();
                });
        } else {
            currentIndex6++;
            if (currentIndex6 >= newsData6.length) {
                currentIndex6 = 0;
            }
            updateNewsItem6();
        }
    }

    function updateNewsItem6() {
        const newsItem6 = newsData6[currentIndex6];
        const secondImage6 = document.getElementById('sixthImage');
        secondImage6.src = newsItem6.imageUrl;
        secondImage6.height = 265;
        secondImage6.width = 340;

        const secondtitle6 = document.getElementById('sixthtitle');
        secondtitle6.textContent = newsItem6.title;

        secondtitle6.addEventListener("mouseover", () => {
            secondtitle6.classList.add("hover");
        });

        secondtitle6.addEventListener("mouseout", () => {
            secondtitle6.classList.remove("hover");
        });

        secondtitle6.addEventListener("click", () => {
            window.location.href = newsItem6.url;
        });
    }

    setInterval(() => {
        updateGrid6();
    }, 4050);
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
