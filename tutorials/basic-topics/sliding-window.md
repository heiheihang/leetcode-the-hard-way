---
title: 'Sliding Window'
description: 'Sliding window is a technique used to solve problems in array or string.'
hide_table_of_contents: true
keywords:
  - leetcode
  - tutorial
  - sliding window
  - algorithm
---

import TutorialAuthors from '@site/src/components/TutorialAuthors';
import Table from '@site/src/components/Table';

<TutorialAuthors names="@heiheihang"/>

## Overview

In some problems, we need to keep track of the elements in a list that satisfy certain conditions. Let's take a look at [1876 - Substrings of Size Three with Distinct Characters](https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/).

> A string is **good** if there are no repeated characters.
>
> Given a string `s`, return _the number of **good substrings** of length **three** in_ `s`.
>
> Note that if there are multiple occurrences of the same substring, every occurrence should be counted.
>
> A **substring** is a contiguous sequence of characters in a string.

For example, with this input:

```python
s = "xyzzaz"
```

The substrings with length of 3 are:

```python
s1 = "xyz" #index 0-2
s2 = "yzz" #index 1-3
s3 = "zza" #index 2-4
s4 = "zaz" #index 3-5
```

Among these substrings, the only substring with distinct characters is `"xyz"`.

In this problem, we need to keep a _window_ of substrings of length 3.

We can use the following strategy:

* `left_pointer` to keep track of the left character of the substring length of 3
* `right_pointer` to keep track of the right character of the substring length of 3
* We check if the following characters are unique:
  * `s[left_pointer]`
  * `s[left_pointer+1]`
  * `s[right_pointer]`

Let's take a look at the following solution:

```python
def countGoodSubstrings(self, s: str) -> int:
        
        #two pointers to keep track of sliding window
        left_pointer = 0
        right_pointer = 2
        
        unique_substring_count = 0
        
        #when the sliding window is within s
        while(right_pointer < len(s)):
            
            #we declare the 3 characters in the sliding window
            first_char = s[left_pointer]
            second_char = s[left_pointer + 1]
            third_char = s[right_pointer]
            
            #if all characters are unique, add 1
            if(first_char != second_char and first_char != third_char and second_char != third_char):
                unique_substring_count += 1
            
            #shift the sliding window right
            left_pointer += 1
            right_pointer += 1
        
        #return result
        return unique_substring_count
```

In this problem, the size of the sliding window is constant. There are harder problems with varying sliding window size, but you need to learn [Hash Map](hash-map) first.

export const suggestedProblems = [
  {
    "problemName": "1852 - Distinct Numbers in Each Subarray",
    "difficulty": "Medium",
    "leetCodeLink": "https://leetcode.com/problems/distinct-numbers-in-each-subarray",
    "solutionLink": "../../solutions/1800-1899/distinct-numbers-in-each-subarray-medium"
  },
  {
    "problemName": "1004 - Max Consecutive Ones III",
    "difficulty": "Medium",
    "leetCodeLink": "https://leetcode.com/problems/max-consecutive-ones-iii",
    "solutionLink": "../../solutions/1000-1099/max-consecutive-ones-iii-medium"
  },
  {
    "problemName": "1876 - Substrings of Size Three with Distinct Characters",
    "difficulty": "Medium",
    "leetCodeLink": "https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/",
    "solutionLink": ""
  },
]

<Table title="Suggested Problems" data={suggestedProblems} />