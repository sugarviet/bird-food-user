import PropTypes from "prop-types";
import { Card } from "antd";

const ExampleItem = ({ user }) => {
  return (
    <Card hoverable style={{ margin: "10px 0" }}>
      <h2>{user?.name}</h2>
    </Card>
  );
};

ExampleItem.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default ExampleItem;
