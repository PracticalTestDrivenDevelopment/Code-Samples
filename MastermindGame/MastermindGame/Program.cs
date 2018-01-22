namespace MastermindGame
{
    class Program
    {
        static void Main(string[] args)
        {
            var game = new Mastermind();
            game.Play(args);
        }
    }
}