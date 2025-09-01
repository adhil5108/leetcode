/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function(title) {
    let ee=title.toLowerCase().split(" ")
    for(let i=0;i<ee.length;i++){
     if(ee[i].length<=2){
      ee[i]=ee[i].toLowerCase()
     }
     else{
       ee[i]= ee[i][0].toUpperCase()+ee[i].slice(1)
     }
    }
    return ee.join(" ")
};