import { Spin } from "antd"

const Loading = () => {
  return (
    <Spin size="large" style={{position: 'absolute', top: '50%', left: '50%', zIndex: '100'}}/>
  )
}

export default Loading
