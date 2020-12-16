# javascript-quiz

Link to repository: https://khsieh95.github.io/javascript-quiz/.

# App Image:

<img width="1440" alt="Screen Shot 2020-12-15 at 5 58 28 PM" src="https://user-images.githubusercontent.com/74025123/102306810-f872c180-3f17-11eb-916d-eb0a20b6a85f.png">

# Javascript Image:

![Screen Shot 2020-12-15 at 5 58 58 PM (2)](https://user-images.githubusercontent.com/74025123/102306837-07597400-3f18-11eb-9b45-28254d975d16.png)

# Summary

In this homework assignment I was tasked with creating a quiz using strictly javascript.

## HTML

Creating the html and overall skeleton was first on my agenda. The homepage had to display the introduction, start button, and instructions. Following the general text, I have to create 4 buttons, that would serve as my _answers_ for the actual multiple choice section. Followed by another div that would serve as my end results page.

### Javascript

This was the toughest part. My first step was to create an array of arrays that would serve to populate the new questions, answers, and correct answers whenever prompted to. Then I worked on the function of the start button to make sure that I was getting the homepage to hide its display, and then the container of the new content (questions and answers) would then show. Then I focused on the timer to make sure that it began when the start button function was clicked, so that it would run WITH the quiz to serve as the end score. I then created a function for each button, followed by an if statement with the condition of if the content of the answer clicked does not match the content of correct answer index, to subtract 10 from the time. Then I created another function (nextquestion) that would serve to push to the next question whenever a button was clicked, whether the answer was right or wrong. However, in function endquiz, a condition was made so that if question is greater than the length of the questions list -1, then the quiz itself would stop. This stops the quiz and runs the last function, taking you to the results page. Here, the input and final score (timer), is taken and scored locally. Ending the participants quiz. _During the process of this script, I was constantly console logging information and objects to make sure each button and function was running accordingly before moving onto the next step_.

#### CSS

This was the last part that I took care of. I did very basic styling to make sure the containers were centered to my liking and that the background image reflected that of a tennis theme (to match the quiz).

##### Final touches

After my program was functioning. I took a lot of time to do my best to polish up the code with the advice of Google and friends. I had a lot of redundant code within the if statements and buttons, and my variables were everywhere. I did my best to place all global variables at the top of the page, and all event listeners at the bottom, commenting as I went. I then made the "if" statement for ALL 4 buttons into its own function, so that it didn't repeat.
