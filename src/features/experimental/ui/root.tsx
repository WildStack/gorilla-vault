import { CardList, Card } from '@blueprintjs/core';
import { Link, Outlet } from 'react-router-dom';

export const ExperimentalRoot = (): React.JSX.Element => {
  return (
    <>
      <div className="w-fit mx-auto mt-20">
        <CardList className="flex flex-row" compact>
          <Card>
            <Link to="/">Home</Link>
          </Card>
          <Card>
            <Link to="/experimental/encryption">Encryption</Link>
          </Card>
          <Card>
            <Link to="/experimental/tree-node">Tree node</Link>
          </Card>
          <Card>
            <Link to="/experimental/table">Tree node</Link>
          </Card>
          <Card>some future link 1</Card>
          <Card>some future link 2</Card>
        </CardList>
      </div>

      <br />
      <hr />

      <Outlet />
    </>
  );
};
