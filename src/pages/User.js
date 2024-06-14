import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, easeInOut } from 'framer-motion';
import axios from 'axios';

function User() {
    const { username } = useParams();
    const navigate = useNavigate();

    const [profile, setProfile] = useState({});
    const [repos, setRepos] = useState([]);

    const token = process.env.REACT_APP_GH_TOKEN;

    useEffect(() => {
        const options = {
            headers: { Authorization: `Bearer ${token}` }
        };

        const fetchUserData = async () => {
            try {
                const userData = await axios.get(`https://api.github.com/users/${username}`, options);
                setProfile(userData.data);
            } catch (err) {
                navigate('/');
            }
        };

        const fetchReposData = async () => {
            try {
                const reposData = await axios.get(`https://api.github.com/users/${username}/repos`, options);
                setRepos(reposData.data);
            } catch (err) {
                navigate('/');
            }
        };

        if (username) {
            fetchUserData();
            fetchReposData();
        }
    }, [username, navigate, token]);

    const dateOptions = { month: 'short', day: 'numeric', year: 'numeric' };

    return (
        <motion.div
            className='container'
            initial={{ opacity: 0, y: '0.5%' }}
            animate={{ opacity: 1, y: '0%' }}
            exit={{ opacity: 0, y: '0.5%' }}
            transition={{ delay: 0.2, duration: 0.4, ease: easeInOut }}
        >
            <main>
                <div className='user-page'>
                    <div className='user-info'>
                        <div className='user-top'>
                            <motion.img
                                src={profile.avatar_url}
                                alt={profile.name}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                            />
                            <h1 className='user-title'>{profile.name}</h1>
                        </div>
                        <div className='statistics'>
                            <div>
                                <p className='number'>{profile.public_repos}</p>
                                <p className='subtitle'>Repositories</p>
                            </div>
                            <div>
                                <p className='number'>{profile.followers}</p>
                                <p className='subtitle'>Followers</p>
                            </div>
                            <div>
                                <p className='number'>{profile.following}</p>
                                <p className='subtitle'>Following</p>
                            </div>
                        </div>
                        <div className='link'>
                            <button onClick={() => window.open(profile.html_url, '_blank')}>
                                Go to GitHub
                            </button>
                            <button onClick={() => navigate(-1)} className='back-btn'>
                                Go back
                            </button>
                        </div>
                    </div>
                    <div className='repositories'>
                        <h2>My repositories</h2>
                        <div className='repos-list'>
                            {repos.map(repo => (
                                <motion.div
                                    key={repo.id}
                                    className='repo-div'
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.3, delay: 0.1 }}
                                >
                                    <div className='repo-info'>
                                        <a href={repo.html_url} target='_blank' rel='noreferrer'>
                                            {repo.name}
                                        </a>
                                        <p className='repo-date'>
                                            Updated at {new Date(repo.updated_at).toLocaleDateString('en-CA', dateOptions)}
                                        </p>
                                    </div>
                                    <p className='repo-description'>{repo.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </motion.div>
    );
}

export default User;
