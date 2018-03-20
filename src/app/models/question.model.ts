import { QuestionOption } from "./question-options.model";

export class Question {
    id: number;
    text: string;
    options: QuestionOption[];
    correctOptionId: number;
}
