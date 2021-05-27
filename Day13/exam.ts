import {Question} from './Question'
export class Exam{
   
    private questionArr: Question[] = [];

    addQuestion(question:Question): void{
        this.questionArr.push(question);
    }

    print():void{
        for (const question of this.questionArr) {
            console.log(question.caption);
            for (const answer of question.answers) {
                console.log(answer)
            }

            console.log('------------------------------');

        }
    }

    grade(answers: number[]): number {
        let total = 0;
         for (let i=0;i<answers.length; i++){
            let question = this.questionArr[i];
            let answer= answers[i];
            if (typeof(question) !== 'undefined'){
                if (answer=== question.correctIndex) total++;
            }
         }
         return total/this.questionArr.length *100;
    }

}