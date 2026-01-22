import { defineStore } from 'pinia'
import { ref } from 'vue'

interface Todo {
    id: number
    title: string
    description: string
    completed: boolean
}

export const useTodosStore = defineStore('todos', () =>{
    let serialId = 4
    const todos = ref<Todo[]>([
        { id: 1, title: 'Buy groceries',description: '牛乳を買う', completed: false},
        { id: 2, title: 'Write report',description: 'Vueの課題を出す', completed: true},
        { id: 3, title: 'Call Alice',description: '12:30にかける', completed: false},
    ])
    const addTodo = (title: string) => {
        const newTodo: Todo = {
            id: serialId++,
            title: title,
            completed: false,
        }
        todos.value.push(newTodo)
    }
    const removeTodo = (id: number) => {

        todos.value = todos.value.filter(todos => todos.id !== idgit )
    }
    return {todos, addTodo, removeTodo}
})