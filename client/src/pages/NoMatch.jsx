import Jumbotron from "../components/Jumbotron";

const NoMatch = () => {
  return (
    <div>
      <Jumbotron>
        <h1>404 Page Not Found</h1>
        <h1>
          <a href="/">Go to Homepage</a>
        </h1>
      </Jumbotron>
    </div>
  );
};

export default NoMatch;
