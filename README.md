# Friend-Finder

A compatibility-based "FriendFinder" application -- Find the best matches based on personalities. This full-stack site takes in results of your users' surveys (10 questions, on a scale of 1-5), then compare their answers with those from other "users". The app will then display the name and picture of the opposite sex with the best overall match. 

The server and routing is built on Express.

### Overview

1. The user answers 10 questions that evaluate various character traits. Each answer is a number on a scale of 1 to 5 based on how much the user agrees or disagrees with the question.

2. The user's results are converted into a simple array of numbers (ex: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`).
   * The array is used to compare the user's scores against those from other users, question by question. The sum of the differences calculates the `totalDifference`.
     * Example: 
       * You: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`
       * Celebrity: `[3, 2, 6, 4, 5, 1, 2, 5, 4, 1]`
       * Total Difference: 2 + 1 + 2 + 0 + 0 + 0 + 0 + 0 + 0 + 0 = 5

   * The closest match will be the user with the least amount of difference.

3. Once the app finds the current user's most compatible friend, the result is displayed as a modal pop-up.
   * The modal displays both the name and picture of the closest opposite sex match. 
