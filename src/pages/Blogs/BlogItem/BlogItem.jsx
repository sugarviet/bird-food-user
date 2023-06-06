import { UserOutlined, CalendarOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";
import styles from "./BlogItem.module.css";
BlogItem.propTypes = {
  blog: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
};
function BlogItem({ blog }) {
  return (
    <div className={styles.blogItems}>
      <div className={styles.imageBlog}>
        <img src={blog.image} />
      </div>
      <div className={styles.titleBlog}>
        <span>{blog.title}</span>
      </div>
      <div className={styles.descriptionBlog}>
        <span className={styles.descriptionBlog_author}>
          <UserOutlined className={styles.actionIconProduct} />
          {blog.author}
        </span>
        <span className={styles.descriptionBlog_date}>
          <CalendarOutlined className={styles.actionIconProduct} />
          {blog.date}
        </span>
      </div>
    </div>
  );
}
export default BlogItem;
