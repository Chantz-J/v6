import * as React from "react";
import { Feather } from "react-feather";
import { Section, Container, Box, Flex, Button } from "../ui";
import { contactMethodStyle } from "./index.css";

export const contactArray = [
    "johnson.chantz@gmail.com", 
    "https://www.linkedin.com/in/chantzjohnson/"
];

export default function ContactMethods () {
    const [contacts, setContacts] = React.useState([]);
    const setContactUsingArray = () => setContacts(contactArray);

    React.useEffect(() => {
        setContactUsingArray();
    },[]);

    return (
        <Section className={contactMethodStyle}>
            <Container>
                <Flex>
                    {contacts && contacts.map((contact, _) =>
                        <Box key={_}>
                            <Button variant="link">
                                <Feather />
                            </Button>
                        </Box>
                    )}
                </Flex>
            </Container>
        </Section>
    );
};