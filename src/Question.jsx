/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Question.css';

function Question({ questionText, savedAnswerKey, options, backLink, nextLink, number, buttonValue, buttonClass }) {
    const [answer, setAnswer] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        const savedAnswer = localStorage.getItem(savedAnswerKey);
        if (savedAnswer) {
            setAnswer(savedAnswer);
            setError('');
        }
    }, [savedAnswerKey]);

    const saveAnswer = (e) => {
        const currentAnswer = e.target.value;
        setAnswer(currentAnswer);
        localStorage.setItem(savedAnswerKey, currentAnswer);
    };

    const handleNext = (e) => {
        if (!answer) {
            e.preventDefault()
            setError('Please select an aswer.');
        }
   
    }

    return (
        <div className='outer'>
            <form>
                <h2 className='noto-serif-display-tag'>{questionText}</h2>
                <div className='wrapper'>
                    {options?.map((option, index) => (
                        <input
                            key={index}
                            type="button"
                            value={option}
                            onClick={saveAnswer}
                            className={answer === option ? 'selected' : ''}
                        />
                    ))}
                </div>
                {error && <p className='error-message' style={{color: 'red'}}>{error}</p>}
                <div className='buttons'>
                    <Link to={backLink}>
                        <button className='back'>Back</button>
                    </Link>
                    <Link to={nextLink} onClick={handleNext}>
                        <button className={buttonClass}>{buttonValue}</button>
                    </Link>
                </div>
            </form>
            <div className={`progress-bar ${number}`}></div>
        </div>
    );
}

export default Question;
