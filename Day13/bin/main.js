"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var exam_1 = require("./exam");
var e = new exam_1.Exam();
e.addQuestion({
    caption: '1 + 1?',
    answers: [
        '1',
        '2',
        '3',
        '4'
    ],
    correctIndex: 3
});
e.addQuestion({
    caption: '4 + 5?',
    answers: [
        '5',
        '2',
        '9',
        '4'
    ],
    correctIndex: 2
});
e.addQuestion({
    caption: '7 + 7?',
    answers: [
        '14',
        '23',
        '38',
        '47'
    ],
    correctIndex: 0
});
e.addQuestion({
    caption: '111 + 1?',
    answers: [
        '122',
        '112',
        '356',
        '478'
    ],
    correctIndex: 1
});
e.print();
var ans1 = [0, 1, 2, 3];
var ans2 = [3, 2, 0, 1];
var ans3 = [1, 3, 2, 3, 4, 4, 4];
console.log(ans1);
console.log(e.grade(ans1));
console.log(ans2);
console.log(e.grade(ans2));
console.log(ans3);
console.log(e.grade(ans3));
//# sourceMappingURL=main.js.map