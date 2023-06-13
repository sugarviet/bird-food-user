import styles from "./ListBlogs.module.css";
import { Row, Col } from "antd";
import { Pagination } from "antd";
import BlogItem from "../BlogItem/BlogItem";
import useListBlogs from '../../hooks/useListBlogs'


function ListBlogs() {

  const { data } = useListBlogs();

  return (
    <div>
      <div className={styles.maxWidth}>
        <div className={styles.lastestBlog}>
          <div className={styles.hrContent}>
            <div style={{ width: "50%", margin: "0 auto" }}>
              <hr className={styles.hrTop} />
            </div>
            <hr className={styles.hrBot} />
          </div>
          <span className={styles.lastestBlog_mainTitle}>Latest Blog</span>
          <span className={styles.lastestBlog_subTitle}>
            Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam
            justo sed rebum vero dolor duo.
          </span>
        </div>
        <Row gutter={[16, 16]}>
          {data?.map((blog) => (
            <Col span={8} key={blog.id}>
              <BlogItem blog={blog} />
            </Col>
          ))}
        </Row>
      </div>
      <div className={styles.paginationProduct}>
        <Pagination defaultCurrent={1} total={50} />
      </div>
    </div>
  );
}
export default ListBlogs;
