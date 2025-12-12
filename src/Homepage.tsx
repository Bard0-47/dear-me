import useVisits from "./hooks/useVisits";

type Props = {};

const Homepage = (_props: Props) => {
  const { isFirstTime } = useVisits();

  return (
    <>
      {isFirstTime ? (
        <p>Bienvenid@</p>
      ) : (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere magni
          ut exercitationem culpa sequi, labore ullam vero inventore omnis hic
          nulla, harum laudantium maxime quia eveniet, asperiores aperiam autem
          necessitatibus cumque natus voluptas? Deleniti rerum harum ex
          dignissimos laborum porro, animi earum. Quidem veniam dolores quo
          maxime laborum soluta obcaecati.
        </p>
      )}
    </>
  );
};

export default Homepage;
