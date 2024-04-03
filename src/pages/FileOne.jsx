import React, { useState, useEffect } from 'react';
import './FileOne.css';
import axios from 'axios';
import { Card, Button, Navbar, Form, InputGroup, Row, Col, NavDropdown } from 'react-bootstrap'

const FileOne = () => {
    const [value, setValue] = useState([]);
    const [tempvalue, setTempValue] = useState([]);
    const [brand, setBrand] = useState([]);
    const [name, setName] = useState('');


    const fetchApi = () => {
        axios.get('https://dummyjson.com/products')
            .then((response) => {
                console.log(response.data.products);
                const products = response.data.products
                let Arr = []
                products.map((item, key) => {
                    Arr.push({ brand: item.brand })
                }
                )
                setBrand(Arr)
                setValue(response.data.products);
                setTempValue((response.data.products))
                console.log(Arr);
            });
    }

    const handleSearch = (e) => {
        const searchName = e.target.value
        setName(searchName)

        const filteredItems = tempvalue.filter((item) => item.title.toLowerCase().startsWith(searchName));
        setValue(filteredItems)

    }

    const FindBrand = (e) => {
        const brandName = e.target.value

        const filteredItems = tempvalue.filter((item) => item.brand===brandName);
        setValue(filteredItems)
    }

    useEffect(() => {
        fetchApi()
    }, []); // Empty dependency array ensures useEffect runs only once, similar to componentDidMount

    return (
        <>
            <div className='productsbox'>
                <div className='nav-bar'> <Navbar className="bg-body-tertiary justify-content-between">

                    <Form inline>
                        <Row>
                            <Col xs="auto">
                                <Form.Control style={{ width: '400px', marginRight: '20px' }}
                                    type="text"
                                    placeholder="Search Products.."
                                    className=" mr-sm-2"
                                    onKeyUp={handleSearch}
                                />
                            </Col>
                            <Col xs="auto">
                                <Form.Select aria-label="Default select example" onChange={FindBrand}>
                                    <option>Select Brand</option>

                                    {
                                        brand.map((item, key) => (

                                            <option>{item.brand}</option>

                                        ))
                                    }


                                </Form.Select>
                            </Col>
                        </Row>
                    </Form>
                </Navbar></div>


                {
                    value.map((item, key) => (
                        <div className='products'>
                            <Card >
                                <div className='product-image'> <Card.Img style={{ width: '210px', height: '210px', borderRadius: '5px' }} variant="top" src={item.images[0]} /></div>
                                <Card.Body>
                                    <div className='product-head'><h2 className='tteexxtt'><Card.Title>{item.brand}</Card.Title></h2> </div>
                                    <div className='product-description'><Card.Text className='tteexxtt-one'>
                                        {item.description}
                                    </Card.Text></div>
                                    <div className='product-head'><Card.Text className='tteexxtt-one' style={{color:'rgb(8, 128, 32)'}}>
                                        {item.discountPercentage}
                                    </Card.Text></div>
                                </Card.Body>
                            </Card>
                        </div>
                    ))
                }
            </div>
        </>
    );
};

export default FileOne;
