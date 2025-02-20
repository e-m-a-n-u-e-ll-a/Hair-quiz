import Question from './Question';

function Question1() {
    return (
        <Question
            questionText="What`s your hair type or texture?"
            savedAnswerKey="type"
            options={['a. Straight', 'b. Curly', 'c. Wavy', 'd. Fine']}
            backLink='/' 
            nextLink='/question2'
            number='first'
            buttonValue="Next question"
            buttonClass='next'
        />
    );
}

export default Question1;
