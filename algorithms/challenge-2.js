function checkNumber(num) {
    if(num > 0 ){
        return "Positive";
    }
    else if(num < 0){
        return "nNgative";
    }
    else{
        return "Zero"
    }
}

module.exports = checkNumber();
