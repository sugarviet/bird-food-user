import styles from "./ListBlogs.module.css";
import { List } from "antd";
import BlogItem from "../BlogItem/BlogItem";
import useListBlogs from "../../hooks/useListBlogs";
import Loading from "../../../../components/Loading";
import { useState } from "react";

function ListBlogs() {
  const { data, isLoading } = useListBlogs();
  const [currentPageBlog, setCurrentPageBlog] = useState(1);

  const handlePageBlogChange = (page) => {
    setCurrentPageBlog(page);
  };

  if (isLoading) {
    return <Loading />;
  }

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
        {/* <Row gutter={[16, 16]}>
          {data?.map((blog) => (
            <Col span={8} key={blog._id}>
              <BlogItem blog={blog} />
            </Col>
          ))}
        </Row> */}
        <List
          grid={{
            gutter: [16],
            column: 3,
          }}
          pagination={{
            pageSize: 6,
            current: currentPageBlog,
            onChange: handlePageBlogChange,
            hideOnSinglePage: true,
          }}
          dataSource={data}
          renderItem={(blog) => (
            <List.Item key={blog._id} style={{height: 430}}>
              <BlogItem blog={blog} key={blog._id}/>
            </List.Item>
          )}
        />
      </div>
      {/* <div className={styles.paginationProduct}>
        <Pagination defaultCurrent={1} total={50} />
      </div> */}
    </div>
  );
}
export default ListBlogs;
