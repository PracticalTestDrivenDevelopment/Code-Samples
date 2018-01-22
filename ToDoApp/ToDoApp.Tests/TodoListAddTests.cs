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

        [Fact]
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
            if(item == null)
            {
                throw new ArgumentNullException();
            }

            _items.Add(item);
        }
    }

    public class Todo
    {
    }
}
