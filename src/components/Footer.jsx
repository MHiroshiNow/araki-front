import React from 'react';
import { Container, Button } from 'react-bootstrap';

function Footer() {
    return (
        <footer className="bg-dark text-white mt-4 py-3">
            <Container className="d-flex justify-content-between align-items-center">
                <div>
                    &copy; {new Date().getFullYear()} 第34回荒木杯争奪全日本英語弁論大会. All rights reserved.
                </div>
                <Button variant="outline-light" href="https://www.instagram.com/ess_ksu/" target="_blank" rel="noopener noreferrer">
                    Follow on Instagram
                </Button>
            </Container>
        </footer>
    );
}

export default Footer;
