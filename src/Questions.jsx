import React from 'react';
import SingleQuestion from './SingleQuestion';

function Questions({ questions }) {
	return (
		<section className="container">
			<h1 className="fs-800 text-900 fw-700 flex items-center">
				<span>
					<img src="/assets/images/icon-star.svg" alt="" />
				</span>
				FAQs
			</h1>
			{questions.map((question) => (
				<SingleQuestion key={question.id} {...question} />
			))}
		</section>
	);
}

export default Questions;
