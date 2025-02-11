// Function to handle button click events
const yesBtn = document.getElementById('yes');
const noBtn = document.getElementById('no');
const gif = document.getElementById('gif');
const gifContainer = document.querySelector('.tenor-gif-embed');
const text = document.getElementById('text');
const smallText = document.getElementById('smalltext');
let clickNo = 0;
const maxNoClicks = 4;
const minNoScale = 0.65;
let noScale = 1;
let yesScale = 1; 
const buttonContainer = document.querySelector('.container .btn');

const maxYesWidth = parseFloat(window.getComputedStyle(yesBtn).maxWidth) || 300; 



const textMessages = ["For real?!" ,"Are you sure?" , "Pookie please..", "You can't do this to me!"];
const gifChanging = ["image/cat-judge.gif", "image/cat-surprised.gif", "image/cat-cry.gif", "image/crying-banana-cat.gif"]


yesBtn.addEventListener('click', function() {
    flashRainbowColors(function() {
        document.getElementById('question').style.display = 'none';     
    });

    text.innerText = 'Thanks for being my Valentine!💗';
    smallText.innerText = 'YAAY I kneeeeew it!!';
    gif.src = 'image/happy-cat.gif';

   

    setTimeout(() => {
        gif.src = "image/kiss-cat.gif";
    }, 2000)

    


    


});

noBtn.addEventListener('click', function() {
    gif.src = gifChanging[clickNo % maxNoClicks];
    text.innerText = textMessages[clickNo % maxNoClicks];
    clickNo++;


    let currentYesWidth = yesBtn.getBoundingClientRect().width; // More accurate than `getComputedStyle`

    console.log(`Current Yes Width: ${currentYesWidth}, Max Width: ${maxYesWidth}`);

    // Check if the yes button width is still less than max width
    if (currentYesWidth < maxYesWidth) {
        yesScale += 0.5; // Increment scale gradually
        yesBtn.style.transform = `scale(${yesScale})`;

        // Dynamically update gap in the button container
        const rootStyles = getComputedStyle(document.documentElement);
        const gapScaleFactor = parseFloat(rootStyles.getPropertyValue("--gap-scale-factor")) || 150;

        const currentGap = parseFloat(getComputedStyle(buttonContainer).gap) || 1;
        const newGap = Math.sqrt(currentGap * gapScaleFactor); // Scale based on the factor
        buttonContainer.style.gap = `${newGap}px`;
        yesBtn.style.marginTop = `5px`;
    }

    
    
    
});


function flashRainbowColors(callback) {
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    let i = 0;
    const interval = setInterval(function() {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 200);

    setTimeout(function() {
        clearInterval(interval);
        document.body.style.backgroundColor = '';
        if (callback) {
            callback();
        }
    }, 2000);

    
}
