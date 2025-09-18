## gmt

### Main Tasks

1. Add the functionality to reset the form if the todo is created successfully
   in `TodoCreate` component

2. Fix the callback error for `onTodoMove` in `TodoList` component

3. Add the validation for the title and the description in `todoSchema`. And you
   must shown up the error like in a `description`, `alert` or whatever

- Title: required, min 3 characters, max 20 characters
- Description: required, min 3 characters, max 100 characters

4. Add the any loading UI if the todo's mutation is running, e.g. `create`
   `move` or `delete`

#### Additional Tasks (Optional)

- Improve your styling to this project

##### Tips

- Search `@todo` in your IDE for quickjump to the problems.

#### Reference

- [https://v3.zod.dev](https://v3.zod.dev)
- [https://tanstack.com/query/latest](https://tanstack.com/query/latest)
- [https://react-hook-form.com](https://react-hook-form.com)
