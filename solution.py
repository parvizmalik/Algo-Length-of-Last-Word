
def length_of_last_word(s: str) -> int:
    return len(s.rstrip().split(' ')[-1])

s = "Hello World"
print(length_of_last_word(s))  # Expected output: 5



def length_of_last_word(s: str) -> int:
    # Initial count is zero.
    count = 0
    i = len(s) - 1  # Start from the end of the string.
    
    # Skip over trailing spaces.
    while i >= 0 and s[i] == ' ':
        i -= 1
    
    # Count characters of the last word.
    while i >= 0 and s[i] != ' ':
        count += 1
        i -= 1
        
    return count

# Testing the function
s = "Hello World"
print(length_of_last_word(s))  # Expected output: 5
