/**
 * Do not edit this source code.
 * Or, do it at your own risk.
 */

import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { getTodos, replaceTodos } from '../utils';

export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const validation = z.coerce.number().safeParse(id);

  if (validation.error) {
    return NextResponse.json(
      { error: validation.error.format() },
      { status: 400 },
    );
  }

  const todos = await getTodos();
  const removed = todos.filter((todo) => todo.id !== validation.data);
  await replaceTodos(removed);

  return new NextResponse(null, { status: 204 });
}
