import { Todo } from '../types/Todo';
import { client } from '../utils/fetchClient';

export const USER_ID = 6;

export const getTodos = () => {
  return client.get<Todo[]>(`/todos?userId=${USER_ID}`);
};

export const postTodo = (todo: Omit<Todo, 'id'>) => {
  return client.post<Todo>('/todos', todo);
};

export const deleteTodo = (id: number) => {
  return client.delete(`/todos/${id}`);
};

export const updateTodo = (todo: Todo): Promise<Todo> => {
  const { completed, userId, title, id } = todo;

  return client.patch<Todo>(`/todos/${id}`, { completed, userId, title });
};
