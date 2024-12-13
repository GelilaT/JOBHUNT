import Search from "@/components/Search";
import Button from "@/components/ui/Button";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1 className="font-bold text-6xl font-poppins text-center w-[670px] mx-auto pt-28">A spot for creatives to get a job</h1>
      <p className="text-center p-10 w-[940px] mx-auto text-xl">Get your dream job, with offers from different countries and job positions. Apply today to get internships, fresher, work-from-home jobs.</p>

      <Search />
      <div className="flex w-full justify-between p-14 items-end">
        <Image src={'/person1.png'} alt="person1" width={130} height={150} />
        <Image src={'/person2.png'} alt="person1" width={200} height={200} />
        <Image src={'/person3.png'} alt="person1" width={150} height={150} />
        <Image src={'/person4.png'} alt="person1" width={150} height={150} />
        <Image src={'/person5.png'} alt="person1" width={220} height={200} />
      </div>

      <div className="flex flex-col items-center">


        <p className="text-center font-bold text-3xl w-[660px] mx-auto pt-24 leading-10">Discover thousands of opportunities tailored to your skills and aspirations. Whether you're an experienced professional or just starting your career, our platform connects you with top companies looking for talent like yours. Search, apply, and take the next step toward a brighter future—all in one place. Your journey to success starts here!</p>
        <p className="text-center w-[670px] pt-8 pb-5 mx-auto">Don’t let opportunities pass you by! Join our platform and unlock access to exclusive job listings, personalized recommendations, and tools to showcase your expertise. The perfect job is waiting for you—sign up today and let your journey begin!</p>
        
        <Button text="Know about us"/>
      </div>

      <div className="flex px-10 py-20 items-center justify-between">
        <div className="flex flex-col justify-center items-center">
          <Image src={'/i1.png'} alt="person1" width={150} height={150} />
          <h2 className="font-bold text-2xl">Apply to humans</h2>
          <p className="w-72 text-center">Apply now and become part of a community that values innovation, collaboration, and growth.</p>
        </div>

        <div className="flex flex-col justify-center items-center">
          <Image src={'/i2.png'} alt="person1" width={150} height={150} />
          <h2 className="font-bold text-2xl">Fast and easy</h2>
          <p className="w-72 text-center">Apply now and become part of a community that values innovation, collaboration, and growth.</p>
        </div>

        <div className="flex flex-col justify-center items-center">
          <Image src={'/i3.png'} alt="person1" width={150} height={150} />
          <h2 className="font-bold text-2xl">Instantly stand out</h2>
          <p className="w-72 text-center">Apply now and become part of a community that values innovation, collaboration, and growth.</p>
        </div>

        <div className="flex flex-col justify-center items-center">
          <Image src={'/i4.png'} alt="person1" width={150} height={150} />
          <h2 className="font-bold text-2xl">Real time feedback</h2>
          <p className="w-72 text-center">Apply now and become part of a community that values innovation, collaboration, and growth.</p>
        </div>
      </div>
    </div>
  );
}
