import { useParams } from "react-router-dom";
import useSingleBlog from "../../hooks/useSingleBlog";
import styles from './BlogDetail.module.css'
import Banner from '../../../../components/Banner'
import { Row, Col, Skeleton } from "antd";
import { Input } from 'antd';
import { CalendarOutlined, CommentOutlined } from "@ant-design/icons";
import CommentBlog from "../CommentBlog/CommentBlog";

const BlogDetail = () => {
  const { blogId } = useParams();

  const { blog, isLoading } = useSingleBlog(blogId);

  const { Search } = Input;
  return (
    <div>
      <Banner title='Blogs' />
      <div className={styles.blogDetail}>
        <Row>
          <Col span={16}>
            <div>
              <h1 className={styles.blogTitle}>{blog?.name}</h1>
              {isLoading &&
                <Skeleton
                  active
                  paragraph={{
                    rows: 10,
                  }} />}
              {blog?.content.split('\n').map((paragraph, index) => (
                <div key={index}>
                  <p className={styles.blogContent}>{paragraph}</p>
                  {index === 0 && <img className={styles.blogImage} src={blog?.image[0]} />}
                  {index === blog?.content.split('\n').length - 2 && <img className={styles.blogImage} src={blog?.image[1]} />}
                </div>
              ))}
            </div>
            <CommentBlog />
          </Col>
          <Col span={8}>
            <div className={styles.blogRight}>
              <Search
                className={styles.blogSearch}
                placeholder="Search blog..."
                allowClear
                enterButton="Search"
                size="large"
              />
              <div className={styles.blogRightContainer}>
                <h1 className={styles.blogRightRecent}>Recent Blog</h1>
                <div className={styles.blogRightImageDes}>
                  <img className={styles.blogRightImage} src={blog?.image[0]}></img>
                  <div className={styles.blogRightTextDate}>
                    <h3 className={styles.blogRightTitle}>{blog?.name}</h3>
                    <span className={styles.blogRightDate}>
                      <CalendarOutlined className={styles.blogIcon} />
                      {blog?.date}
                    </span>
                    <span className={styles.blogRightDate}>
                      <CommentOutlined className={styles.blogIcon} />
                      18
                    </span>
                  </div>
                </div>
                <div className={styles.blogRightImageDes}>
                  <img className={styles.blogRightImage} src={blog?.image[0]}></img>
                  <div className={styles.blogRightTextDate}>
                    <h3 className={styles.blogRightTitle}>{blog?.name}</h3>
                    <span className={styles.blogRightDate}>
                      <CalendarOutlined className={styles.blogIcon} />
                      {blog?.date}
                    </span>
                    <span className={styles.blogRightDate}>
                      <CommentOutlined className={styles.blogIcon} />
                      18
                    </span>
                  </div>
                </div>
                <div className={styles.blogRightImageDes}>
                  <img className={styles.blogRightImage} src={blog?.image[0]}></img>
                  <div className={styles.blogRightTextDate}>
                    <h3 className={styles.blogRightTitle}>{blog?.name}</h3>
                    <span className={styles.blogRightDate}>
                      <CalendarOutlined className={styles.blogIcon} />
                      {blog?.date}
                    </span>
                    <span className={styles.blogRightDate}>
                      <CommentOutlined className={styles.blogIcon} />
                      18
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
     
      </div>
    </div>
  )
}
export default BlogDetail;