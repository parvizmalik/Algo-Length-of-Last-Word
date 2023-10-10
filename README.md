# Algo-Length-of-Last-Word
solution in Python , JS

You can find the length of the last word in a string without using rstrip() or split() methods. Here's one approach using a loop:

Start from the end of the string.
Skip over any trailing spaces.
Count the characters of the last word until you encounter another space or reach the beginning of the string.
This code first ignores any trailing spaces and then counts the characters in the last word until another space is found or the start of the string is reached.
