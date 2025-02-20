import Question from './Question';

function Question3() {
    return (
        <Question
            questionText="What benefit do you look for in your hair products?"
            savedAnswerKey="benefit" 
            options={['a. Anti-breakage', 'b. Hydration', 'c. Soothing dry scalp', 'd. Repairs appearance of damaged hair', 'e. Volume', 'f. Curl and coil enhancing']}
            backLink='/question2' 
            nextLink='/question4'
            number="third"
            buttonValue="Next question"
            buttonClass='next'
        />
    );
}

export default Question3;
