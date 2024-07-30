import React from 'react';
import SingleQuestion from './SingleQuestion';

function Questions({ questions }) {
	return (
		<section className="container">
			<h1>FAQs</h1>
			{questions.map((question) => (
				<SingleQuestion key={question.id} {...question} />
			))}
		</section>
	);
}

export default Questions;
