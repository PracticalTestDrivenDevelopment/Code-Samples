using System;
using System.Collections.Generic;
using Xunit;

namespace ToDoApp.Tests
{
    public class TodoListAddTests
    {
        [Fact]
        public void OnNullAnArgumentNullErrorOccurs()
        {
            // Arrange
            var todo = new TodoList();
            Todo item = null;

            // Act
            var exception = Record.Exception(() => todo.AddTodo(item));

            // Assert
            Assert.NotNull(exception);
            Assert.IsType<ArgumentNullException>(exception);
        }

        [Fact(Skip = "Forgot to test negative cases first")]
        public void ItAddsATodoItemToTheTodoList()
        {
            // Arrange
            var todo = new TodoList();
            var item = new Todo();

            // Act
            todo.AddTodo(item);

            // Assert
            Assert.Single(todo.Items);
        }
    }

    internal class TodoList
    {
        private List<Todo> _items = new List<Todo>();

        public IEnumerable<Todo> Items
        {
            get
            {
                return _items;
            }
        }

        public TodoList()
        {
        }

        public void AddTodo(Todo item)
        {
            throw new ArgumentNullException();
        }
    }

    public class Todo
    {
    }
}
