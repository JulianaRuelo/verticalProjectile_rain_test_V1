// //base projectile code from https://ryanryanryan66.github.io/NMED-3520-A-Assignment3_RyanNightingale/
    
//     const $scoreElement = $('.score');
//     const $projectilesContainer = $('.projectiles-container');
//     projectileInterval = setInterval(createProjectile, 600); 

//     var notes =["heartNote.svg", "starNote.svg", "dropNote.svg"] //<-- this is an array

//     function createProjectile() {
//         var randomNum = Math.floor(Math.random()*notes.length)
//         const $projectile = $('<div class="projectile"></div>');
//         const size = Math.random() * (100 - 90) + 90; 
//         $projectile.css({
//             width: size + 'px',
//             height: size + 'px',
//             backgroundImage: 'url("assets/starNote.svg")', 
//             backgroundSize: 'cover', 
//             top: Math.random() * 70 + '%', //controls where on y axis they appear
//         });

//         $projectilesContainer.append($projectile);

//         let wasClicked = false;

        
//         $projectile.on('click', function() {
//             score += 1;
//             $scoreElement.text('${score}');
//             wasClicked = true;  
//             $projectile.remove(); 
//         });

       
//         $projectile.animate({
//             translateY: '+1000px', 
//             // left: '+500px',
//         }, 3000, 'linear', function() {
//             $(this).remove(); 
//         });
//     }


//google gemini suggestion
function startJSAnimation() {
    const element = document.getElementById('myElementJS');
    let position = 0;
    const endPosition = window.innerHeight - element.offsetHeight;

    function frame() {
        if (position >= endPosition) {
            // Animation finished
            position = -position;
        } else {
            position += 5; // Move down by 5px per frame
            element.style.top = position + 'px';
            requestAnimationFrame(frame); // Request the next frame
        }
    }

    requestAnimationFrame(frame); // Start the animation loop
}

//from w3 schools
$(document).ready(function(){
  $(".btn1").click(function(){
    $("p").slideUp();
  });
  $(".btn2").click(function(){
    $("p").slideDown();
  });
});