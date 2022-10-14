function getAreaOfCircle(radius){
    const pi = 3.14;
    var area = (pi * radius) ** 2;
    return area;
}

function doCheckOddOrEven(value){
    if(value % 2 == 0){
        return "ODD";
    }else{
        return "EVEN";
    }
}

function doCheckVowelOrConsonant(char){
    char = char.toLowerCase();
    if(char == "a" || char == "e" || char == "i" || char == "o" || char == "u"){
        return "vowel";
    }else{
        return "consonant";
    }
}

function getFlowerColor(flower){
    switch(flower){
        case "rose":
            return "red";
        case "violet":
            return "blue";
        case "sunflower":
            return "yellow";
        default: 
            return "unknown";
    }
}

function getCalendarMonthDays(monthName){
    monthName = monthName.toLowerCase();
    switch(monthName){
        case "september":
        case "april":
        case "june": 
        case "november": 
            return 30;
        case "february":
            return 28;
        default:
            return 31;
    }
}






