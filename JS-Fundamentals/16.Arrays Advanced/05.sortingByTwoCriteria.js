function sort(params) {

    let sorting = function (a, b) {
        let boo = a.length - b.length;
        if(boo === 0){
            return a.localeCompare(b);
        }
        return boo;
    }

    let sorted = params.sort(sorting);

    for (const item of sorted) {
        console.log(item);
    }

}
sort(["alpha", "beta","aeta", "gamma"]);

// Write a function that orders an array of strings, by their length in ascending order as primary criteria, and by alphabetical value in ascending order as second criteria. The comparison should be case-insensitive.
// The input comes as array of strings.
// The output is the ordered array of strings.
