import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'

export default function CreateUser() {
  return (
    <div>
      <div className="create-user">
        <div className="create-user__top">
          <div className="create-user__logo"/>
          <span className="create-user__title">
            Who Is Watching?
          </span>  
        </div>
        <div className="create-user__form">
          <img className="create-user__user-img" src="https://randomuser.me/api/portraits/men/55.jpg"/>
          <div className="create-user__input-group">
            <label>Name</label>
            <input type="text" className="create-user__inputText"/>
            <div className="create-user__colors">
              <div className="create-user__color create-user__color--active" style={{background: 'rgb(2,27,64)',
              background: 'linear-gradient(135deg, rgba(2,27,64,1) 11%, rgba(119,30,135,1) 100%)'
              }}/>
              <div className="create-user__color" style={{background: 'rgb(159,58,180)',
              background: 'linear-gradient(135deg, rgba(159,58,180,1) 31%, rgba(76,163,77,1) 69%)'
              }}/>
              <div className="create-user__color" style={{background: 'rgb(159,58,180)',
              background: 'linear-gradient(135deg, rgba(159,58,180,1) 31%, rgba(76,163,159,1) 69%)'
              }}/>
              <div className="create-user__color" style={{background: 'rgb(159,58,180)',
              background: 'linear-gradient(135deg, rgba(159,58,180,1) 31%, rgba(166,130,173,1) 69%)'
              }}/>
              <div className="create-user__color" style={{background: 'rgb(159,58,180)',
              background: 'linear-gradient(135deg, rgba(159,58,180,1) 31%, rgba(148,76,163,1) 69%)'
              }}/>
            </div>
          </div>  
        </div>
        <div className="create-user__buttons">
          <button className="create-user__cancel">Cancel</button>
          <button className="create-user__save">Save</button>
        </div>
      </div>
    </div>
  )
}
