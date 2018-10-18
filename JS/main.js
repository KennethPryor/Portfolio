$(document).ready(function () {
    $('.sidenav-trigger').on("click", function() {
        $('.sidenav').sidenav();
    });
    
    // $('#aboutMeDiv').append() {`
    
    // `};
    new TypeIt('#portfolioBox', {
        strings: ['My Projects'],
        breakLines: false
   });
    function portfolioCard(title,image,content,link) {
        this.title = title;
        this.image = image;
        this.content = content;
        this.link = link;
    };
    const DCGiphy = new portfolioCard(
        'DC Giphy',
        'Images/DCscreenshot.PNG',
        'My First API Site using Giphy Api in a DC Comics theme.Click a Hero/Villan and loads Gifs in a paused state for that Hero/Villan and upon being clicked plays that Gif.',
        'https://kennethpryor.github.io/DCGiphy/',
    );
    const TriviaGame = new portfolioCard( 
        'Classic Movies Trivia',
        'Images/TriviaGame.PNG',
        'This is a Trivia Game asking about Classic Movies with a Timer and Score Keeper.',
        'https://kennethpryor.github.io/Triviagame/',
    );
    const Project1 = new portfolioCard(
        'Class Hub',
        'Images/classHub.PNG',
        'This was my first Project with 2 other developers.I worked on the Front-end and the Calendar',
        'https://bullgator92.github.io/BootcampV2.0/',
    );
    const HangmanSE = new portfolioCard(
        'Hangman SE',
        'Images/hangmanSE.PNG',
        'This was my first assignemnt using inputs and otherstuff to be typed out later',
        'https://kennethpryor.github.io/word-guess-game/'
    );
    const portfolioCardArray = [DCGiphy,TriviaGame,Project1,HangmanSE];

    portfolioCardArray.forEach(function(i) {
        $('#portfolioCards').append(`
        <div class="col s12 m4">
                  <div class="card hoverable">
                    <div class="card-image">
                      <img src="${i.image}" height="10%">
                      <span class="card-title">${i.title}</span>
                    </div>
                    <div class="card-content cardContent">
                      <p>${i.content}</p>
                    </div>
                    <div class="card-action">
                      <a href="${i.link}" target="_blank">Check me out!</a>
                    </div>
                  </div>
                </div>
        `);
        
    });
    
    
});
