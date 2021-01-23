import Head from "next/head";
import Image from 'next/image'

const About = () => {
  return (
    <>
      <Head>
        <title>About Me</title>
      </Head>

      <h1 className="text-2xl text-center mt-6 font-semibold my-6">About</h1>

      <div className="container mx-auto"> 
        <p className="object-left mt-6 my-6 font-semibold">
            Brendan Sailer is a software engineer from Seattle, WA.  He graduated from the University of Notre Dame in 2021 with a BS in Computer Science.
            He has worked as a software engineer at Dimensional Fund Advisors, Viakoo, and Capital One.
            Currently, he works at Boeing.
        </p>

        <p className="object-left mt-6 my-6 font-semibold">
            Contact him at: email
        </p>

        <Image className="object-right" src="/author-picture.JPEG" alt="picture of me" width="1536" height="2048"></Image>
        
      </div>
    </>
  );
};

export default About;