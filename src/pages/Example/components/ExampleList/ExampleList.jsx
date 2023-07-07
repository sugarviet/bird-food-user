import ExampleItem from "../ExampleItem/ExampleItem";
import useExampleList from "./hooks/useExampleList";

const ExampleList = () => {
  const { data, isLoading } = useExampleList();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>Example list</h1>
      {data?.map((user) => {
        return <ExampleItem key={user.id} user={user} />;
      })}
    </div>
  );
};

export default ExampleList;
