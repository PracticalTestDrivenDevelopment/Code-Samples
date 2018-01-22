using System;
using System.Linq;

namespace MastermindGame
{
    public class Mastermind
    {
        private readonly IInputOutput _inout;

        public Mastermind(IInputOutput inout)
        {
            _inout = inout;
        }

        public void Play(string[] args)
        {
            // Variable Declarations - Global??
            char[] g;
            char[] p = new[] { 'A', 'A', 'A', 'A' };
            int i = 0;
            int j = 0;
            int x = 0;
            int c = 0;

            // Initialize randomness
            Random rand = new Random(DateTime.Now.Millisecond);

            // Determine if a password was passed in?
            if (args.Length > 0 && args[0] != null) p = args[0].ToCharArray();
            else goto randomize_password; // Create a password if one was not provided

            // Player move - guess the password
            guess: _inout.Write("Take a guess: ");
            g = _inout.ReadLine().ToArray();
            i = i + 1;
            if (g.Length != 4) goto wrong_size;
            if (g == p) goto success;
            x = 0;
            c = 0;

            // Check if the password provided by the player is correct
            check_loop:
            if (g[x] > 65 + 26) g[x] = (char)(g[x] - 32);
            if (g[x] == p[x]) _inout.Write("+", c = c + 1);
            else if (p.Contains(g[x])) _inout.Write("-");
            x = x + 1;
            if (x < 4) goto check_loop; // Still checking??
            _inout.WriteLine();
            if (c == 4) goto success; // Password must have been correct
            goto guess; // No correct, try again

            // Game over you win
            success: _inout.WriteLine("Congratulations you guessed the password in " + i + " tries.");
            goto end;

            // Password guess was wrong size - Error Message
            wrong_size: _inout.WriteLine("Password length is 4.");
            goto guess;

            // Create a random password
            randomize_password: j = 0;
            password_loop: p[j] = (char)(rand.Next(6) + 65);
            j = j + 1;
            if (j < 4) goto password_loop;
            goto guess; // Start the game

            // Game is complete - exit
            end: _inout.WriteLine("Press any key to quit.");
            _inout.Read();
        }
    }
}