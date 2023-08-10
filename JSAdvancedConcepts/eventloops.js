// JavaScript is a single-threaded programming language which
//  means that only one task can run at a time. It has a call 
//  stack and all the code is executed inside this call stack.

console.log('First!');

setTimeout(function second(){
    console.log('Timed Out!')
}, 1000)

console.log('Final!');     ///output:  first,final,timed out!


const movies = [
    { title: `A New Hope`, body:`After Princess Leia, the leader of the Rebel Alliance, is held hostage by Darth Vader, Luke and Han Solo must free her and destroy the powerful weapon created by the Galactic Empire.`},
    { title: `The Empire Strikes Back`, body: `Darth Vader is adamant about turning Luke Skywalker to the dark side. Master Yoda trains Luke to become a Jedi Knight while his friends try to fend off the Imperial fleet.` }]
    
    function getMovies(){
        setTimeout(() => {
            movies.forEach((movie, index) => {
                console.log(movie.title)
            })
        }, 1000);
    }
    
    getMovies();         //output: A new hope  ------The Empire Strikes Back