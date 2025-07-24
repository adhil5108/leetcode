/**
 * @param {*} obj
 * @param {*} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function(obj, classFunction) {
    if (typeof classFunction !== "function") return false;
     if(obj===null || obj===undefined){return false}
    if (obj instanceof classFunction) return true;
    if (Object(obj) instanceof classFunction) return true;
   
    return false;
};


/**
 * checkIfInstanceOf(new Date(), Date); // true
 */