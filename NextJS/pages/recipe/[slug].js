import Layout from "../../components/Layout";

const Recipe = ({ recipe }) => {
  console.log(recipe);
  return (
    <Layout title={recipe.name}>
      <h1>{recipe.name}</h1>
      <img src={recipe.imageURL} alt={recipe.title} />
      <div className="ingredients-container">
        <h3>This is how you make delicious {recipe.name}</h3>
        <ul>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>
              {ingredient.quantity} {ingredient.name}
            </li>
          ))}
        </ul>
        <ol>
          {recipe.steps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>
      <style jsx>{`
        ol,
        ul {
          width: 100%;
        }
        li {
          width: 90%;
        }
        .ingredients-container {
          padding: 30px;
          width: 60%;
          background-color: white;
          margin-top: 30px;
        }
      `}</style>
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const res = await fetch("https://try-next.elinaaberg.vercel.app/api/recipes");
  const recipes = await res.json();

  const paths = recipes.map((recipe) => ({ params: { slug: recipe.slug } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const res = await fetch(
    `https://try-next.elinaaberg.vercel.app/api/recipes/${params.slug}`
  );
  const recipe = await res.json();

  return {
    props: { recipe },
  };
};

export default Recipe;
