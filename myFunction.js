const math = (number1 , number2 , number3 , number4) => {
    let a = number1 + number2*2;

    if (number3){
        a += number3-5;
    
    }

    if (number4){
        a*= number4;}

    return a;
};
console.log(math(1,2))
console.log(math(1,2,3))
console.log(math(1,2,3,4))


const aaa = ( ) => {}   // function2
const bbb = () => {}    // function3
const ccc = () => {}    // function4

const main = {
    aaa,
    bbb,                // object
    ccc
}




export default math;
export {math};  //or
export {aaa,bbb,ccc};