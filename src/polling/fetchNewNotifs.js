   
export default function fetchNewNotifs() {

let url = "https://codepen.io/jobs.json";

	return fetch(url)
		.then(res => res.json())
		.then(out => {
			// console.log("Checkout this JSON! ", out);
			return out
		})
		.catch(err => console.error("err", err));



}