import BestTopSellingProducts from "../components/BestTopSellingProducts"
import FeatureProduct from "../components/FeatureProduct"
import Hero from "../components/Hero"
import MidHero from "../components/MidHero"
import TopBrands from "../components/TopBrands"
import TopCategoryLogo from "../components/TopCategoryLogo"
import TopRatedProduct from "../components/TopRatedProduct"


const Home = () => {
  return (
    <div className="container mx-auto px-4">
      <Hero/>
      <TopCategoryLogo/>
      <FeatureProduct/>
      <TopBrands/>
      <MidHero/>
      <TopRatedProduct/>
      <BestTopSellingProducts/>
    </div>
  )
}

export default Home
