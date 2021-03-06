import React, {useEffect, useState} from 'react';
import {Row, Col} from "reactstrap";

import Loader from "../loader/Loader";
import Album from "./Album";

import './css/albums.min.css';

export default function Albums() {
    const [albums, setAlbums] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [colSize, setColSize] = useState(4);

    useEffect(() => {
        if(isLoading) {
            setAlbums([
                {
                    name: 'france',
                    photos: [
                        'images/france/image1.jpg',
                        'images/france/image2.jpg',
                        'images/france/image3.jpg'
                    ]
                },
                {
                    name: 'usa',
                    photos: [
                        'images/usa/img1.jpg',
                        'images/usa/img2.jpg',
                        'images/usa/img3.jpg'
                    ]
                }
            ])

            setIsLoading(false);
        }

    }, [isLoading])

    return (
        <div className={'albums'}>
            {
                isLoading ? <Loader /> :
                    <div>
                        <Row>
                            <Col sm={12}>
                                <div className={'covers'}>
                                    {
                                        albums.map((album, key) => {
                                            return (
                                                <Album data={album} isCover={true} key={key} />
                                            )
                                        })
                                    }
                                </div>
                            </Col>
                        </Row>
                    </div>

            }

        </div>
    )
}