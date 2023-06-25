import { useParams } from "react-router-dom";
import useSingleBlog from "../../hooks/useSingleBlog";
import styles from './BlogDetail.module.css'
import Banner from '../../../../components/Banner'
import { Row, Col } from "antd";
import { Input } from 'antd';
import { CalendarOutlined, CommentOutlined } from "@ant-design/icons";
import CommentBlog from "../CommentBlog";
import Comment from "../Comment";
import LoadingBlog from "../../../../components/Loading/LoadingBlog";

const BlogDetail = () => {
  const { blogId } = useParams();

  const { blog, isLoading } = useSingleBlog(blogId);
  console.log(blog.title);

  const { Search } = Input;
  return (
    <div>
      <Banner title='Blogs' />
      <div className={styles.blogDetail}>
        <Row>
          <Col span={16}>
            <div>
              <h1 className={styles.blogTitle}>{blog?.title}</h1>
              {isLoading &&
                <LoadingBlog />}
              <div>
                <p className={styles.blogContent}>{blog?.content}</p>
                <img className={styles.blogImage} src={blog?.thumbnail} />
              </div>
            </div>
            <CommentBlog />
            <Comment />
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
                  <img className={styles.blogRightImage} src={blog?.thumbnail}></img>
                  <div className={styles.blogRightTextDate}>
                    <h3 className={styles.blogRightTitle}>{blog?.title}</h3>
                    <span className={styles.blogRightDate}>
                      <CalendarOutlined className={styles.blogIcon} />
                      {blog.createdAt?.slice(0, 10)
                        .split("-")
                        .reverse()
                        .join("/")}
                    </span>
                    <span className={styles.blogRightDate}>
                      <CommentOutlined className={styles.blogIcon} />
                      18
                    </span>
                  </div>
                </div>
                <div className={styles.blogRightImageDes}>
                  <img className={styles.blogRightImage} src={blog?.thumbnail}></img>
                  <div className={styles.blogRightTextDate}>
                    <h3 className={styles.blogRightTitle}>{blog?.title}</h3>
                    <span className={styles.blogRightDate}>
                      <CalendarOutlined className={styles.blogIcon} />
                      {blog.createdAt?.slice(0, 10)
                        .split("-")
                        .reverse()
                        .join("/")}
                    </span>
                    <span className={styles.blogRightDate}>
                      <CommentOutlined className={styles.blogIcon} />
                      18
                    </span>
                  </div>
                </div>
                <div className={styles.blogRightImageDes}>
                  <img className={styles.blogRightImage} src={blog?.thumbnail}></img>
                  <div className={styles.blogRightTextDate}>
                    <h3 className={styles.blogRightTitle}>{blog?.title}</h3>
                    <span className={styles.blogRightDate}>
                      <CalendarOutlined className={styles.blogIcon} />
                      {blog.createdAt?.slice(0, 10)
                        .split("-")
                        .reverse()
                        .join("/")}
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