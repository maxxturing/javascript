### Question 1 - Take

#### Easy

Write a function that takes a list and an integer and returns a list with up to
the n-th element in the list. In case of the integer being bigger than the size
of the list, return the original list.

For example:

```python
take(["apple", "pear", "lemon", "orange"], 2)
# ["apple", "pear"]
```

#### Medium

Imagine the list was circular. So in the above example, `apple` would follow
`orange`:

```python
take(["apple", "pear", "lemon", "orange"], 5)
# ["apple", "pear", "lemon", "orange", "apple"]
```

Imagine the list direction changed after hitting the end of the list. (kind of
like a ping pong ball). So after `orange`, you will reach `lemon`, `pear`,
`apple` and then the cycle will continue.

```python
take(["apple", "pear", "lemon", "orange"], 6)
# ["apple", "pear", "lemon", "orange", "lemon", "pear"]
```

#### Hard

Second argument is a list of start, end positions. And you have to return
multiple lists.

```python
take(["apple", "pear", "lemon", "orange"], [(2, 4), (1, 2)])
# [["pear", "lemon", "orange"], ["apple", "pear"]]
```

_If the programming language being written in doesn't have tuples (e.g.
JavaScript), replace the tuple with an array, e.g._

```javaScript
[[2, 4], [1, 2]]
```

### Question 2 - InsertAt

Write a function that takes a list, an integer and an element and returns a list
with that element inserted into the n-th position.

For example:

```python
insertAt(["ford", "honda", "citroen"], 2, "vauxhall")
# ["ford", "vauxhall", "honda", "citroen"]
```

### Question 3 - Reverse

#### Easy

Write a function to reverse a String: `"OVO is the Best!" -> "!tseB eht si OVO"`

#### Medium

Reverse the words of the list. `"OVO is the Best!" -> "OVO si eht !tseB"`

#### Medium+

Write the function `isPalindrome`

1. Easy: use the function you wrote in #0
2. Medium: Consider spaces and improve time complexity (if candidate went for
   #0)
3. Medium+: Do not consider spaces

### Question 4 - Matrix manipulation

Write a function that takes a matrix and outputs the transpose of the matrix.

![](https://latex.codecogs.com/gif.latex?%5Cbegin%7Bbmatrix%7D%201%20%26%202%20%5C%5C%203%20%26%204%20%5C%5C%205%20%26%206%20%5Cend%7Bbmatrix%7D%20%5E%20%7B%5Coperatorname%7BT%7D%7D%20%3D%20%5Cbegin%7Bbmatrix%7D%201%20%26%203%20%26%205%20%5C%5C%202%20%26%204%20%26%206%20%5Cend%7Bbmatrix%7D)

The person will need to think about how to represent a matrix in their choice of
language.

#### Easy

A square matrix `N x N` is straightforward.

#### Medium

1. Matrix is `M x N`
2. `A[row][col] = A[row][col] + A[row-1][col]`
3. Find the row/column with the maximum sum

### Question 5 - Middle elements

#### Easy

Write a function `middle` which takes a string and returns the middle
character(s) of the string. For strings of odd length, it will be 1 character,
for strings of even length, it will be 2 characters.

```python
middle("abcde") == "c"
middle("abcd")  == "bc"
middle("")      == ""
middle("a")     == "a"
```

#### Medium

Write a function `middle` that takes a string s and an integer n which returns
the middle n elements of the string. Assume n will be odd for strings of odd
length and even for strings of even length.

```python
middle("abcde", 1) == "c"
middle("abcde", 3) == "bcd"
middle("abcd", 4)  == "abcd"
```
