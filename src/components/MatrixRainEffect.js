import React, { useEffect, useRef } from 'react';
import * as S from './styles/MatrixRainEffect.style';


const matrixCharacters = 'アカサタァナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';

function MatrixRainEffect({ rainCode, buttonAnimation, timeout = 45 }) {
	const canvasRef = useRef(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		const context = canvas.getContext('2d');
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;

		class Symbol {
			constructor(x, y, fontSize, canvasHeight) {
				this.x = x;
				this.y = y;
				this.fontSize = fontSize;
				this.text = ' ';
				this.canvasHeight = canvasHeight;
				this.matrixLettersCount = rainCode.length * 3;
				this.printusernameCount = 0;
				this.printUserName = () => this.printUserNameCount++;
			}
			draw(context) {
				
				if (buttonAnimation) {
					this.text = rainCode.charAt(Math.floor(Math.random() * rainCode.length));
					context.fillStyle = '#0f0';
					context.fillText(this.text, this.x * this.fontSize, this.y * this.fontSize);

					if (this.y > 0.100 + Math.random() * 12000) {
						this.y = 0;
					} else {
						this.y += 1
					}
				} else {

					if (this.matrixLettersCount) {
						this.text = matrixCharacters.charAt(Math.floor(Math.random() * matrixCharacters.length));
						this.matrixLettersCount--;
						context.fillStyle = '#0f0';
					} else {
						if (this.printUserNameCount < rainCode.length) {
							this.text = rainCode.charAt(this.printUserName());
							context.fillStyle = 'white';
						} else {
							this.printUserNameCount = 0;
							this.matrixLettersCount = rainCode.length * 3;
						}
					}

					context.fillText(this.text, this.x * this.fontSize, this.y * this.fontSize);

					if (this.y > 0.100 + Math.random() * 12000) {
						this.y = 0;
					} else {
						this.y += 1
					}
				}
			}
		}

		class Effect {
			constructor(canvasWidth, canvasHeight) {
				this.canvasWidth = canvasWidth;
				this.canvasHeight = canvasHeight;
				this.fontSize = 17;
				this.columns = (this.canvasWidth / 10) + 1;
				this.symbols = [];
				this.initialize();
			}
			initialize() {
				for (let i = 0; i < this.columns; i++) {
					this.symbols[i] = new Symbol(i, 0, this.fontSize, this.canvasHeight);
				}
			}
			resize(width, height) {
				this.canvasWidth = width;
				this.canvasHeight = height;
				this.columns = this.canvasWidth / this.fontSize;
				this.symbols = [];
				this.initialize();
			}
		}

		const effect = new Effect(canvas.width, canvas.height);
		let lastTime = 0;
		const fps = 60;
		const nextFrame = 700 / fps;
		let timer = 0;


		function animate(timeStamp) {
			const deltaTime = timeStamp - lastTime;
			lastTime = timeStamp;
			if (timer > nextFrame) {
				context.fillStyle = 'rgba( 0, 0, 0, 0.040)';
				context.textAlign = 'center';
				context.fillRect(0, 0, canvas.width, canvas.height);
				context.font = `${effect.fontSize}px monospace`;
				effect.symbols.forEach(symbol => symbol.draw(context));
				timer = 0;
			} else {
				timer += deltaTime;
			}
			requestAnimationFrame(animate);
		}
		animate(0);

		window.addEventListener('resize', function () {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
			effect.resize(canvas.width, canvas.height);
		})

		const interval = setInterval(timeout);
		return () => clearInterval(interval);
	}, [rainCode, timeout, buttonAnimation]);

	return (
		<S.Wrapper delay={buttonAnimation}>
			<canvas ref={canvasRef} />
		</S.Wrapper>
	);
}


export default MatrixRainEffect;

