import './Particles.css';
import Particles from "react-tsparticles";

const Particle = () => {
	return (
		<Particles
			id="tsparticles"
			options={{
				background: {
					color: {
						value: "#232741",
					},
				},
				fpsLimit: 60,
				"interactivity": {
					"detect_on": "window",
					"events": {
						"onClick": {
							"enable": true,
							"mode": "repulse"
						},
						"onHover": {
							"enable": true,
							"mode": "attract"
						}
					},
					"modes": {
						"attract": {
							"distance": 300,
							"duration": 2,
							"speed": 4,
						},
						"grab": {
							"distance": 400
						},
						"repulse": {
							"distance": 400
						}
					}
				},
				"particles": {
					"color": {
						"value": "#ffffff"
					},
					"links": {
						"color": {
							"value": "#ffffff"
						},
						"distance": 150,
						"opacity": 0.4
					},
					"move": {
						"attract": {
							"rotate": {
								"x": 600,
								"y": 600
							}
						},
						"enable": true,
						"outModes": {
							"bottom": "out",
							"left": "out",
							"right": "out",
							"top": "out"
						},
						"random": true,
						"speed": 1
					},
					"number": {
						"density": {
							"enable": true
						},
						"value": 200
					},
					"opacity": {
						"random": {
							"enable": true
						},
						"animation": {
							"enable": true,
							"speed": 1
						}
					},
					"size": {
						"random": {
							"enable": true
						},
						"animation": {
							"minimumValue": 0.3,
							"speed": 4
						}
					}
				}
			}}
		/>
	);
}

export default Particle