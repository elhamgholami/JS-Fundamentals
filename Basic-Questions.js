//1 reverse a string
function reverseString(input) {
    return input.split('').reverse().join('');
    
}

//2 is Polindrom?
function isPolindrom(input)
{
    return input == reverseString(input);
}

//3 find the factorial
function factorial(number)
{
    
    if(number == 0)
        return 1;
    else
        return factorial(number -1 ) * number;
}

//4 flatenning an array
function flattenArray(arr) {
    return arr.reduce((flat, toFlatten) => 
        flat.concat(Array.isArray(toFlatten) ? flattenArray(toFlatten) : toFlatten), []);
}

//5 remove duplicates
function removeDuplicate(input)

{
    return input.filter((value, index) =>
        {
            return input.indexOf(value) == index
        }
    )
}

//6 find max
function findMax(input)

{
    let max =input[0];
     input.map((number) =>
    {
        if (number > max) 
            max = number;
    })
    return max;
}

//7 simple todoList
class todoList
{
    constructor ()
    {
        this.toDos = []
    }
    addToDo(todo)
    {
        this.toDos.push(todo)
    }
    removeToDo(done)
    {
        this.toDos.splice(todos.indexOf(done),1)
    }
    showToDo()
    {
        console.log("--------------------------------------------------")
        this.toDos.forEach((todo, index) => {
            console.log(`Task number ${index+1} | ${todo}`)
        });
        console.log("--------------------------------------------------")
    }
}
const todos = new todoList();
todos.addToDo('This is task 1');
todos.addToDo('Do something! ');
todos.showToDo();