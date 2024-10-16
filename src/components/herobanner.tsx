import { Container } from 'react-bootstrap';
import { motion } from "framer-motion"

export default function HeroBanner() {
    const containerVariants = {
        hidden: { opacity: 0, y: 50 },  // Start off slightly below and transparent
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: {
                type: "spring",  // Gives a natural, springy motion
                stiffness: 50,   // Adjust for smoother or stiffer motion
                delay: 0.1,      // Optional delay before animation starts
                duration: 0.5      // Animation duration
            }
        }
    };

    return (
        <div className={"hero-banner pt-2"}>
            <Container>
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}>
                    <h1><span className={"hero-banner__highlight"}>A</span>stronomy &</h1>
                    <h1><span className={"hero-banner__highlight"}>S</span>pace E<span className={"hero-banner__highlight"}>x</span>ploration</h1>
                    <h1>Association</h1>
                    <h4 className={"hero-banner__description"}>UofT's astronomy outreach club</h4>
                </motion.div>

            </Container>
            
        </div>
    );
}