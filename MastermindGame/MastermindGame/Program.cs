namespace MastermindGame
{
    class Program
    {
        static void Main(string[] args)
        {
            var inout = new ConsoleInputOutput();
            var game = new Mastermind(inout);

            var password = args.Length > 0 ? args[0] : null;
            game.Play(password);

            inout.WriteLine("Press any key to quit.");
            inout.Read();
        }
    }
}