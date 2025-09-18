'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { ToastContainer } from 'react-toastify';
import { useCreateTodo } from '~/hooks/todo';
import { todoSchema, TodoSchemaType } from '~/schemas/todo';

export function TodoCreate() {
  const form = useForm<TodoSchemaType>({
    resolver: zodResolver(todoSchema),
  });

  const { create, isSuccess, status } = useCreateTodo();

  const onSubmit = (data: TodoSchemaType) => {
    /**
     * @todo: Add the functionality to reset the form if the todo is created successfully
    */

    create(data);

    if (isSuccess) {
      form.reset()
    }
  };

  return (
    <div>
    <ToastContainer />
      <div className="max-w-[500px] w-full p-5 border-2 shadow border-gray-100">
      <h1 className='text-3xl mb-3 font-semibold'>Add your new todo</h1>
      <p className='mb-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio illum architecto error</p>
      <div className="flex flex-col gap-y-2">
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            className="border px-2 rounded-sm border-gray-300 w-full h-8"
            {...form.register('title')}
          />
          <span className="text-sm text-red-500 block">
            {form.formState.errors.title && form.formState.errors.title?.message}
          </span>

          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            className="border px-2 py-1 rounded-sm border-gray-300 w-full"
            {...form.register('description')}
          />
          <span className="text-sm text-red-500 block">
            {form.formState.errors.description && form.formState.errors.description?.message}
          </span>

          <div className="flex justify-end">
            <button
              type="submit"
              className="px-3 py-2 bg-gray-200 text-sm hover:bg-gray-300 cursor-pointer active:scale-95 w-fit transition-transform duration-150 rounded-sm flex gap-x-2 items-center"
            >
              {
                status === 'pending' ? <>
                  <svg aria-hidden="true" className="w-5 h-5 text-gray-200 animate-spin dark:text-white fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                  </svg>
                  <span>Save</span>
                </> : <>
                    💾
                    <span>Save</span>
                  </>
              }
            </button>
          </div>
        </form>
      </div>
      </div>
    </div>
  );
}
