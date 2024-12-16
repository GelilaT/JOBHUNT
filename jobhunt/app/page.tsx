'use client'
import Search from "@/components/Search";
import Button from "@/components/ui/Button";
import Image from "next/image";
import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import { faChartLine, faHandshake , faUser, faBullhorn, faPenFancy, faHandHoldingDollar, faBriefcase, faHeadset } from "@fortawesome/free-solid-svg-icons";
import Joblist from "@/components/ui/Joblist";
import Animations from "@/components/ui/Animations";

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

      <p className="text-6xl font-bold text-center font-poppins pb-16">Find your favorite job</p>
      <div className="flex gap-2 text-xl pb-44">
        <div className="flex flex-col px-14 items-start gap-8">
          <div className="flex items-center gap-5 hover:bg-hover py-2 pl-4 rounded-sm w-full pr-20">
            <FontAwesomeIcon icon={faChartLine} />
            <p>Accounting</p>

          </div>
          <div className="flex items-center gap-3 hover:bg-hover py-2 pl-4 rounded-sm w-full pr-20">
            <FontAwesomeIcon icon={faHandshake} />
            <p>Business & Consulting</p>

          </div>
          <div className="flex items-center gap-5 hover:bg-hover py-2 pl-4 rounded-sm w-full pr-20">
            <FontAwesomeIcon icon={faUser} />
            <p>Human research</p>

          </div>
          <div className="flex items-center gap-5 hover:bg-hover py-2 pl-4 rounded-sm w-full pr-20">
            <FontAwesomeIcon icon={faBullhorn} />
            <p>Marketing & Finance</p>

          </div>
          <div className="flex items-center gap-5 hover:bg-hover py-2 pl-4 rounded-sm w-full pr-20">
            <FontAwesomeIcon icon={faPenFancy} />
            <p>Design & development</p>

          </div>
          <div className="flex items-center gap-5 hover:bg-hover py-2 pl-4 rounded-sm w-full pr-20">
            <FontAwesomeIcon icon={faHandHoldingDollar} />
            <p>Finance management</p>

          </div>
          <div className="flex items-center gap-5 hover:bg-hover py-2 px-4 rounded-sm w-full pr-20">
            <FontAwesomeIcon icon={faBriefcase} />
            <p>Project management</p>
          </div>
          <div className="flex items-center gap-5 hover:bg-hover py-2 px-4 rounded-sm w-full pr-20">
            <FontAwesomeIcon icon={faHeadset} />
            <p>Customer services</p>
          </div>

        </div>
        <div >

          <Joblist />
          <Button text="Browse all jobs"/>
        </div>


      </div>

      <div className="bg-black pt-32">
        <div className="flex">
          <div className="pl-7 w-[450px]">
            <p className="font-bold text-5xl font-poppins w-[450px] leading-normal">Trusted by over 20,000+ users around the world</p>
            <p className="w-[490px] leading-7 text-lg">Join a global community of over 20,000 satisfied users who trust us to deliver exceptional results.</p>
            <div className="flex gap-16 items-center pt-5">
              <div>
                <h2 className="text-4xl font-bold">1500<span className="text-primary">+</span></h2>
                <p>Job offers</p>
              </div>

              <div>
                <h2 className="text-4xl font-bold">100<span className="text-primary">+</span></h2>
                <p>Countries</p>
              </div>

              <div>
                <h2 className="text-4xl font-bold">300<span className="text-primary">+</span></h2>
                <p>Companies</p>
              </div>
            </div>
          </div>

        </div>

        <Animations />
      </div>
      <div className="flex gap-20 py-20 pl-5">
        <div className="bg-black pt-10">
          <h1 className="font-poppins font-bold text-4xl w-80 pl-10">Download the application now</h1>
          <Image src={'/download.png'} alt="download call to action" width={500} height={150} />
        </div>
        <div className="font-bold text-lg font-poppins">
          <h1 className="text-4xl pb-10 font-poppins">Frequently asked questions</h1>
          <p className="pb-10"><span className="text-xl font-normal pr-3">+</span> How do I get started?</p>
          <p className="pb-10"><span className="text-xl font-normal pr-3">+</span> Is the app free to use?</p>
          <p className="pb-10"><span className="text-xl font-normal pr-3">+</span> What platforms is this app available on?</p>
          <p className="pb-10"><span className="text-xl font-normal pr-3">+</span> Can I reset my password if I forget it?</p>
          <p className="pb-10"><span className="text-xl font-normal pr-3">+</span> Can I delete my account?</p>
          <p className="pb-10"><span className="text-xl font-normal pr-3">+</span> Is my data safe on this app?</p>

        </div>
      </div>

      <div className="mx-auto flex flex-col items-center">
        <p className="text-5xl font-poppins font-bold pb-10">Never miss an update!</p>
        <div className="bg-button-hover border-button-border border-2 flex items-center gap-48 p-1 w-fit">
          <input type="text" placeholder="Enter your email" className="bg-transparent pl-5 text-white text-sm"/>
          <Button text="Subscribe"/>
        </div>
      </div>
    </div>
  );
}
