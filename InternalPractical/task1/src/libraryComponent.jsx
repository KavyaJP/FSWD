import React, { useState } from "react";

function LibraryApp() {
    const [books, setBooks] = useState([]);
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [genre, setGenre] = useState("");

    const addBook = () => {
        if (title.trim() === "") {
            alert("Please Enter Title");
            return;
        }
        if (author.trim() === "") {
            alert("Please Enter Author");
            return;
        }
        if (genre.trim() === "") {
            alert("Please Enter Genre");
            return;
        }
        const newBook = { id: Date.now(), title, author, genre };
        setBooks([...books, newBook]);
        setTitle("");
        setAuthor("");
        setGenre("");
    };

    const deleteBook = (id) => {
        setBooks(books.filter((book) => book.id !== id));
    };

    return (
        <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
            <h2>Book Library</h2>
            <div style={{ marginBottom: "10px" }}>
                <div>
                    Title: <input
                        type="text"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        style={{ marginRight: "10px", }}
                    />
                </div>
                <div>
                    Author: <input
                        type="text"
                        placeholder="Author"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        style={{ marginRight: "10px", }}
                    />
                </div>
                <div>
                    Genre: <input
                        type="text"
                        placeholder="Genre"
                        value={genre}
                        onChange={(e) => setGenre(e.target.value)}
                        style={{ marginRight: "10px", }}
                    />
                </div>
                <button onClick={addBook}>Add Book</button>
            </div>
            {books.length > 0 ? (
                <table border="1" cellPadding="8" cellSpacing="0" width="100%">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Genre</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {books.map(({ id, title, author, genre }) => (
                            <tr key={id}>
                                <td>{title}</td>
                                <td>{author}</td>
                                <td>{genre}</td>
                                <td>
                                    <button onClick={() => deleteBook(id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No books added yet.</p>
            )}
        </div>
    );
}

export default LibraryApp;
