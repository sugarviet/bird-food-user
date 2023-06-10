import { useParams } from "react-router-dom";
import styles from "./BlogDetail.module.css";
import useSingleBlog from "../../hooks/useSingleBlog";


const BlogDetail = () => {
    const { blogId } = useParams();

    const { blog } = useSingleBlog(blogId);
  return (
    <div>
            <h1>{blog?.name}</h1>
    </div>
  )
}
export default BlogDetail;