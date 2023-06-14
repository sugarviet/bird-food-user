import PropTypes from 'prop-types';
import { Avatar, List, Space, Tag } from 'antd';
import {
    StarOutlined, LikeOutlined, MessageOutlined,
    FacebookOutlined, LinkedinOutlined, TwitterOutlined,
    YoutubeOutlined,
} from "@ant-design/icons";
import React from 'react';
import styles from './CommentBlog.module.css'


const CommentBlog = () => {

    CommentBlog.propTypes = {
        icon: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
    };

    const data = Array.from({
        length: 3,
    }).map((_, i) => ({
        href: 'https://ant.design',
        title: `ant design part ${i}`,
        avatar: `https://xsgames.co/randomusers/avatar.php?g=pixel&key=${i}`,
        description:
            'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        content:
            'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    }));
    const IconText = ({ icon, text }) => (
        <Space>
            {React.createElement(icon)}
            {text}
        </Space>
    );

    return (
        <div className={styles.blogComment}>
            <Space size={[0, 8]} wrap>
                <Tag className={styles.blogTag} icon={<TwitterOutlined />} color="#55acee">
                    Twitter
                </Tag>
                <Tag className={styles.blogTag} icon={<YoutubeOutlined />} color="#cd201f">
                    Youtube
                </Tag>
                <Tag className={styles.blogTag} icon={<FacebookOutlined />} color="#3b5999">
                    Facebook
                </Tag>
                <Tag className={styles.blogTag} icon={<LinkedinOutlined />} color="#55acee">
                    LinkedIn
                </Tag>
            </Space>
            <h1 className={styles.blogHeader}>6 Comments</h1>
            <div className={styles.blogCommentBody}>
                <List
                    className={styles.blogList}
                    itemLayout="vertical"
                    size="large"
                    dataSource={data}
                    renderItem={(item) => (
                        <List.Item
                            key={item.title}
                            actions={[
                                <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                                <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                                <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
                            ]}
                        >
                            <List.Item.Meta
                                avatar={<Avatar src={item.avatar} />}
                                title={<a href={item.href}>{item.title}</a>}
                                description={item.description}
                            />
                            {item.content}
                        </List.Item>
                    )}
                />
            </div>

        </div>
    )
}
export default CommentBlog;