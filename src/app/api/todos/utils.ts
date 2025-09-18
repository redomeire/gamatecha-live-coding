/**
 * Do not edit this source code.
 * Or, do it at your own risk.
 */

import { existsSync } from 'fs';
import { readFile, writeFile } from 'fs/promises';
import { TodoType } from '~/types/todo';

const path = process.cwd() + '/src/app/api/todos/data.json';

export async function getTodos(): Promise<TodoType[]> {
  if (!existsSync(path)) {
    await replaceTodos([]);
  }

  const file = await readFile(path, 'utf-8');
  return JSON.parse(file);
}

export async function replaceTodos(todos: TodoType[]): Promise<void> {
  const data = JSON.stringify(todos, null, 2);
  await writeFile(path, data, 'utf-8');
}
