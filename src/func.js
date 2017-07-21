function test() {
  for(let i = 0; i < 2; i++) {
    let url = "http://jsonplaceholder.typicode.com/posts/" + i;
    console.log(i)
    yield fetch(url);
  }
}

let item = test();
let ex = () => {
  let iterator = item.next().value;

  iterator
    .then(response => {
      return response.json().then(post => {
        return {
           data: post,
           status: response.status
        }        
      })
  })
  .then(post => {
      document.write("Title: then " + post.data.title + "<br>");
  });
  
  }
  
  ex();
    ex();
      ex();