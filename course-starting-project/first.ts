//make a network request to fetch some json and print the result
import axios from 'axios'

const url='https://jsonplaceholder.typicode.com/todos/1';
interface ToDo {
    id:number;
    title:string;
    completed:boolean;
}
axios.get(url).then(response => {
    const todo = response.data as ToDo;

    const id = todo.id;
    const title = todo.title;
    const completed = todo.completed;

    console.log(`The todo with ID: ${id}
    Has a title of: ${title}
    Is it finished: ${completed}
    `);
})

