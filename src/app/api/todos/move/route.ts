/**
 * Do not edit this source code.
 * Or, do it at your own risk.
 */

import _ from 'lodash';
import { NextRequest, NextResponse } from 'next/server';
import { MoveTodoType, TodoAction } from '~/types/todo';
import { getTodos, replaceTodos } from '../utils';

export async function POST(request: NextRequest) {
  const todos = await getTodos();
  const payload: MoveTodoType = await request.json();

  const { id, action } = payload;

  if (typeof id !== 'number') {
    return NextResponse.json(
      { errors: [{ details: 'Invalid id' }] },
      { status: 400 },
    );
  }

  const index = _(todos).findIndex({ id });
  const swapIndex = action === TodoAction.MOVE_UP ? index - 1 : index + 1;

  if (swapIndex < 0 || swapIndex >= todos.length) {
    return NextResponse.json(
      { errors: [{ details: 'Invalid index to move' }] },
      { status: 400 },
    );
  }

  [todos[index], todos[swapIndex]] = [todos[swapIndex], todos[index]];
  await replaceTodos(todos);

  return new NextResponse(null, { status: 204 });
}
