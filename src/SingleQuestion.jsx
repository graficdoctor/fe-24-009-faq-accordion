import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa6';

function SingleQuestion({ title, info }) {
	const [showInfo, setShowInfo] = useState(false);

	return (
		<article className="question">
			<header>
				<h2 className="fs-500 fw-600 text-900 line-height-1">{title}</h2>
				<button
					className="question-btn"
					type="button"
					onClick={() => setShowInfo(!showInfo)}
				>
					{showInfo ? <FaMinus/> : <FaPlus />}
				</button>
			</header>
			{showInfo && <p className="margin-top-5">{info}</p>}
		</article>
	);
}

export default SingleQuestion;
