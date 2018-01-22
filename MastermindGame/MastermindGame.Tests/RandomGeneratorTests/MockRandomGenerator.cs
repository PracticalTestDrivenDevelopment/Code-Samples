using System.Collections.Generic;

namespace MastermindGame.Tests
{
    public class MockRandomGenerator : IRandomGenerator
    {
        private readonly List<int> _numbers;
        private List<int>.Enumerator _numbersEnumerator;

        public MockRandomGenerator(List<int> numbers = null)
        {
            _numbers = numbers ?? new List<int>();
            _numbersEnumerator = _numbers.GetEnumerator();
        }

        public int Number(int min, int max)
        {
            var result = Number(max);

            return result < min ? min : result;
        }

        public int Number(int max = 100)
        {
            _numbersEnumerator.MoveNext();
            var result = _numbersEnumerator.Current;

            return result > max ? max : result;
        }

        public void SetNumbers(params int[] args)
        {
            _numbers.AddRange(args);
            _numbersEnumerator = _numbers.GetEnumerator();
        }
    }
}
