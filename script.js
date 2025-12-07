//base projectile code from https://ryanryanryan66.github.io/NMED-3520-A-Assignment3_RyanNightingale/
    
    const $scoreElement = $('.score');
    const $projectilesContainer = $('.projectiles-container');
    projectileInterval = setInterval(createProjectile, 600); 

    var notes =["heartNote.svg", "starNote.svg", "dropNote.svg"] //<-- this is an array

// class fallingNotes  {
//     constructor(width, height, backgroundImage, backgroundSize, )   {
//         fallingNotes.width = width;
//         fallingNotes.height = height;
//         fallingNotes.backgroundImage = backgroundImage;
//         fallingNotes.backgroundSize = backgroundSize;
//     }

// }

// const fallingNotesDrop = new fallingNotes(size + 'px', size + 'px','url("assets/dropNote.svg")','cover', Math.random() * 70 + '%')



    function createProjectile() {
        var randomNum = Math.floor(Math.random()*notes.length)
        const $projectile = $('<div class="projectile"></div>');
        const size = Math.random() * (100 - 90) + 90; 
        $projectile.css({
            width: size + 'px',
            height: size + 'px',
            backgroundImage: 'url("assets/starNote.svg")', 
            backgroundSize: 'cover', 
            top: Math.random() * 70 + '%', //controls where on y axis they appear
        });

        $projectilesContainer.append($projectile);

        let wasClicked = false;

        
        $projectile.on('click', function() {
            score += 1;
            $scoreElement.text('${score}');
            wasClicked = true;  
            $projectile.remove(); 
        });

       
        $projectile.animate({
            screenTop: '+1000px', 
        }, 3000, 'linear', function() {
            $(this).remove(); 
        });
    }