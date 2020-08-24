// Javascript solution (with unique keyword from each review):

function solution(k, keywords, reviews){
//setting keywordsMap's each word count as 0
let keywordsMap = {};
keywords.forEach(function(word){
//making keywords also case-insensitive
keywordsMap[word.toLowerCase()]=0;
console.log("word",word)
console.log("keywordsMap",keywordsMap)
});

//splitting reviews into keywords all combined
let reviewsArr = [];
reviews.forEach(review => {
    let arr = review.toLowerCase().split(/\W/g); 
    //find unique keywords from each review as per the explanation in example 2
    let uniqueWords = [];
    arr.forEach(word=>{
        console.log("word",word)  
        console.log("uniqueWords",uniqueWords) 
        if(uniqueWords.indexOf(word)==-1){
            console.log("uniqueWords",uniqueWords) 
            uniqueWords.push(word);
        }
        console.log("arr",arr)  
    });
    reviewsArr = reviewsArr.concat(uniqueWords);
    console.log("reviewsArr",reviewsArr) 
});


//counting keywords in the given set of review words (duplicate keywords removed from each review)
reviewsArr.forEach(review => {
    console.log("review",review)
    console.log("keywordsMap[review]",keywordsMap[review])
    if(keywordsMap[review] || keywordsMap[review] === 0) { 
        keywordsMap[review] += 1;
    }
});

//sorting based on max count of keywords and lexicographical sorting when count equals
let keys = Object.keys(keywordsMap); 
console.log("keys",keys)  
const frequency = keys.sort(function(current,next){
    console.log("current",current) 
    if(keywordsMap[current] === keywordsMap[next]){
        return current.localeCompare(next);
    }else{
        return keywordsMap[next]-keywordsMap[current];
    }
});
console.log("frequency",frequency)
console.log("frequency.slice(0, k)",frequency.slice(0, k))
return frequency.slice(0, k);
}

let res1 = solution(2,
['aNacell', 'cetracular', 'betacellular'], //testing for case-insensitivity
['Anacell provides the best services in the city', 'betacellular has awesome services',
'Best services provided by anacell, everyone should use anacell']
);

let res2 = solution(2,
['anacell', 'betacellular', 'cetracular', 'deltacellular', 'eurocell'],
['I love anacell Best services; Best services provided by anacell',
'betacellular has great services', 'deltacellular provides much better services than betacellular',
'cetracular is worse than anacell', 'Betacellular is better than deltacellular.']
);

console.log(res1, res2);