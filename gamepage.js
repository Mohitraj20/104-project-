// random value generated
var y    = Math.floor(Math.random() * 10 + 1);  
if(x == y)
{
    alert("CONGRATULATION!!!"+playername+" YOU GUESSED IT  RIGHT  IN" + guess + "GUESS");
    guess= 1;

}
else if(x > y)
{
    guess++;
    alert("OOPS SORRY!! TRY A SMALLER NUMBER")  
}
else 
{
    guess++;
    alert("OOPS SORRY!! TRY A SMALLER NUMBER")
}


  
// counting the number of guesses
// made for correct Guess

  
// function for number guessed by user    
var x  = document.getElementById("guessfield").value;

function playagain(){
        y = Math.floor(Math.random() * 10 + 1);
}
