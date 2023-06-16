import { Button, Result } from "antd";

const NotFound = () => {
  return (
    <section style={{overflow: 'hidden', paddingTop: '64px'}}>
        <Result
          status="404"
          title="404"
        //   style={{backgroundColor: 'black'}}
          subTitle="Sorry, the page you visited does not exist."
          extra={<Button type="primary">Back Home</Button>}
        />
    </section>
  );
};

export default NotFound;
