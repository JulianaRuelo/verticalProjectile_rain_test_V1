//base projectile code from https://ryanryanryan66.github.io/NMED-3520-A-Assignment3_RyanNightingale/
    
    const $scoreElement = $('.score');
    const $projectilesContainer = $('.projectiles-container');
    
    projectileInterval = setInterval(createProjectile, 630); 

    function createProjectile() {
        const $projectile = $('<div class="projectile"></div>');
        const size = Math.random() * (100 - 90) + 90; 
        $projectile.css({
            width: size + 'px',
            height: size + 'px',
            backgroundImage: 'url("assets/starNote.svg")', 
            backgroundSize: 'cover', 
            top: Math.random() * 70 + 10 + '%', 
        });

        $projectilesContainer.append($projectile);

        let wasClicked = false;

        
        $projectile.on('click', function() {
            score += 1;
            $scoreElement.text('Orbs Stopped: ${score}');
            wasClicked = true;  
            $projectile.remove(); 
        });

       
        $projectile.animate({
            left: '-100px', 
        }, 3000, 'linear', function() {
            $(this).remove(); 
        });
    }