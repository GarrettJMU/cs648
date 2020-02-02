const element = (
  <div className="container">
    <h1>Garrett Hughes</h1>
    <img className="headshot"
         src="https://garretthughesphotography.com/static/221fbe056dde2bdeb1f89a4c2f36dd69/51822/garrett-hughes-fishing-photography.jpg"
         alt="Garrett fishing picture" />

    <p>
      I'm a software engineer, photographer, and avid outdoorsman based out of San Diego. When I'm not
      working on updating websites and increasing SEO initiatives, you'll find me in the woods exploring with my
      Land Rover, surfing, fishing or snowboarding.
    </p>
    <a href="https://github.com/garrettjmu" target="_blank">
      <h2>
        View my github repo
      </h2>
    </a>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
