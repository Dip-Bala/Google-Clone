import React, { createContext, useContext, useState } from 'react';
// Import Axios library for making HTTP requests
import axios from 'axios';

// Create a context to manage state
const ResultContext = createContext();
// Define the base URL for the API
const baseUrl = 'https://google-search72.p.rapidapi.com/';

// Define a provider component to wrap around the application
export const ResultContextProvider = ({ children }) => {
  // Define state variables
  const [results, setResults] = useState([]); // State variable to store search results
  const [loading, setLoading] = useState(false); // State variable to track loading state
  const [searchTerm, setSearchTerm] = useState('Vincenzo'); // State variable to store search term

  // Function to fetch search results from the API
  const getResults = async (url) => {
    // Set loading state to true to indicate the start of fetching
    setLoading(true);

    try {
      // Make a GET request to the API using Axios
      const response = await axios.get(`${baseUrl}${url}`, {
        // Pass necessary headers for accessing the API
        headers: {
          'X-RapidAPI-Key': '3ed130e713msh27527fef4eef722p179393jsnd82c45bd092a',
          'X-RapidAPI-Host': 'google-search72.p.rapidapi.com'
        },
      });

      // Update the results state with the data received from the API response
      setResults(response.data);
    } catch (error) {
      // Log any errors that occur during the API request
      console.error('Error fetching results:', error.message);
    }

    // Set loading state to false to indicate the end of fetching
    setLoading(false);
  };

  // Provide state values and functions to child components using context
  return (
    <ResultContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, loading }}>
      {children}
    </ResultContext.Provider>
  );
};

// Custom hook to consume the context and access state values and functions
export const useResultContext = () => useContext(ResultContext);
