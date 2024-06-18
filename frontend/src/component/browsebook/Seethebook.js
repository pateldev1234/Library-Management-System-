import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./seethebook.css"

const SeeTheBook = () => {
    const { title } = useParams();
    const [bookData, setBookData] = useState(null);

    const fetcchdata = (async () => {
        try {
            const res = await axios.get(`http://localhost:8000/getbookdata/${title}`);
            setBookData(res.data);
        }
        catch (error) {
            console.log("there is some error in fetching the single data we have");
        }

    })

    useEffect(() => {
        fetcchdata();
    }, [title])
    useEffect(() => {
        console.log(bookData);
    }, [bookData]);

return (
        <>
            <div className="book-details-container">
                {bookData ? (
                    <div className="book-details">
                        <h1 className='title'>Details of the Book {bookData[0].title}</h1>
                        <h1 ><strong>Title:</strong>{bookData[0].title}</h1>
                        <h2 ><strong>Subtitle:</strong>{bookData[0].subtitle}</h2>
                        <div className="book-info">
                            <p ><strong>Description:</strong>{bookData[0].description}</p>
                            <p><strong>Author:</strong> {bookData[0].author}</p>
                            <p><strong>Publisher:</strong> {bookData[0].publisher}</p>
                            <p><strong>ISBN:</strong> {bookData[0].ISBN}</p>
                            <p><strong>Pages:</strong> {bookData[0].page}</p>
                            <p><strong>Price:</strong> ${bookData[0].price}</p>
                            <p><strong>Quantity:</strong> {bookData[0].quantity}</p>
                        </div>
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </>
    );
};

export default SeeTheBook;

