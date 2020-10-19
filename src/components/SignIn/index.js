import React from "react";
import {Container, Icon, Text, Form, FormButton, FormContent, FormH1, FormInput, FormLabel, FormWrap} from "./SignInElements";

const SignInPage = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to={'/'}>Payrail</Icon>
                    <FormContent>
                        <Form action={'#'}>
                            <FormH1>Sign In to your account</FormH1>
                            <FormLabel>Email</FormLabel>
                            <FormInput type={'email'} required/>
                            <FormLabel>Password</FormLabel>
                            <FormInput type={'password'} required/>
                            <FormButton type={'submit'}>Continue</FormButton>
                            <Text>Forgot Password?</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
};

export default SignInPage;