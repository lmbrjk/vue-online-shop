export default function firstSymbolFilter(value){
    
    let words = value.split(" ");

    const lowerWords = words.map( item => item.toLowerCase());

    words = lowerWords.map(word => {

            let letters = word.split("");
            let firstLet = letters[0].toUpperCase();
            letters[0] = firstLet;
            
            word = letters.join("");
            
            return word;            
        }
    );

    value = words.join(" ")
       
    return value; 
}