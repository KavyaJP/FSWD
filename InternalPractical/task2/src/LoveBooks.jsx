import React, { useEffect, useState } from "react";

function LoveBooks() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch("https://openlibrary.org/subjects/love.json?limit=10")
            .then((res) => {
                if (!res.ok) throw new Error("Network response was not ok");
                return res.json();
            })
            .then((data) => {
                setBooks(data.works);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    return (
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Author Name</th>
                    <th>First Publish Year</th>
                </tr>
            </thead>
            <tbody>
                {books.map((book) => (
                    <tr key={book.key}>
                        <td>{book.title}</td>
                        <td>{book.authors && book.authors[0]?.name}</td>
                        <td>{book.first_publish_year}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default LoveBooks;