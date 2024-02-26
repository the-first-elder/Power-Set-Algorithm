function powerSet(set) {
    // Base case: if the set is empty, return an array containing an empty set
    if (set.length === 0) {
        return [''];
    }
    
    // Extract the first element from the set
    const firstElement = set[0];
    
    // Compute the power set of the set without the first element
    const subsetsWithoutFirst = powerSet(set.slice(1));
    
    // Compute the power set of the set without the first element
    // by adding the first element to each subset of the set without the first element
    const subsetsWithFirst = subsetsWithoutFirst.map(subset => firstElement + subset);
    
    // Merge the subsets with and without the first element
    return subsetsWithoutFirst.concat(subsetsWithFirst);
}

// Example usage
const set = [1, 'b', 'c'];
console.log(powerSet(set));

