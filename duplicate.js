const numbers = [65, 12, 56, 94, 102, 56, 86, 65, 36, 64, 12, 65, 87, 87, 21, 12];
function removeduplicate (numbers){
    const unique = [];

    // for(let i = 0; i < numbers.length; i++)
    //     const element = numbers[i];
    for(const element of numbers){
        if(unique.indexOf(element) == -1){
            unique.push(element)
        }
    }
    return unique;
}
const uniqueNumbers = removeduplicate(numbers);
console.log(uniqueNumbers);