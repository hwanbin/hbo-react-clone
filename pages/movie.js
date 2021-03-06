import Head from 'next/head'
// import Image from 'next/image'
import MainLayout from '../components/Layouts/MainLayout'
import CastInfo from '../components/UI/CastInfo/CastInfo'
import FeaturedMedia from '../components/UI/FeaturedMedia/FeaturedMedia'
import ForYouList from '../components/UI/ForYouList/ForYouList'
import JustAdded from '../components/UI/JustAdded/JustAdded'
import PosterView from '../components/UI/PosterView/PosterView'
// import styles from '../styles/Home.module.css'

export default function HomeView() {
  return (
    <MainLayout>
      <FeaturedMedia />
      <PosterView />
      <CastInfo />
    </MainLayout>

  )
}
