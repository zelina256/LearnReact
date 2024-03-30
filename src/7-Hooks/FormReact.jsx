import React, { useState, useEffect } from 'react'
import { Container, Form, Button, Alert } from "react-bootstrap"
const FormReact = () => {
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [packageT, setPackageT] = useState("")
    const [checked, setChecked] = useState(false)
    const [show, setShow] = useState(false)
    const [message, setMessage] = useState("Thank you")
    const [alert, setAlert] = useState('success')
    const handleSubmit = (e) => {
        e.preventDefault()
        const alphabeticRegex = /^[a-zA-Z]+$/;
        if (name === "" || surname === "") {
            setAlert("danger");
            setMessage("Fill the fields!");
        } else if (!name.match(alphabeticRegex) || !surname.match(alphabeticRegex)) {
            setAlert("danger");
            setMessage("Name and surname should contain only alphabet characters!");
        } else if (!checked) {
            setAlert('danger');
            setMessage('Please accept the Terms and Conditions!');
        } else {
            setAlert("success");
            setMessage(`Thank you, ${name} ${surname}! You have selected ${packageT} package!`);
        }
        setShow(true);
    }
    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(false);
        }, 5000);
        return () => clearTimeout(timer);
    }, [show]);
    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="surname">
                    <Form.Label>Surname</Form.Label>
                    <Form.Control type="text" value={surname} onChange={(e) => setSurname(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="packageT">
                    <Form.Label>Packages</Form.Label>
                    <Form.Select aria-label="Default select example" value={packageT} onChange={(e) => setPackageT(e.target.value)}>
                        <option>Select Package</option>
                        <option value="WEB">WEB</option>
                        <option value="MERN">MERN</option>
                        <option value="Java">JAVA</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Terms and Codition" onChange={(e) => setChecked(e.target.checked)} />
                </Form.Group>
                <Button variant="primary" type="submit">Send</Button>
            </Form>
            {show &&
                <Alert variant={alert} className='mt-5'>
                    {message}
                </Alert>}
        </Container>
    )
}

export default FormReact