import Spinner from 'react-bootstrap/Spinner';

function SpinnerLoading() {
  return (
    <Spinner animation="border" size="sm" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}

export default SpinnerLoading;
