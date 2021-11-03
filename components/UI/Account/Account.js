import Link from 'next/link';

const Account = (props) => {
  return(
    <div className="account">
      <div className="account__details">
        <div className="account__title">My List</div>
        <div className="account__watch-list">
          <div className="account__watch-video">
            <img src="https://st.hzcdn.com/simgs/75113bf40c8148eb_4-5847/home-design.jpg"/>
            <div className="account__watch-overlay">
              <div className="account__watch-buttons">
                <div className="account__watch-circle">
                  <i className="fas fa-play"/>
                </div>
                <div className="account__watch-circle">
                  <i className="fas fa-times"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="account__menu">
        <ul className="account__main">
          <li>
            <Link href="/">
              <a className="active">My List</a>
            </Link>
          </li>
        </ul>
        <div className="side-nav__divider"/>
        <ul className="account__main">
          <li>
            <Link href="/">
              <a>Account</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Sign Out</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Account;