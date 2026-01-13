'use client';

import React, { useEffect } from 'react';
import useTodoStore from '@/lib/store';
import { demoTodos } from '@/lib/demo-data';

const DemoDataLoader: React.FC = () => {
  const { todos, addTodo, hydrated } = useTodoStore();

  useEffect(() => {
    if (hydrated && todos.length === 0) {
      demoTodos.forEach(todo => addTodo(todo));
    }
  }, [hydrated, todos.length, addTodo]);

  return null;
};

export default DemoDataLoader;
