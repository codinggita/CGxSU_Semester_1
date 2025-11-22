/**
 * Exercise 3: Comprehensive error handling
 */

class NetworkError extends Error {
  constructor(message) {
    super(message);
    this.name = 'NetworkError';
  }
}

class HTTPError extends Error {
  constructor(response) {
    super(`HTTP Error ${response.status}`);
    this.name = 'HTTPError';
    this.status = response.status;
    this.response = response;
  }
}

async function fetchWithErrorHandling(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new HTTPError(response);
    }

    return await response.json();
  } catch (error) {
    if (error.name === 'TypeError') {
      throw new NetworkError('Network request failed. Check your connection.');
    }

    if (error instanceof HTTPError) {
      if (error.status === 404) {
        throw new Error('Resource not found');
      } else if (error.status >= 500) {
        throw new Error('Server error. Try again later.');
      }
    }

    throw error;
  }
}

export { fetchWithErrorHandling, NetworkError, HTTPError };
