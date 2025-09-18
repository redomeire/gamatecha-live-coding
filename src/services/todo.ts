import { toast } from 'react-toastify';
import { TodoSchemaType } from '~/schemas/todo';
import { ListResponseType } from '~/types/core/response';
import { MoveTodoType, TodoType } from '~/types/todo';

export async function getTodos(): Promise<ListResponseType<TodoType>> {
  const response = await fetch('/api/todos');
  if (!response.ok) throw new Error('Failed to fetch todos.');
  return await response.json();
}

export async function moveTodo(payload: MoveTodoType) {
  toast('Moving todo pending')
  const response = await fetch('/api/todos/move', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    toast('Moving todo failed', { type: 'error' })
    throw new Error('Failed to move todo.');
  }
  
  toast('Moving todo success', { type: 'success' })
  
  return;
}

export async function createTodo(payload: TodoSchemaType) {
  toast('Create todo pending')
  const response = await fetch('/api/todos', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  
  if (!response.ok) {
    toast('Creating todo failed', { type: 'error' })
    throw new Error('Failed to create todo.');
  }
  toast('Creating todo success', { type: 'success' })

  return await response.json();
}

export async function removeTodo(id: string | number) {
  toast('delete todo pending')
  const response = await fetch('/api/todos/' + id, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  });
  
  if (!response.ok) {
    toast('delete todo failed', { type: 'error' })
    throw new Error('Failed to create todo.');
  }
  toast('delete todo success', { type: 'success' })

  return;
}
