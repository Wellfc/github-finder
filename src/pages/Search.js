import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function Search() {
    const [username, setUsername] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

       const handleInputChange = (event) => {
        setUsername(event.target.value);
    };

    const handleSearch = async (event) => {
        event.preventDefault();

        if (username.trim().length === 0) {
            setErrorMessage('Please enter a GitHub username');
            return;
        }

        try {
            const token = process.env.REACT_APP_GH_TOKEN;
            const options = { headers: { Authorization: `Bearer ${token}` } };

            await axios.get(`https://api.github.com/users/${username}`, options);
            navigate(`/user/${username}`);
            setErrorMessage('');
        } catch (error) {
            setErrorMessage('User not found. Try again');
        }
    };

    return (
        <motion.div
            className="container"
            initial={{ opacity: 0, y: '-10%' }}
            animate={{ opacity: 1, y: '0%' }}
            exit={{ opacity: 0, y: '10%' }}
            transition={{ duration: 0.5 }}
        >
            <div className='search-form'>
                <h1>GitHub Finder</h1>
                <form onSubmit={handleSearch}>
                    <input
                        type='text'
                        value={username}
                        onChange={handleInputChange}
                        placeholder='Enter a GitHub username'
                    />
                    <input type='submit' value='Search' />
                </form>
                <div className='message'>{errorMessage && <p>{errorMessage}</p>}</div>
            </div>
        </motion.div>
    );
}

export default Search;
