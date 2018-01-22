using System;
using System.Linq;

namespace MastermindGame
{
    public class Mastermind
    {
        private readonly IInputOutput _inout;
        private string guess;
        private int tries;
        private int correctPositions;

        public Mastermind(IInputOutput inout)
        {
            _inout = inout;
        }

        public void Play(string password = null)
        {
            // Determine if a password was passed in?
            password = password ?? CreateRandomPassword();

            // Player move - guess the password           
            while (correctPositions != 4)
            {
                _inout.Write("Take a guess: ");
                guess = _inout.ReadLine();
                tries = tries + 1;

                if (guess.Length != 4)
                {
                    // Password guess was wrong size - Error Message
                    _inout.WriteLine("Password length is 4.");
                }
                else
                {
                    // Check if the password provided by the player is correct
                    guess = guess.ToUpper();
                    var guessResult = "";

                    for (var x = 0; x < 4; x++)
                    {
                        if (guess[x] == password[x])
                        {
                            guessResult += "+";
                        }
                        else if (password.Contains(guess[x]))
                        {
                            guessResult += "-";
                        }
                    }

                    correctPositions = guessResult.Count(c => c == '+');
                    _inout.WriteLine(guessResult);
                }
            }

            // Game over you win
            _inout.WriteLine("Congratulations you guessed the password in " + tries + " tries.");
        }

        private string CreateRandomPassword()
        {
            // Initialize randomness
            Random rand = new Random(DateTime.Now.Millisecond);

            var password = new[] { 'A', 'A', 'A', 'A' };

            var j = 0;

            password_loop:
            password[j] = (char)(rand.Next(6) + 65);
            j = j + 1;

            if (j < 4) goto password_loop;
            return password.ToString();
        }
    }
}