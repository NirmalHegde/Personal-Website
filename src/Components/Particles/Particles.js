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
				"interactivity": { // modes that particles will be sensed on
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
					"modes": { // actions that occur
						"attract": {
							"distance": 300,
							"duration": 2,
							"speed": 1,
						},
						"grab": {
							"distance": 400
						},
						"repulse": {
							"distance": 400
						}
					}
				},
				"particles": { // visual properties of particles
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
						"value": 0.5,
						"random": {
							"enable": true
						},
					},
					"animation": {
						"enable": true,
						"speed": 0.1
					},
					"shape": {
						"options": {
							"character": {
								"value": [
									"</>",
									"==",
									"{}",
									"!=",
									"&&",
									";",
									"*",
									"()",
									"def",
									"for",
									"if"
								],
								"font": "Courier New",
								"style": "",
								"weight": "400",
								"fill": true
							},
							"char": {
								"value": [
									"</>",
									"==",
									"{}",
									"!=",
									"&&",
									";",
									"*",
									"()",
									"def",
									"for",
									"if"
								],
								"font": "Roboto Mono",
								"style": "10",
								"weight": "400",
								"fill": true
							}
						},
						"type": "char"
					},
					"size": {
						"value": 10,
						"random": {
							"enable": true
						},
						"animation": {
							"minimumValue": 0.3,
							"speed": 2
						}
					}
				}
			}}
		/>
	);
}

export default Particle