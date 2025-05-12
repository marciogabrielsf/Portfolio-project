import { motion } from "framer-motion";
import { container, motionItem } from "./motion";
import "./styles.scss";

export default function AboutText() {
    return (
        <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="aboutDiv shinyContainer"
        >
            <div className="about_copy">
                <motion.h2 variants={motionItem} className="main_headline">
                    SOBRE
                </motion.h2>
                <motion.p variants={motionItem} className="mainText">
                    Olá, meu nome é <span className="dd-highlight">Márcio Gabriel</span> e desde os
                    8 anos de idade sou apaixonado pela lógica e pela concretização de idéias em
                    realidade.
                </motion.p>
                <motion.p variants={motionItem} className="mainText">
                    Desde o início da minha vida a tecnologia e a curiosidade me conquistaram e
                    correm em minhas veias até hoje.
                </motion.p>
                <motion.p variants={motionItem} className="mainText">
                    Atualmente estou no oitavo semestre de Ciência da computação na Universidade
                    Estadual do Ceará - UECE.
                </motion.p>
                <motion.p variants={motionItem} className="mainText">
                    Possuo mais de 5 anos de experiência com desenvolvimento de software, sendo 4
                    anos profissionalmente.
                </motion.p>
                <motion.p variants={motionItem} className="mainText">
                    <b>Algumas tecnologias que eu trabalho:</b>
                </motion.p>
                <motion.ul variants={motionItem} className="technologies">
                    <li>React Native</li>
                    <li>Python</li>
                    <li>JavaScript</li>
                    <li>NextJS</li>
                    <li>Golang</li>
                    <li>TypeScript</li>
                    <li>NodeJS</li>
                    <li>mongoDB</li>
                    <li>PostgreSQL</li>
                    <li>Docker</li>
                    <li>AWS</li>
                </motion.ul>
            </div>
        </motion.div>
    );
}
