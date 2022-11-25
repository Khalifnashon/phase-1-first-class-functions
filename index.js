function receivesAFunction (chai) {
    return chai(); // parenthesis for invoking
}
receivesAFunction(function () { return 'Chai is ready'; });

// Returns a named function

function returnsANamedFunction(){
    return function fn(){
        'returns a function'
    }
}
function returnsAnAnonymousFunction() {
    return function(){
        'returns an anonymous function'
    }
}
