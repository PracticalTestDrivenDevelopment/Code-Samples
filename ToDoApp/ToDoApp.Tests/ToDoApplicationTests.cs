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
    }

    internal class TodoList
    {
        public TodoList()
        {
        }
    }
}
