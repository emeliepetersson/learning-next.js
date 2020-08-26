import Layout from "../components/Layout";

const About = (props) => {
  console.log(props.recipes);
  return (
    <Layout>
      <h1>About</h1>
      <p>
        This is a page with british recipes, because you just simply can't get
        enough of them.
      </p>
    </Layout>
  );
};

export default About;
