import FeatureCard from "./FeatureCard"


const FeatureProduct = () => {
  return (
    <div className="mt-10 mb-5">
      <div className="flex justify-between">
        <div><h1 className="text-2xl font-bold">Feature Product</h1></div>
        <div><p className="text-emerald-400 font-medium">See All ➜</p></div>
      </div>
      <FeatureCard/>
    </div>
  )
}

export default FeatureProduct
