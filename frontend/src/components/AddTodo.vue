<script setup>
import {ref} from 'vue'
const todos = defineModel("todos")

const newTitle = ref('');
const nextId = ref(Math.max(0, ...todos.value.map((t) => t.id)) + 1);
function addTodo() {
  const title = newTitle.value;
  todos.value.push({ id: nextId.value++, title, completed: false });
  newTitle.value = '';
}
</script>

<template>
  <div id="app">
    <section>
      <h2>New Todo</h2>
      <div style="display: flex; align-items: center; gap: 0.5rem; margin: 0.25rem 0;">
        <input
          v-model="newTitle"
          placeholder="New todo title"
          aria-label="New todo title"
        />
        <button v-on:click="addTodo">Add</button>
      </div>
    </section>
  </div>
</template>>