import inquirer from "inquirer";




let Todo: string[] = []

console.clear()
async function App() {
    const Todos: { App: string } = await inquirer.prompt([
        {

            name: "App",
            type: "list",
            message: "Please select your operation",
            choices: [
                "AddTodo", "AllTodo", "exit"]
        }
    ]);
    if (Todos.App === "AddTodo") {
        addTodo()
    } else if (Todos.App === "AllTodo") {
        console.clear()
        allTodo()
    }
}



async function addTodo() {
    const Todos: { todoInput: string } = await inquirer.prompt([
        {
            name: "todoInput",
            type: "input",
            Message: "please add todo"
        },
    ])
    Todo.push(Todos.todoInput);
    App()

}

async function allTodo() {
    if (Todo.length > 0) {
        console.log("your all TODOS");
        Todo.map((todo) => {
            console.log(todo);
        })
    } else {
        console.log("no TODOS found");
    }
    App()

}
App()
