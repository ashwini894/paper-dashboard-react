/*!

=========================================================
* Paper Dashboard PRO React - v1.3.1
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-pro-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import { AuthContext } from "context/AuthContext";
import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom"; // For navigation after login

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Label,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Col,
  Row
} from "reactstrap";

function Login() {
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history   = useHistory(); 
  //const { login } = useContext(AuthContext);
  const { isAuthenticated, login } = useContext(AuthContext);

  // React.useEffect(() => {
    
  //   alert(isAuthenticated)
  //   if(isAuthenticated){
  //     history.push("/admin/dashboard");
  //   }
  //   return function cleanup() {
  //     document.body.classList.toggle("login-page");
  //   };
  // });


  useEffect(() => {
  
    if (isAuthenticated) {
        history.push("/admin/dashboard"); 
    }
  
    return () => {
      document.body.classList.remove("login-page");
    };
  }, [isAuthenticated, history]);
  
  // Handle login form submission
  const handleLogin = (e) => {
    e.preventDefault();
    //console.log("clicked login");
    if (username === "admin" && password === "password123") {
      // On successful login, call login function from context
      const userData = { username, role: "admin" };
      // Store user data and set authentication state to true
      login(userData);
      // Redirect to the dashboard (or another protected route)
      history.push("/admin/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="login-page">
      <Container>
        <Row>
          <Col className="ml-auto mr-auto" lg="4" md="6">
            <Form className="form" onSubmit={handleLogin}>
              <Card className="card-login">
                <CardHeader>
                  <CardHeader>
                    <h3 className="header text-center">Login</h3>
                  </CardHeader>
                </CardHeader>
                <CardBody>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="nc-icon nc-single-02" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Username"
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                  </InputGroup>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="nc-icon nc-key-25" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)} // Update state with password input
                      autoComplete="off"
                      required
                    />
                  </InputGroup>
                  <br />
                  <FormGroup>
                    <FormGroup check>
                      <Label check>
                        <Input defaultChecked defaultValue="" type="checkbox" />
                        <span className="form-check-sign" />
                        Subscribe to newsletter
                      </Label>
                    </FormGroup>
                  </FormGroup>
                </CardBody>
                <CardFooter>
                  <Button
                    block
                    className="btn-round mb-3"
                    color="warning"                  >
                    Get Started
                  </Button>
                </CardFooter>
              </Card>
            </Form>
          </Col>
        </Row>
      </Container>
      <div
        className="full-page-background"
        style={{
          backgroundImage: `url(${require("assets/img/bg/fabio-mangione.jpg")})`
        }}
      />
    </div>
  );
}

export default Login;
