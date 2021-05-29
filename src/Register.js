import {Component} from "react";
import FileUpload from "./components/FileUpload";

class Register extends Component {
    render() {
        return (
            <div>
                <form>
                    <FileUpload label="选择头像:"/>
                    <label htmlFor="username">用户名:</label>
                    <input type="text" id="username"/>
                    <label htmlFor="password">密码:</label>
                    <input type="text" id="password"/>
                </form>
            </div>
        )
    }
}
export default Register
