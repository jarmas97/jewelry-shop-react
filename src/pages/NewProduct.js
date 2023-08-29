import Header from "../components/Header";
import React, { useState } from 'react';
import axios from 'axios';

export default function() {

    const [productName, setProductName] = useState('');
    const [productDescription, setProductDescription] = useState('');

    const [selectedFiles, setSelectedFiles] = useState([]);

    const handleFileChange = (event) => {
        setSelectedFiles(event.target.files);
    };

    const handleUpload = () => {
        const formData = new FormData();
        
        for (let i = 0; i < selectedFiles.length; i++) {
            formData.append('images', selectedFiles[i]);
        }

        axios.post('http://localhost:8080/new-product', formData)
        .then(response => {
            console.log('Images uploaded successfully', response);
        })
        .catch(error => {
            console.error('Error uploading images', error);
        });
    };

    return (
        <div>
            <Header/>

            <div className="content-centered">

                <h1>Add new product</h1>

                <form>

                    <input
                        type="text"
                        placeholder="name"
                        required="required"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                    /> <br/>

                    <input
                        type="text"
                        placeholder="description"
                        required="required"
                        value={productDescription}
                        onChange={(e) => setProductDescription(e.target.value)}
                    /> <br/>

                    <input
                        type="file"
                        multiple onChange={handleFileChange}
                    /> <br/>

                    <button
                        type="submit" onClick={handleUpload}>Create</button>
                </form>
                

            </div>
            
        </div>
    );
    
}