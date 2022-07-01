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

let modernArtists = arr.filter(item=>item.year>=2000).map(item=>item.artist);
//console.log(modernArtists);




//Reduce examples
let sum = 0;
for(let item of arr){
    sum+=item.year;
}
//console.log('average song year',sum/arr.length);

let shorterSum = arr.reduce((acc,item)=>acc+item.year,0);
//console.log('average song year',shorterSum/arr.length);


let categories = arr.reduce((acc,item)=>{
    if(acc[item.genre]){
        acc[item.genre].push(item);
    }else{
        acc[item.genre] = [item];
    }
    return acc;
},{})


let genreKeys = Object.keys(categories);
console.log(genreKeys);
genreKeys.sort((a,b)=>{
    return categories[a].length-categories[b].length;
})

console.log(genreKeys);
for(let key of genreKeys){
    console.log(categories[key], categories[key].length);
}

/*let acc={}
for(let item of arr){
    if(acc[item.genre]){
        acc[item.genre].push(item);
    }else{
        acc[item.genre] = [item];
    }
}*/
//console.log(categories.pop.length)
///
/*let obj = {
    rap:[],
    pop:[]
}*/

