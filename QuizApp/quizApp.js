var score = 0;

function submitAnswers(){
    score = 0;

    const answer1 = document.querySelector('input[name="q1"]:checked').value;
    const answer2 = document.querySelector('input[name="q2"]:checked').value;
    const answer3 = document.querySelector('input[name="q3"]:checked').value;
    const answer4 = document.querySelector('input[name="q4"]:checked').value;
    const answer5 = document.querySelector('input[name="q5"]:checked').value;

    if(answer1 == `mars`){
        score++;
    }
    if(answer2 == `nitrogen`){
        score++;
    }
    if(answer3 == `mitochondria`){
        score++;
    }
    if(answer4 == `proton`){
        score++;
    }
    if(answer5 == `bothAC`){
        score++;
    }

    document.getElementById(`display`).textContent = `You got ${score} out of 5`;
    
}