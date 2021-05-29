import { Question } from "./question";

export const QUESTIONS: Question[] = [
  {
    caption:'What kind of animal is Manny in "Ice Age: The Meltdown"?' ,
    answers:['Zebra', 'Cheetah', 'Mammoth', "Monkey"],
    correctAnswer: 2,
    userAnswer:-1
  },
  {
    caption: 'What is the name of the toy cowboy in Toy Story?',
    answers:['Woody','Sid', 'Buzz','Ellen' ],
    correctAnswer: 0,
    userAnswer:-1
  },
  {
    caption: 'Who is Mufasa’s trusted advisor in The Lion King?',
    answers:['Rafiki','Zazu','Pumbaa','Scar'],
    correctAnswer: 1,
    userAnswer:-1
  },
  {
    caption:'What is the name of Harry Potter’s pet owl?' ,
    answers:['Gizmo','Kasper','Swoops','Hedwig'],
    correctAnswer: 3,
    userAnswer:-1
  },
]
