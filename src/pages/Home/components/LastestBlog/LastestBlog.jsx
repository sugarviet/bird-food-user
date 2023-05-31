import styles from "./LastestBlog.module.css";
import { Row, Col} from 'antd' ;
const BlogsData = [
  {
    id: 1,
    image:
      "https://themewagon.github.io/foody2/img/blog-1.jpg",
    title: "How to cultivate organic fruits and vegetables in own firm",
    author : 'Admin',
    date : '09 October 2002'
  },
  {
    id: 2,
    image:
      "https://themewagon.github.io/foody2/img/blog-2.jpg",
    title: "How to cultivate organic fruits and vegetables in own firm",
    author : 'Admin',
    date : '09 October 2002'
  },
  {
    id: 3,
    image:
      "https://themewagon.github.io/foody2/img/blog-3.jpg",
    title: "How to cultivate organic fruits and vegetables in own firm",
    author : 'Admin',
    date : '09 October 2002'
  },
];
function LatestBlog() {
    return (
        <div className={styles.maxWidth}>
            <div className={styles.lastestBlog}>
                <span className={styles.lastestBlog_mainTitle}>Latest Blog</span>
                <span className={styles.lastestBlog_subTitle}>Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</span>
            </div>
            <Row gutter={[16, 16]}>
                {BlogsData.map((blog) => (
                    <Col span={8} >    
                        <div className={styles.blogItems}>
                            <div className={styles.imageBlog}>
                                <img src={blog.image} />
                            </div>
                            <div className={styles.titleBlog}>
                                <span>{blog.title}</span>
                            </div>
                            <div style={{display:'flex', justifyContent:'flex-start', paddingLeft: '30px'}}>
                                <span style={{display:'block', padding:'20px 10px', fontSize:'16px', color:'rgb(115, 114, 114)'}}>
                                    {blog.author}
                                </span>
                                <span style={{display:'block', padding:'20px 10px', fontSize:'16px', color:'rgb(115, 114, 114)'}}>
                                    {blog.date}
                                </span>
                            </div>
                        </div>
                    </Col> 
                
                ))}
             </Row>
            
        </div>
    )
}
export default LatestBlog;