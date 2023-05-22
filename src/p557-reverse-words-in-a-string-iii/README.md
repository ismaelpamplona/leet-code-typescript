# p557-reverse-words-in-a-string-iii
[https://leetcode.com/problems/reverse-words-in-a-string-iii/](https://leetcode.com/problems/reverse-words-in-a-string-iii/)

So, at this point I know:
1. the parameter type; and
2. the return type;


## First approach - two pointers

- n = number of elements
- time complexity: O(n)
- space complexity: O(1)

You could also argue that we are using $O(n)$ space to build the output string (we normally don't count the output as part of the space complexity, but in this case we are temporarily using some space to build it).