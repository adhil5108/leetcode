/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let sum = init;
    return{
      increment:function(){
        sum=sum+1
        return sum;
      },
        decrement:function(){
            sum=sum-1
            return sum;
        },
        reset:function(){
            sum=init;
            return sum;
        }

    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */