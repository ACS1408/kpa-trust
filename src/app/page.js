import HomeBanner from '@/components/HomeBanner'
import HomeAbout from '@/components/HomeAbout'
import HomeDonate from '@/components/HomeDonate'
import HomeSupport from '@/components/HomeSupport'
import HomeVolunteer from '@/components/HomeVolunteer'
import HomeEvents from '@/components/HomeEvents'
import HomeNews from '@/components/HomeNews'
import HomeStats from '@/components/HomeStats'
import HomeStatistics from '@/components/HomeStatistics'

export default function Home() {
  return (
    <main>
      <HomeBanner />
      <HomeAbout/>
      <HomeDonate/>
      <HomeStats/>
      <HomeStatistics/>
      <HomeSupport/>
      <HomeNews/>
      <HomeVolunteer/>
      <HomeEvents/>
    </main>
  )
}
