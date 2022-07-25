import React from "react";
import { Card, CardBody, Badge } from "reactstrap";

import { Fade } from "react-reveal";

const FeedbackCard = ({ data }) => {
	return (
		<Fade bottom duration={2000} >
			<Card className="card-lift--hover shadow mt-4" onClick={()=> window.open(data.twitter)}>
				<CardBody>

					<div className="d-flex px-3">
						<img
							src={data.pfp}
							style={{
								objectFit: "cover",
								left: 0,
								right: 0,
								top: "7rem",
								marginLeft: "auto",
								marginRight: "auto",
								width: "5rem",
								height: "5rem",
								borderRadius: "50%",
							}}
							className="shadow mb-3"
							alt={data.pfp}
						/>
						<div className="pl-4">
							<h5 className="text-indigo">{data.name}</h5>
							<p className="description mt-3">{data.feedback}</p>
						</div>
					</div>
				</CardBody>
			</Card>
		</Fade>
	);
};

export default FeedbackCard;
