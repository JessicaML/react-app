   
let url = "https://codepen.io/jobs.json";
			console.log("Cvhjgkl ");

	fetch(url)
		.then(res => res.json())
		.then(out => {
			console.log("Checkout this JSON! ", out);
		})
		.catch(err => console.error("err", err));

