function shout(String){
return String.toUpperCase();
}
function whisper(string){
    return string.toLowerCase();
}
function logShout(string){
    console.log(string.toUpperCase());
}

function logWhisper(string){
    console.log(string.toLowerCase());
}
function sayHiToHeadphonedRoommate(string){    
    const lowercase="I can\'t hear you!";
    const uppercase="YES INDEED!";
    const answer="I would love to!";

    if(string.toLowerCase(string)===string){
        return lowercase;
    }
    else if(string.toUpperCase(string)===string){
        return uppercase;
    }
    else if("Let's have dinner together!"===string){
        return answer;
    }
}