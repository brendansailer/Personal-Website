import Link from "next/link";
import fs from "fs";

const Home = ({ slugs }) => (
  <div>
    <div>
      <h1 className="text-2xl text-center mt-6 font-semibold my-6">Index TEST</h1>
    </div>
    <div>
    slugs:
    {slugs.map(slug => {
      return (
        <div key={slug}>
          <Link href={"/blog/" + slug}>
            <a>{slug}</a>
          </Link>
        </div>
      );
    })}
    </div>
  </div>
);

export const getStaticProps = async () => {
  const files = fs.readdirSync("blog_posts");
  return {
    props: {
      slugs: files.map(filename => filename.replace(".md", ""))
    }
  };
};

export default Home;