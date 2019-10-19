**Compute the Most Viewed Writers for each topic:**
- ordered from the smallest topic_id to the largest one.
- If two users have the same number of views
  - the user with the smaller user_id should come first
  
**Note:**
- topicIds[i] contains the topic IDs for the ith question
- answerIds[i] contains the answer IDs for the ith question
- views[i][0] is answer_id
- views[i][1] is user_id
- views[i][2] is the number of views

```
Input:

// In this example, we have 4 different topic IDs: 1, 2, 3, and 4.
topicIds = [[1, 2, 3], [2, 3, 4], [1, 4], [2, 3]],

// array index  0       1     2    3
answerIds = [[6, 4], [1, 2], [5], [3]]

// [answer_id, user_id, views]
views = [[2, 1, 2], [6, 3, 5], [3, 3, 0], [5, 1, 1], [4, 2, 3], [1, 4, 2]]
```

**topic 1** 
- tagged to questions 0 and 2.
- answerIds correspond are 6, 4, and 5.
```
views[1][0] = 6
views[1][2] = 5
views[1][1] = 3

views[3][0] = 5
views[3][2] = 1
views[3][1] = 1

views[4][0] = 4
views[4][2] = 3
views[4][1] = 2
```
3 Most Viewed Writers:
- the userID 3 has 5 views,
- the userID 2 has 3 views,
- the userID 1 has 1 view.
-----------------------------

**topic 2**
- tagged to questions 0, 1, and 3.
- answerIds correspond are 6, 4, 1, 2, and 3
```
views[1][0] = 6
views[1][2] = 5
views[1][1] = 3

views[4][0] = 4
views[4][2] = 3
views[4][1] = 2

views[5][0] = 1
views[5][2] = 2
views[5][1] = 4

views[0][0] = 2
views[0][2] = 2
views[4][1] = 1

views[2][0] = 3
views[3][2] = 0
views[3][1] = 3
```
4 Most Viewed Writers:
- the user with ID 3 has 5 views,
- the user with ID 2 has 3 views,
- the user with ID 1 has 2 views,
- the user with ID 4 has 2 views.
----------------------------------

**topic 3**
- tagged to questions 0, 1, and 3
- answerIds correspond are 6, 4, 1, 2, and 3
```
views[1][0] = 6
views[1][2] = 5
views[1][1] = 3

views[4][0] = 4
views[4][2] = 3
views[4][1] = 2

views[5][0] = 1
views[5][2] = 2
views[5][1] = 4

views[0][0] = 2
views[0][2] = 2
views[4][1] = 1

views[2][0] = 3
views[3][2] = 0
views[3][1] = 3
```
4 Most Viewed Writers:
- the user with ID 3 has 5 views,
- the user with ID 2 has 3 views,
- the user with ID 1 has 2 views,
- the user with ID 4 has 2 views.
-----------------------------------

**topic 4**
- tagged to questions 1 and 2
- answerId correspond are 1, 2, and 5
```
views[5][0] = 1
views[5][2] = 2
views[5][1] = 4

views[0][0] = 2
views[0][2] = 2
views[0][1] = 1

views[3][0] = 5
views[3][2] = 1
views[3][1] = 1

2 Most Viewed Writers:
- the user with ID 1 has 3 views
- the user with ID 4 has 2 views 
```
```
Output:

mostViewedWriters(topicIds, answerIds, views) = [
    [[3, 5], [2, 3], [1, 1]],
    [[3, 5], [2, 3], [1, 2], [4, 2]],
    [[3, 5], [2, 3], [1, 2], [4, 2]],
    [[1, 3], [4, 2]]
]
```

topic_id = 1:
- tagged to questions 0 and 2
  - topicIds [1, 2, 3], [1, 4]  
```
views[1][0] = 6
views[1][2] = 5 
views[1][1] = 3

views[3][0] = 5
views[3][2] = 1 
views[3][1] = 1;

views[4][0] = 4
views[4][2] = 3 
views[4][1] = 2.
```
