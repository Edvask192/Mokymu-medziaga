import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
const API_URL = 'https://www.omdbapi.com'
const API_KEY = 'apikey=a2526df0';


const Details = ({ id, handleClose }) => {
    const [movie, setMovie] = useState();


    useEffect(() => {
        const getData = () => {
            const url = `${API_URL}/?${API_KEY}&i=${id}`;

            fetch(url)
                .then(response => response.json())
                .then(data => setMovie(data));
        }

        getData();


    }, [id])

    return (
        <>
            {
                movie && (
                    <Modal show={movie} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>{movie.Title}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div>
                                {movie.Poster && (
                                    <img src={movie.Poster} alt={movie.Title} style={{ width: '150px', height: 'auto', margin: 10 }} />
                                )}
                                <div>
                                    <p><strong>Year:</strong> {movie.Year}</p>
                                    <p><strong>Genre:</strong> {movie.Genre}</p>
                                    <p><strong>Director:</strong> {movie.Director}</p>
                                    <p><strong>Actors:</strong> {movie.Actors}</p>
                                    <p><strong>Plot:</strong> {movie.Plot}</p>
                                </div>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                )
            }
        </>

    )
};

export default Details;