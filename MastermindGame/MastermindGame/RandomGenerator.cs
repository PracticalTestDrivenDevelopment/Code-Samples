using System;

namespace MastermindGame
{
    public class RandomGenerator : IRandomGenerator
    {
        private readonly Random _rand;

        public RandomGenerator()
        {
            _rand = new Random();
        }

        public int Number(int max = 100)
        {
            return _rand.Next(0, max);
        }

        public int Number(int min, int max)
        {
            return _rand.Next(min, max);
        }
    }
}
