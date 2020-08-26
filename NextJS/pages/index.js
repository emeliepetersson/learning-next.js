import Layout from "../components/Layout";
import Recipe from "../components/Recipe";

const Home = ({ recipes }) => {
  console.log(recipes);
  return (
    <Layout>
      <h1>Not another Fish & Chips recipe...</h1>
      {recipes.map((recipe) => (
        <Recipe
          title={recipe.name}
          image={recipe.imageURL}
          slug={recipe.slug}
          key={recipe.slug}
        />
      ))}
    </Layout>
  );
};

export const getStaticProps = async () => {
  const res = await fetch("https://try-next.elinaaberg.vercel.app/api/recipes");
  const recipes = await res.json();

  return {
    props: {
      recipes,
    },
  };
};

export default Home;
