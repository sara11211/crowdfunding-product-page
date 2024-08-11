import ProgressBar from "../ProgressBar"

const Stats = () => {
  return (
    <div className="gap-8 card">
        <ul className="text-sm text-dark-gray">
            <li>
                <span className="block mb-2 text-3xl font-bold text-black">$89,914</span>
                of $100,000 backed
            </li>
            <hr className="w-24 mx-auto my-6 bg-dark-gray"/>
            <li>
                <span className="block mb-2 text-3xl font-bold text-black">5,007</span>
                total backers
            </li>
            <hr className="w-24 mx-auto my-6 bg-dark-gray"/>
            <li>
                <span className="block mb-2 text-3xl font-bold text-black">56</span>
                days left
            </li>
        </ul>
        <ProgressBar />
    </div>
  )
}

export default Stats