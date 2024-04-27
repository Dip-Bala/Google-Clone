import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { useResultContext } from "../contexts/ResultContextProvider";
import { Loading } from './Loading';

export const Results = () => {
  const { getResults, results, searchTerm, setSearchTerm, loading } = useResultContext();
  const location = useLocation();

  useEffect(() => {
    if (searchTerm) {
      // Construct the appropriate URL based on the location pathname
      let url;
      switch (location.pathname) {
        case "/search":
          url = `search?q=${searchTerm}&num=30`;
          break;
        case "/images":
          url = `images/q=${searchTerm}`;
          break;
        case "/videos":
          url = `videos/q=${searchTerm}`;
          break;
        case "/news":
          url = `news/q=${searchTerm}`;
          break;
        default:
          // Handle other cases or invalid paths
          return;
      }
      // Fetch results based on the constructed URL
      console.log(location.pathname);
      console.log(url);
      getResults(url);
    }
  }, [searchTerm, location.pathname]);

  // Display loading spinner while fetching data
  if (loading) return <Loading />;

  // Display results based on location pathname
  switch (location.pathname) {
    case "/search":
      return (
        <div className="sm:px-56 py-10 flex flex-wrap justify-between space-y-6">
          {results && results.items ? (
            results.items.map(({ link, title }, index) => (
              <div key={index} className="md:w-2/5 w-full">
                <a href={link} target="_blank" rel="noreferrer">
                  <p className="text-lg hover:underline dark:text-blue-300 text-blue-700">{title}</p>
                  <p className="text-sm">{link.length > 30 ?link.substring(0, 30) : link}</p>
                </a>
              </div>
            ))
          ) : (
            <div>No results found</div>
          )}
        </div>
      );
    case "/imagesearch":
      return (
        <div className="result-container">
          {/* {results && results.items ? (
            results.items.map(({ title , link: {originalImageUrl, contextLink}}, index) => (
                <a href={contextLink} key = {index} target="_blank" rel="noreferrer">
                  <img src={originalImageUrl} alt={title} />
                  <p className="text-lg hover:underline dark:text-blue-300 text-blue-700">{title}</p>
                </a>
            ))
          ) : (
            <div>No results found</div>
          )} */}
          Hii
        </div>
      );
    case "/videos":
      return (
        <div>
           
        </div>
      );
    case "/news":
      return (
        <div>
          {/* Render news results */}
        </div>
      );
    default:
      return (
        <div>
          Error: Page not found
        </div>
      );
  }
}
