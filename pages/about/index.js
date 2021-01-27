import Head from "next/head";

const About = () => {
  return (
    <>
      <Head>
        <title>About Me</title>
      </Head>

      <h1 className="text-2xl text-center mt-6 font-semibold my-6">About</h1>

      <div className="flex justify-between py-4 px-8">
        <div className="flex flex-col max-w-xl">
            <p className="justify-start mt-6 my-6 text-lg">
                Brendan Sailer is a software engineer from Seattle, WA.  He graduated from the University of Notre Dame in 2021 with a BS in Computer Science.
                He has worked as a software engineer at Dimensional Fund Advisors, Viakoo, and Capital One.
                Currently, he works at Boeing.
            </p>
            <p className="justify-start mt-6 my-6 text-lg">Contact him at: email</p>
        </div>
        
        <div>   
            <img className="max-w-xs" src="/author-picture.JPEG" alt="picture of me" width="1536" height="2048"></img>
        </div>
      </div>
    </>
  );
};

export default About;