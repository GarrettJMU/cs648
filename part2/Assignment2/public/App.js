const element = React.createElement("div", {
  className: "container"
}, React.createElement("h1", null, "Garrett Hughes"), React.createElement("img", {
  className: "headshot",
  src: "https://garretthughesphotography.com/static/221fbe056dde2bdeb1f89a4c2f36dd69/51822/garrett-hughes-fishing-photography.jpg",
  alt: "Garrett fishing picture"
}), React.createElement("p", null, "I'm a software engineer, photographer, and avid outdoorsman based out of San Diego. When I'm not working on updating websites and increasing SEO initiatives, you'll find me in the woods exploring with my Land Rover, surfing, fishing or snowboarding."), React.createElement("a", {
  href: "https://github.com/garrettjmu",
  target: "_blank"
}, React.createElement("h2", null, "View my github repo")));
ReactDOM.render(element, document.getElementById('root'));