import useVisits from "./hooks/useVisits";
import useCookies from "./hooks/useCookies"

type Props = {};

const Homepage = (_props: Props) => {
  const { isFirstTime: _isFirstTime } = useVisits();
  const areCookiesAllowed  = useCookies();

  return (
    <>
      {areCookiesAllowed ? (  /* Allows data storage*/
        <p>Bienvenid@</p>
      ) : (                   /* No data storage */
        <p>
          No bienvenid@
        </p>
      )}
    </>
  );
};

export default Homepage;
