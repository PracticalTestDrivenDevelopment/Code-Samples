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
        }
    }

    internal class TodoList
    {
        public object Items { get; } = new object();

        public TodoList()
        {
        }
    }
}
