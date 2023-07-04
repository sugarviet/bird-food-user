import { CalendarOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";
import styles from "./BlogItem.module.css";
import { Link } from "react-router-dom";

function BlogItem({ blog }) {
  return (
    <div className={styles.blogItems}>
      <div>
        <div className={styles.imageBlog}>
          <img src={blog.thumbnail} />
        </div>
        <div className={styles.titleBlog}>
          <Link to={`/blogs/${blog._id}`} className={styles.titleBlogLink}>
            <span>{blog.title}</span>
          </Link>
        </div>
        <span className={styles.descriptionBlog_des}>{blog.description}</span>
      </div>
      <div className={styles.descriptionBlog}>
        <span className={styles.descriptionBlog_date}>
          <CalendarOutlined className={styles.actionIconProduct} />
          {blog.createdAt?.slice(0, 10).split("-").reverse().join("/")}
        </span>
        <Link to={`/blogs/${blog._id}`} className={styles.descriptionBlog_view}>
          View detail...
        </Link>
      </div>
    </div>
  );
}
BlogItem.propTypes = {
  blog: PropTypes.shape({
    _id: PropTypes.string,
    thumbnail: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    createdAt: PropTypes.string,
  }).isRequired,
};
export default BlogItem;
