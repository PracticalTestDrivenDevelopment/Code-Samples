namespace MastermindGame
{
    class Program
    {
        static void Main(string[] args)
        {
            var inout = new ConsoleInputOutput();
            var game = new Mastermind(inout);
            game.Play(args);
        }
    }
}