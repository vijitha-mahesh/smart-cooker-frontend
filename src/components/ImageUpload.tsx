import React, { useState } from 'react';
import { storage } from '../firebase';

export default function ImageUpload() {

    var fileType = new File([''], '', {
        type: 'text/plain'
    });

    const [image, setImage] = useState<File>(fileType);

    const [url, setUrl] = useState('');
    const [progress, setProgress] = useState(0);

    const handleChange = (e: any) => {
        console.log('handle change image upload');
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    const handleUpload = () => {
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on(
            'state_changed',
            (snapshot) => {
                const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                setProgress(progress);
            },
            (error) => {
                console.log(error);
            },
            () => {
                console.log('image uploadddddddddddddddd');
                storage
                    .ref('images')
                    .child(image.name)
                    .getDownloadURL()
                    .then((url) => {
                        console.log(url);
                        setUrl(url);
                    });
            }
        );
    };

    return (
        <>
            <input type="file" onChange={handleChange} />
            <button onClick={handleUpload}>Upload</button>
        </>
    );
}
