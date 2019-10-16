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

Topic falls in the array of **topicIds**:
- Topic 1 falls in the array 0 and 2
- Topic 2 falls in the array 0, 1 and 3
- Topic 3 falls in the array 0, 1 and 3
- Topic 4 falls in the array 1 and 2

Topic question answered in the array **answerIds**:
- Topic 1 tagged question [6, 4], [5]
- Topic 2 tagged question [6, 4], [1, 2], [3]
- Topic 3 tagged question [6, 4], [1, 2], [3]
- Topic 4 tagged question [1, 2], [5]

Topic viewedin the array **views**:
- Topic 1 
  - question 6 -> view array 1 = [6, 3, 5]
  - question 4 -> view array 4 = [4, 2, 3]
  - question 5 -> view array 5 = [1, 4, 2]

- Topic 2 
  - question 6 -> view array 1 = [6, 3, 5]
  - question 4 -> view array 4 = [4, 2, 3]
  - question 1 -> view array 5 = [1, 4, 2]
  - question 2 -> view array 0 = [2, 1, 2]
  - question 3 -> view array 2 = [3, 3, 0]


- Topic 3 
  
- Topic 4 

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
