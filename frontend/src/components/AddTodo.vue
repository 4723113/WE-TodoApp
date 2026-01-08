<script setup lang="ts">
import {ref} from 'vue'
import { useTodosStore } from '@/stores/todoStore';

const todoStore = useTodosStore();
const newTitle = ref<string>('');

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
        <button v-on:click="todoStore.addTodo(newTitle)" :disabled="!newTitle">Add</button>
      </div>
    </section>
  </div>
</template>>