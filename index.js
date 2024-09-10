function countVowels(){
    let sentence = prompt( " Enter a sentence")
    let vowels = "aeiouAEIOU";
    let count = 0;


     for (let char of sentence){
        if (vowels.includes(char)){
            count++
        }
     }
    console.log(`The total num of vowels is: ${count}`)
}
countVowels();