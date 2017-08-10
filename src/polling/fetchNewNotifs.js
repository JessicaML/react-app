export default function fetchNewNotifs() {

    // let INTERVAL_IN_MS = 1000; // wait 1 second


    setInterval(function() {
    let url = "https://codepen.io/jobs.json";

        fetch(url)
            .then(res => res.json())
            .then(out => {
                console.log("What's crackin'?")
                console.log(out)
                // return out
            })
            .catch(err => console.error("err", err));
    }, 5000);
}
