// code your solution here
function saturdayFun(activity = "roller-skate"){
return (`This Saturday, I want to ${activity}!`);
}

function mondayWork(argument = 'go to the office'){
return (`This Monday, I will ${argument}.`);
}

let wrapAdjective = function (blah="*"){
    return function(adj = "special"){
        return (`You are ${blah}${adj}${blah}!`);
    }
}