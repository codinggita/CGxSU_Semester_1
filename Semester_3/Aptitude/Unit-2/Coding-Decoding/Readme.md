# Coding and Decoding

## 1. What is Coding and Decoding

A word or number is converted into a code using a fixed, hidden rule. The task is to find that rule from an example, and then apply it to a new word or number.

## 2. Letter Position Table (Needed for Most Questions)

```
A  B  C  D  E  F  G  H  I  J  K  L  M  N  O  P  Q  R  S  T  U  V  W  X  Y  Z
1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26
```

Reverse position (from the end) is also useful:

```
A=26, B=25, C=24 ... Z=1  (i.e., Reverse position = 27 − normal position)
```

## 3. Letter Shifting Code

Each letter is shifted forward or backward by a fixed number of steps in the alphabet.

```
Shift forward by n: new letter position = old position + n
Shift backward by n: new letter position = old position − n
```

## 4. Substitution Code

A direct code is given for certain words, and a new sentence is coded using the same substitutions, without needing a logical rule.

```
Find common word between two coded sentences → the matching code is that word's code
```

## 5. Number Coding

Numbers are assigned to words or letters based on a rule such as position, number of letters, or a mathematical operation on the position.

```
Common patterns: position number, position × 2, position + fixed number, reverse position
```

## 6. Symbol or Mixed Coding

Words are coded using a mix of symbols and numbers, usually based on each letter's position or a given key.

## 7. Word-to-Word Coding Pattern Check

```
Step 1: Compare letter-by-letter between the word and its code
Step 2: Find the fixed number of steps or pattern shift between each pair
Step 3: Apply the same shift/pattern to the new word
```

## 8. Direction-Based or Analogy-Based Coding

Sometimes two related words are given with their relationship, and a similar relationship must be applied to a new pair, following the same rule (shift, reverse, substitution, etc).