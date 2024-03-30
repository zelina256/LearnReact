import React, { useState, useEffect } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';

const OptimizeForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        packageT: '',
        checked: false,
        show: false,
        message: 'Thank you',
        alert: 'success'
    });

    const handleChange = (e) => {
        const { name, value, checked, type } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, surname, checked, packageT } = formData;
        const alphabeticRegex = /^[a-zA-Z]+$/;
        let alertType, alertMessage;

        if (name === '' || surname === '') {
            alertType = 'danger';
            alertMessage = 'Fill the fields!';
        } else if (!name.match(alphabeticRegex) || !surname.match(alphabeticRegex)) {
            alertType = 'danger';
            alertMessage = 'Name and surname should contain only alphabet characters!';
        } else if (!checked) {
            alertType = 'danger';
            alertMessage = 'Please accept the Terms and Conditions!';
        } else {
            alertType = 'success';
            alertMessage = `Thank you, ${name} ${surname}! You have selected ${packageT} package!`;
        }

        setFormData(prevState => ({
            ...prevState,
            alert: alertType,
            message: alertMessage,
            show: true
        }));
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setFormData(prevState => ({
                ...prevState,
                show: false
            }));
        }, 5000);
        return () => clearTimeout(timer);
    }, [formData.show]);

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="surname">
                    <Form.Label>Surname</Form.Label>
                    <Form.Control type="text" name="surname" value={formData.surname} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="packageT">
                    <Form.Label>Packages</Form.Label>
                    <Form.Select aria-label="Default select example" name="packageT" value={formData.packageT} onChange={handleChange}>
                        <option>Select Package</option>
                        <option value="WEB">WEB</option>
                        <option value="MERN">MERN</option>
                        <option value="Java">JAVA</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Terms and Condition" name="checked" checked={formData.checked} onChange={handleChange} />
                </Form.Group>
                <Button variant="primary" type="submit">Send</Button>
            </Form>
            {formData.show && (
                <Alert variant={formData.alert} className="mt-5">
                    {formData.message}
                </Alert>
            )}
        </Container>
    );
};

export default OptimizeForm;
