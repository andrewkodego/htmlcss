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

function incrementCounter(counter, maxvalue, targetDisplay, increment=1){
    if(targetDisplay == null){
        targetDisplay = document.body;
    }
    let addComma = false;
    while(counter <= maxvalue){
        if(addComma){
            targetDisplay.innerHTML += ", ";
        }
        targetDisplay.innerHTML += counter;
        addComma = true;
        counter += increment;
    }
}

function decrementCounter(counter, minvalue, targetDisplay, decrement=1){
    if(targetDisplay == null){
        targetDisplay = document.body;
    }
    let addComma = false;
    while(counter >= minvalue){
        if(addComma){
            targetDisplay.innerHTML += ", ";
        }
        targetDisplay.innerHTML += counter;
        addComma = true;
        counter -= decrement;
    }
}

function getStaffCount(key, value, operator="="){
    let dataCount = 0;
    let i = 0;
    while(i < staff.length){
        switch(key){
            case  "age":
                if(operator == ">" && staff[i][key] > value){
                    dataCount++;
                }else if(operator == "<" && staff[i][key] < value){
                    dataCount++;
                }else if(operator == ">=" && staff[i][key] >= value){
                    dataCount++;
                }else if(operator == "<=" && staff[i][key] <= value){
                    dataCount++;
                }else if(staff[i][key] == value){
                    dataCount++;
                }
                break;
            case "language":
                let j = 0;
                while(j < staff[i].languages.length){
                    if(staff[i].languages[j] == value){
                        dataCount++;
                    }
                    j++;
                }
                break;
            default:
                if(staff[i][key] == value){
                    dataCount++;
                }
                break;
        }
        i++;
    }
    return dataCount;
}





