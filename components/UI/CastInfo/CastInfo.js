

const CastInfo = (props) => {
  return(
    <div className="cast-info">
      <div className="cast-info__group-title">
        Cast & Crew
      </div>
      <div className="cast-info__list">
        <ul className="cast-info__crew">
          <li>Cole Young</li>
          <li>Lewis Tan</li>
        </ul>
        <ul className="cast-info__crew">
          <li>Sonya Blade</li>
          <li>Jessica McNamee</li>
        </ul>
        <ul className="cast-info__crew">
          <li>Liu Kang</li>
          <li>Ludi Lin</li>
        </ul>
        <ul className="cast-info__crew">
          <li>Bi-Han / Sub-Zero</li>
          <li>Joe Taslim</li>
        </ul>
        <ul className="cast-info__crew">
          <li>Kano</li>
          <li>Josh Lawson</li>
        </ul>
        <ul className="cast-info__crew">
          <li>Jax</li>
          <li>Mehcad Brooks</li>
        </ul>
      </div>
      <div className="cast-info__group-title">
        Director
      </div>
      <div className="cast-info__list">
        <ul className="cast-info__crew">
          <li>Director</li>
          <li>Simon McQuoid</li>
        </ul>
      </div>
    </div>
  )
}

export default CastInfo;