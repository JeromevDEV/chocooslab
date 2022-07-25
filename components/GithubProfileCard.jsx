import React from "react";

import { Card, Col, Row, Container } from "reactstrap";

import SocialLinks from "../components/SocialLinks";
import Image from "next/image";

const GithubProfileCard = ({ prof }) => {
	return (
		<Card className="section-lg bg-gradient-indigo shadow-lg border-0">
			<Container className="">
				<div className="p-2">
					<Row className="">
						<Col className="order-lg-2" lg="4">
							<img
								src="/img/icons/common/chocoolab.png"
								style={{ width: "200px" }}
								alt=""
								className="rounded-circle img-center img-fluid shadow shadow-lg--hover mb-4"
							/>
						</Col>
						<Col lg="8" className="order-lg-1">
							<h2 className="text-white">Reach Out to me!</h2>
							<p className="lead text-white mt-3">
								Do you want to discuss about a project or just want to say Hi ? My inbox is open for all ! (Twitter or Discord)
							</p>
							{/*<p className="text-white mt-3">{prof.bio}</p>*/}
							<SocialLinks />
							{/*<div className="my-3 icon-shape bg-gradient-white shadow rounded text-info">
								<i className="ni ni-pin-3 text-info mr-2" />
								{prof.location}
							</div>*/}
							<div>
								<p className="lead text-white mt-3"><i onClick={()=> window.open("https://www.google.com/maps/place/Suisse/@46.8131873,8.22421,8z/data=!3m1!4b1!4m5!3m4!1s0x478c64ef6f596d61:0x5c56b5110fcb7b15!8m2!3d46.818188!4d8.227512")}>📍 Switzerland</i></p>
							</div>
						</Col>
					</Row>
				</div>
			</Container>
		</Card>
	);
};

export default GithubProfileCard;
