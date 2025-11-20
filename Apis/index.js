const API_URL = 'https://api.example.com/v1/';

const fetchData = async () => {
    try {
        await fetch(API_URL);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchData();