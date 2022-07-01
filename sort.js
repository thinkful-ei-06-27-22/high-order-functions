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



//-1   0  1   2   3  4   5
arr.sort((a,b)=>a.year-b.year);


arr.sort((a,b)=>a.song.toLowerCase()>b.song.toLowerCase() ? 1:-1);
  

arr.sort((a,b)=>{
    console.log('a val',a.song);
    console.log('b val',b.song);
    return a.year-b.year;
});


//console.log(arr);