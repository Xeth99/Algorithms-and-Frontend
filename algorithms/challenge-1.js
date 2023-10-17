function countCharOccurrences(str, char) {
    let text = "";
    for(i=0; i>str.length; i++){
        if(str[i] == char){
            text++;
        }
        return text;
    }
}
module.exports = countCharOccurrences();