import Link from "next/link";

const Recipe = ({ title, image, slug }) => {
  return (
    <div className="recipe-container">
      <Link href={`recipe/${slug}`}>
        <a>
          <h2>{title}</h2>
          <img src={image} alt={title} />
        </a>
      </Link>
      <style jsx>{`
        .recipe-container {
          background-color: white;
          width: 700px;
          box-shadow: 5px 5px 30px #888888;
          margin: 20px 0;
          padding: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      `}</style>
    </div>
  );
};

export default Recipe;
