import styles from "./ListBlogs.module.css";
import { Row, Col} from 'antd' ;
import { Pagination } from 'antd';
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
  {
    id: 4,
    image:
      "https://themewagon.github.io/foody2/img/blog-1.jpg",
    title: "How to cultivate organic fruits and vegetables in own firm",
    author : 'Admin',
    date : '09 October 2002'
  },
  {
    id: 5,
    image:
      "https://themewagon.github.io/foody2/img/blog-2.jpg",
    title: "How to cultivate organic fruits and vegetables in own firm",
    author : 'Admin',
    date : '09 October 2002'
  },
  {
    id: 6,
    image:
      "https://themewagon.github.io/foody2/img/blog-3.jpg",
    title: "How to cultivate organic fruits and vegetables in own firm",
    author : 'Admin',
    date : '09 October 2002'
  },
  {
    id: 7,
    image:
      "https://themewagon.github.io/foody2/img/blog-1.jpg",
    title: "How to cultivate organic fruits and vegetables in own firm",
    author : 'Admin',
    date : '09 October 2002'
  },
  {
    id: 8,
    image:
      "https://themewagon.github.io/foody2/img/blog-2.jpg",
    title: "How to cultivate organic fruits and vegetables in own firm",
    author : 'Admin',
    date : '09 October 2002'
  },
  {
    id: 9,
    image:
      "https://themewagon.github.io/foody2/img/blog-3.jpg",
    title: "How to cultivate organic fruits and vegetables in own firm",
    author : 'Admin',
    date : '09 October 2002'
  },
];
function ListBlogs() {
    return (
        <div>
            
            <div className={styles.maxWidth}>
            <div className={styles.lastestBlog}>
                            <div className={styles.hrContent}>
                                <div style={{width:'50%', margin:'0 auto'}}>
                                    <hr className={styles.hrTop} />
                                </div>
                                <hr className={styles.hrBot} /> 
                            </div>
                <span className={styles.lastestBlog_mainTitle}>Latest Blog</span>
                <span className={styles.lastestBlog_subTitle}>Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</span>
            </div>
            <Row gutter={[16, 16]}>
                {BlogsData.map((blog) => (
                    <Col span={8} key={blog.id}>    
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
        <div className={styles.paginationProduct}>
                    <Pagination defaultCurrent={1} total={50} />
                </div>
        </div>
    )
}
export default ListBlogs;