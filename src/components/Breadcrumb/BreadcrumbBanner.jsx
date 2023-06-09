import styles from './BreadcrumbBanner.module.css'
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function BreadcrumbBanner({ backgroundImage, title, pathName }) {
    const [breadcrumbItems, setBreadcrumbItems] = useState([]) 

    useEffect(() => {
        const pathNames = pathName.split('/').filter(Boolean)
        const paths = pathNames.filter(Boolean).reduce((paths, path) => 
                                    {
                                        const previous = paths[paths.length - 1]
                                        paths.push(`${previous || '/'}${path}/`)
                                        return paths
                                    }, [])
        
        var items = paths.reduce((items, item, index) => [...items, {title: <Link to={item}>{pathNames[index]}</Link>}]
                                , [{title: <Link to='/'>Home</Link>}])   
                                
        setBreadcrumbItems(items)
    }, [])

    return (
        <>
            <div style={{ backgroundImage: `url(${backgroundImage})` }} className={styles.breadcrumbWrapper}>
                <div className={styles.breadcrumbTitle}>
                    <span style={{ textTransform: 'uppercase' }}>{title}</span>
                    <Breadcrumb
                        items={breadcrumbItems}
                    />
                </div>
            </div>
        </>
    );
}

export default BreadcrumbBanner;