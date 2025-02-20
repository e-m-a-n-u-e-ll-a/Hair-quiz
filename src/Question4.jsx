import Question from './Question';

function Question4() {
    return (
        <Question
            questionText="Is there anything troubling you about your hair?"
            savedAnswerKey="trouble" 
            options={['a. Breakage', 'b. Frizz', 'c. Scalp dryness', 'd. Damage', 'e. Tangling']}
            backLink='/question3' 
            nextLink='/question5'
            number="fourth"
            buttonValue="Next question"
             buttonClass='next'
        />
    );
}

export default Question4;
