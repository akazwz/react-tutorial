import React, {Component} from "react";
import {uploadFile} from "../utils/utils";
import SparkMD5 from "spark-md5";

class FileUpload extends Component {
    state = {
        file: {
            url: '',
            size: '',
        },
    }

    handleChange = (event) => {
        const file = event.target.files[0]
        const {webkitSlice, mozSlice, slice} = File.prototype;
        let blobSlice = slice || mozSlice || webkitSlice,
            chunkSize = 2097152, // Read in chunks of 2MB
            chunks = Math.ceil(file.size / chunkSize),
            currentChunk = 0,
            spark = new SparkMD5.ArrayBuffer(),
            fileReader = new FileReader();

        fileReader.onload = (e) => {
            spark.append(e.target.result);
            currentChunk++;

            if (currentChunk < chunks) {
                loadNext();
            } else {
                let formData = new FormData()
                formData.append('file', file)
                formData.append('md5', spark.end())
                uploadFile(formData).then((res) => {
                    if (res.code === 2000) {
                        alert(res.data.url)
                        const file = {
                            url: res.data.url,
                            size: res.data.size
                        }
                        this.setState({file})
                    }
                })
            }
        };

        fileReader.onerror = function () {
            console.warn('文件读取出错');
        };

        function loadNext() {
            const start = currentChunk * chunkSize,
                end = ((start + chunkSize) >= file.size) ? file.size : start + chunkSize;

            fileReader.readAsArrayBuffer(blobSlice.call(file, start, end));
        }

        loadNext();
    }

    submitForm = () => {
        this.props.handleSubmit(this.state.file)
    }

    render() {
        return (
            <form>
                <label htmlFor="file">请输入:</label>
                <input type="file" id="file" onChange={this.handleChange}/>
                <input type="button" value="Submit" onClick={this.submitForm}/>
            </form>
        )
    }
}

export default FileUpload
