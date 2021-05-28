import React, {Component} from "react";
import FileUpload from "./components/FileUpload";


const Test = (props) => {
    const url = props.url
    return (
        <p>{url}</p>
    )
}




class App extends Component {
    handleSubmit = (file) => {
        this.setState({file: file})
    }

    state = {
        file: {
            url: '123',
            size: '',
        },
    }

    render() {

        const {url} = this.state.file

        return (
            <div>
                <FileUpload handleSubmit={this.handleSubmit}/>
                <Test url={url}/>
            </div>

        )
    }
}

export default App


