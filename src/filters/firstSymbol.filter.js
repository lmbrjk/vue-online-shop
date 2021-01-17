export default function firstSymbolFilter(value){
    
    const words = value.split(" ");

    words.forEach( item => item.toLowerCase());

    console.log(words);
    //console.log(words.join(" "));

   
        
    return value; 
}