/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
    let aa=""
    for(let i =0;i<command.length;i++){
        if(command[i]=="G"){
            aa=aa+"G"
        }
        else if(command[i]=="("&&command[i+1]==")"){
            aa=aa+"o"
        }
        else if(command[i]=="("&&command[i+1]=="a"){
            aa=aa+"al"
        }
    }
    return aa
};