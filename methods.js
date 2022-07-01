let arr = [
    {song:'Cant Touch This', year:1990, genre:'hiphop', artist:'MC Hammer'},
    {song: 'All is Well', year: 2022, genre: 'folk', artist: 'Avi Kaplan'},
    {song:'Father Time', year: 2022, genre:'rap', artist:'Kendrick Lamar'},
    {song: 'Baby my phone', year: 2021, genre: 'pop', artist: 'yameiionline'},
    {song:'Empty', year:2019, genre:'rap', artist:'Juice Wrld'},
    {song:'Rasputin', year:1978, genre:'pop', artist:'Boney M'},
    {song:'Africa', year: 1982, genre:'pop', artist:'Toto'},
    {song: 'So Into You', year:1998, genre: 'R&B', artist:'Tamia' },
    {song: 'whats my age again', year:1999, genre: 'rock', artist: 'Blink-182'},
    {song: "Funkytown", year: 1979, genre:"pop", artist: "Lipps Inc"}
]

//Find - return an object based on search criteria
let rockSong = arr.find(item=>item.genre==='rock');
//console.log(rockSong)

//Filter - returns an array based on search criteria
let popSongs = arr.filter(item=>item.genre==='pop')
//console.log(popSongs)

//Map - returns a modified array
//let songList = arr.map(item=>item.song);
//console.log(songList)
/*let updateAllSongs = arr.map(item=>{
    item.year=2022;
    return item
});*/
//console.log(updateAllSongs)


//Some - return true if a case is true for atleast 1 item in the array
let areThereNinetiesSongs = arr.some(item=> item.year> 1989 && item.year <2000);
console.log(areThereNinetiesSongs)

//Every - return true if a case is true for ALL items in the array
let allNewerSongs = arr.every(item=> item.year> 1970);
console.log(allNewerSongs)
