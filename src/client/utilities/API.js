export async function fetchExample () {
  const topContext = this;
  let name = await fetch('/api/example')
  .then(function(res) {
    return res.json();
  })
  .then(function(data) {
    topContext.setState({products: data});
  });
}
