
/**
 * @return a new "debounced" version of the callback function which takes in the same parameters as the callback
 * @executed call the callback after `delay` milliseconds have passed since the last call to this debounced function.
 * @example repeatedly calling a debounced function which had a delay of 3000ms every second would never call the underlying callback function, because the delay of 3000ms would never elapse since the last call.
 */

function customCallback(...args){
    console.log([...args]);
}
function debounce (callback, delay, ...args){
    let timer;
    return function(){
        let self = this;
        clearTimeout(timer);
        timer = setTimeout(() => {
           callback.apply(self, [...args]);
        }, delay);
    }
}

document.querySelector('#debounce_input').addEventListener('keyup', debounce(customCallback, 1000));

//With args
//document.querySelector('#debounce_input').addEventListener('keyup', debounce(customCallback, 1000, 'test arg', 'test arg2'));
