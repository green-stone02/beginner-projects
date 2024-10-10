const quotes = [
    `Once the rain is over, an umbrella becomes a burden to everyone`,
    `An athlete won't judge you for working out.

    A millionaire won't judge you for starting a business.

    A musician won't judge you for trying to sing a song.

    It's always the people going nowhere who have something to say.`,
    `The road to heaven feels like hell.
    
    The road to hell feels like heaven.`,
    `Laziness kills ambition
    Anger kills wisdom
    Fear kills dreams
    Ego kills growth
    Jealousy kills peace
    Doubt kills confidence
    
    Now read that right to left.`,
    `One day, in retrospect, the years of struggle will strike you as the most beautiful.`,
    `Life isn't about finding yourself. Life is about creating yourself.`,
    `Once you carry your own water, you will realize the value of every drop.`,
    `People who say it cannot be done, should not interrupt those who are doing it.`
]

function generate(){
    let random = Math.floor(Math.random() * quotes.length);
    document.getElementById(`quote`).innerHTML = `"${quotes[random].replace(/\n/g, `<br>`)}"`;
}