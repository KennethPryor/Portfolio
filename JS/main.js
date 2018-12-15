$(document).ready(function () {
        $('.sidenav').sidenav();

    $('#aboutMeDiv').append(`
    <h3>About Me</h3>
    <hr>
    <p id="aboutMeP"> My name is Kenneth Lloyd Pryor.I was born in Deland, Flordia on
        01/31/1999 during the
        Superbowl.I grew up with computers
        and was always very good with them or any form of technology.As a kid I was playing
        computer games before I knew
        the alphabet.I would take apart the computers and just mess with CMD thinking I was
        king of the world.I started
        working at 16, my first job was detail at a Hyundai Dealership.I washed cars and did
        little things
        like take out the trash and stuff.About a year later, I moved into the parts department
        and was a counter-person
        for about another year.I took a web-development course in high school and learned basic
        HTML and CSS.I graduated
        Baldwin High School in 2017 and moved to Atlanta that fall.<br><br> I started work as a
        service advisor at Thornton
        Rd Hyundai and still currently employed there.I enrolled into a Coding Bootcamp @
        Georgia Tech in 2018. I'm very outgoing
        and naturally a leader.My greatest weakness is I over think alot of things.I love the
        Ocean and always wanted to be a
        Marine Biologist and study Sharks.I also have a fasination with Mythology, Ancient
        Greek mostly and Poseidon as he's the
        God of the Seas.<br>
    </p>
    `);
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
        '../Public/Images/DCscreenshot.PNG',
        'My First API Site using Giphy Api in a DC Comics theme.Click a Hero/Villan and loads Gifs in a paused state for that Hero/Villan and upon being clicked plays that Gif.',
        'https://kennethpryor.github.io/DCGiphy/',
    );
    const TriviaGame = new portfolioCard( 
        'Classic Movies Trivia',
        '../Public/Images/TriviaGame.PNG',
        'This is a Trivia Game asking about Classic Movies with a Timer and Score Keeper.',
        'https://kennethpryor.github.io/Triviagame/',
    );
    const Project1 = new portfolioCard(
        'Class Hub',
        '../Public/Images/classHub.PNG',
        'This was my first Project with 2 other developers.I worked on the Front-end and the Calendar',
        'https://bullgator92.github.io/BootcampV2.0/',
    );
    const HangmanSE = new portfolioCard(
        'Hangman SE',
        '../Public/Images/hangmanSE.PNG',
        'This was my first assignemnt using inputs and otherstuff to be typed out later',
        'https://kennethpryor.github.io/word-guess-game/'
    );
    const Posey = new portfolioCard(
        'Posey App',
        '../Public/Images/Posey MM.PNG',
        'Node.JS program that uses Spotify, BandsInTown, and OMDb APIs to be able to search and few the responses made by those APIs in the Terminal',
        'https://github.com/KennethPryor/posey-node-app',
    )
    const Atlantis = new portfolioCard(
        'Atlantis',
        '../Public/Images/Atlantis.PNG',
        'Node.JS program that uses MySQL to show Inventory where customers can purchase items and the inventory will change accordingly',
        'https://github.com/KennethPryor/Atlantis'
    )
    const portfolioCardArray = [DCGiphy,TriviaGame,Project1,HangmanSE,Posey,Atlantis];

    portfolioCardArray.forEach(function(i) {
        $('#portfolioCards').append(`
        <div class="col s12 m4">
                  <div class="card hoverable small">
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
