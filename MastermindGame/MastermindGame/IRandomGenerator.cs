﻿namespace MastermindGame
{
    public interface IRandomGenerator
    {
        int Number(int max = 100);
        int Number(int min, int max);
    }
}