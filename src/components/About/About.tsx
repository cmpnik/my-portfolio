import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import styles from './About.module.css'; // Import CSS Module

const About = () => {
    const info = {
        // all the properties are optional - can be left empty or deleted
        name: 'John Smith',
        role: 'Student',
        description:
          'Adipisicing sit fugit ullam unde aliquid sequi Facilis soluta facilis perspiciatis corporis nulla aspernatur. Autem eligendi rerum delectus modi quisquam? Illo ut quasi nemo ipsa cumque perspiciatis! Maiores minima consectetur.',
        resume: 'https://example.com',
        social: {
          linkedin: 'https://linkedin.com',
          github: 'https://github.com',
        }
    }

    return (
        <div className={`${styles.about} center`}>
            <h1>
                Hi, I am <span className={styles.about__name}>{info.name}</span>
            </h1>

            <h2 className={styles.about__role}>
                A {info.role}
            </h2>

            <p className={styles.about__desc}>{info.description}</p>

            <div className={`${styles.about__contact} center`}>
                <a href={info.social.github} aria-label='github' className={`link link--icon ${styles['link--icon']}`}>
                    <GitHubIcon /> 
                </a>
                <a href={info.social.linkedin} aria-label='linkedin' className={`link link--icon ${styles['link--icon']}`}>
                    <LinkedInIcon /> 
                </a>
            </div>
        </div>
    );
};

export default About;