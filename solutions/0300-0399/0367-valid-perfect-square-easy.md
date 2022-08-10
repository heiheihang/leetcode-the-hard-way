---
description: 'Author: @wingkwong | https://leetcode.com/problems/valid-perfect-square/'
---

import SolutionAuthor from '@site/src/components/SolutionAuthor';

# 0367 - Valid Perfect Square (Easy)

## Problem Link

https://leetcode.com/problems/valid-perfect-square/

## Problem Statement

Given a **positive** integer _num_, write a function which returns True if _num_ is a perfect square else False.

**Follow up:** **Do not** use any built-in library function such as `sqrt`.

**Example 1:**

```
Input: num = 16
Output: true
```

**Example 2:**

```
Input: num = 14
Output: false
```

**Constraints:**

* `1 <= num <= 2^31 - 1`

## Approach 1: Binary Search

Prerequisite: [Binary Search](../../tutorials/basic-topics/binary-search).

<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    bool isPerfectSquare(int num) {
        // init possible range
        // for num > 2, the range is actually [2 .. num / 2]
        long long l = 1, r = num;
        while (l < r) {
            long long m = l + (r - l) / 2;
            // exclude m
            if (num > m * m) l = m + 1;
            // include m
            else r = m;
        }
        // check if it is a perfect square
        return l * l == num;
    }
};
```
