import "./Info.css";
import image from "../../PP.jpg";

export default function Info() {
	return (
		<>
			<div className="container">
				<img className="card-image" src={image} />
				<h1 className="card-title">Karim Shahin</h1>
				<h3 className="card-subtitle">Frontend Developer</h3>
				<div className="btn-container">
					<a className="btn btn-email" href="#">
						<i class="fa-solid fa-envelope"></i>
						Email
					</a>
					<a className="btn btn-linkedin" href="#">
						<i class="fa-brands fa-linkedin"></i>
						LinkedIn
					</a>
				</div>
			</div>
		</>
	);
}
