let select = (s) => document.querySelector(s),
	selectAll = (s) => document.querySelectorAll(s),
	mainSVG = select("#mainSVG"),
	numDots = 100,
	cloneArr = [];

gsap.set("svg", {
	visibility: "visible"
});

let each = 0.0089;
let duration = 0.222;
let angle = 0;
let getRadius = gsap.utils.wrapYoyo(0.25, numDots * 2);
for (var i = 0; i < numDots; i++) {
	angle = (360 / numDots) * i;
	var point = {
		x: Math.cos((angle * Math.PI) / 180) * 140 + 400,
		y: Math.sin((angle * Math.PI) / 180) * 400 + 300
	};
	let clone = select(".dot").cloneNode(true);
	mainSVG.appendChild(clone);
	let r = getRadius(i / numDots);
	gsap.set(clone, {
		x: point.x,
		y: point.y,
		attr: {
			r: r
		}
	});
	cloneArr.push(clone);
}
let tl = gsap.timeline();
tl
	.fromTo(
		cloneArr,
		{
			y: 340
		},
		{
			y: 260,
			duration: duration,
			stagger: {
				each: each,
				repeat: -1,
				yoyo: true
			},
			ease: "sine.inOut"
		}
	)
	.fromTo(
		cloneArr,
		{
			opacity: 0.1
		},
		{
			opacity: 1,
			duration: duration,
			stagger: {
				each: each,
				repeat: -1,
				yoyo: true
			},
			ease: "sine.in"
		},
		0
	)
	.fromTo(
		cloneArr,
		{
			attr: {
				r: 0.5
			}
		},
		{
			attr: {
				r: 4
			},
			duration: duration,
			stagger: {
				each: each,
				repeat: -1,
				yoyo: true
			},
			ease: "sine"
		},
		0
	);
tl.seek(1000).timeScale(0.3);
