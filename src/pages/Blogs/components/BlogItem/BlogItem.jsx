import { CalendarOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";
import styles from "./BlogItem.module.css";
import { Link } from 'react-router-dom';

BlogItem.propTypes = {
  blog: PropTypes.shape({
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
};
function BlogItem({ blog }) {
  return (
    <div className={styles.blogItems}>
      <div>
        <div className={styles.imageBlog}>
          <img src={blog.image} />
        </div>
        <div className={styles.titleBlog}>
          <Link to={`/blogs/${blog.id}`} className={styles.titleBlogLink}>
            <span>{blog.name}</span>
          </Link>
        </div>
        <span className={styles.descriptionBlog_des}>
          {blog.description}
        </span>
      </div>
      <div className={styles.descriptionBlog}>
        <span className={styles.descriptionBlog_date}>
          <CalendarOutlined className={styles.actionIconProduct} />
          {blog.date}
        </span>
        <Link to={`/blogs/${blog.id}`} className={styles.descriptionBlog_view}>
          View detail...
        </Link>
      </div>
    </div>
  );
}
export default BlogItem;
