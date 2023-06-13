import { Input } from "antd";
import styles from './Form.module.css'

function Form({inputList}) {
    return ( 
        <>
            {inputList.map( input => <Input 
                                            size='large' 
                                            className={`${styles.input}`}
                                            type={input.type}
                                            placeholder={input.name}
                                            prefix={input.prefix} 
                                    />
                            )}
        </>
    );
}

export default Form;