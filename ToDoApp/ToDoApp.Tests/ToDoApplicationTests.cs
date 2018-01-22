﻿using System;
using System.Collections.Generic;
using System.Linq;
using Xunit;

namespace ToDoApp.Tests
{
    public class ToDoApplicationTests
    {
        [Fact]
        public void TodoListExists()
        {
            var todo = new TodoList();

            Assert.NotNull(todo);
        }

        [Fact]
        public void CanGetTodos()
        {
            // Arrange
            var todo = new TodoList();

            // Act
            var result = todo.Items;

            // Assert
            Assert.NotNull(result);
            Assert.IsAssignableFrom<IEnumerable<Todo>>(result);
            Assert.Empty(result);
        }
    }

    internal class TodoList
    {
        public IEnumerable<Todo> Items { get; } = new List<Todo>();

        public TodoList()
        {
        }
    }

    public class Todo
    {
    }
}
