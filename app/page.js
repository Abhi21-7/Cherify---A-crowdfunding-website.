import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex justify-center flex-col gap-4 items-center text-white h-[44vh]  md:px-0 text-xs md:text-base  ">
        <div className="font-bold flex  md:text-5xl justify-center items-center text-3xl">Cherify<span><img className="invertImg w-16" src="/tea.gif" width={88} alt="" /></span></div>
        <p className="text-center md:text-left">
          A crowdfunding platform for creators to fund their projects. 
          
        </p>
        <p className="text-center md:text-left">

          A place where your fans can do charity for you. Unleash the power of your fans and get your projects funded.
        </p>
        <div>
          <Link href={"/login"}>

          <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Here</button>
          </Link>

          <Link href="/about">
          <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button>
          </Link>

        </div>
      </div>
      <div className="bg-white h-1 opacity-10">
      </div>

      <div className="text-white container mx-auto pb-32 pt-14 px-10">
  <h2 className="text-3xl font-bold text-center mb-14">Your fans can do charity for you</h2>
  <div className="flex gap-5 justify-around">
    <div className="item space-y-3 flex flex-col items-center justify-center">
      <img className="bg-slate-400 rounded-full p-2 text-black" width={88} src="/man.gif" alt="" />
      <p className="font-bold text-center">Fans want to help</p>
      <p className="text-center">Your fans are available to support you</p>
    </div>
    <div className="item space-y-3 flex flex-col items-center justify-center">
      <img className="bg-slate-400 rounded-full p-2 text-black" width={88} src="/coin.gif" alt="" />
      <p className="font-bold text-center">Fans want to contribute</p>
      <p className="text-center">Your fans are willing to contribute financially</p>
    </div>
    <div className="item space-y-3 flex flex-col items-center justify-center">
      <img className="bg-slate-400 rounded-full p-2 text-black" width={88} src="/group.gif" alt="" />
      <p className="font-bold text-center">Fans want to collaborate</p>
      <p className="text-center">Your fans are ready to collaborate with you</p>
    </div>
  </div>
</div>
      <div className="bg-white h-1 opacity-10">
      </div>

      <div className="text-white container mx-auto pb-12 pt-14 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-center mb-14">Learn more about us</h2>

        <div className="w-[60%] grid grid-cols-2 ">
      

            <h2 className="text-2xl font-semibold mb-4">Benefits for Creators</h2>
            <ul className="list-disc mb-10">
                <li className="mb-2">Direct financial support from your fanbase</li>
                <li className="mb-2">Engage with your fans on a more personal level</li>
                <li className="mb-2">Access to a platform tailored for creative projects</li>
                {/* Add more benefits */}
            </ul>

            <h2 className="text-2xl font-semibold mb-4">Benefits for Fans</h2>
            <ul className="list-disc mb-10">
                <li className="mb-2">Directly contribute to the success of your favorite creators</li>
                <li className="mb-2">Exclusive rewards and perks for supporting creators</li>
                <li className="mb-2">Be part of the creative process and connect with creators</li>
                {/* Add more benefits */}
            </ul>

            
        </div>
        <Link href="/about">
          <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5  text-center me-2 mb-2">Click Here To Learn More About Us.</button>
          </Link>

          </div>
    </>
  );
}
