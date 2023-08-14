// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers=(arr)=>{return arr.slice(0, 2);}

const returnLastTwoDrivers=(arr)=>{return arr.slice(2, 4);}

let selectingDrivers =[returnFirstTwoDrivers,returnLastTwoDrivers];
//console.log(selectingDrivers[0],returnFirstTwoDrivers(drivers));
function createFareMultiplier(int)
{
    const fun=(far)=>int*far
    return fun;
}
const fareQuintupler = createFareMultiplier(5);
console.log(fareQuintupler(2));

function fareDoubler(far)
{
    const nfun=createFareMultiplier(2);
return nfun(far)
}
function fareTripler(far)
{
    const nfun=createFareMultiplier(3);
return nfun(far)
}
function selectDifferentDrivers(arr,fun)
{
    return fun(arr);
}
//console.log();