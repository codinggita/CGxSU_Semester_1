const fetchWithTimeout = (url, timeoutMs) => {
  const fetchPromise = fetch(url);
  const timeoutPromise = new Promise((_, reject) => {
    setTimeout(() => reject(new Error('Request timeout')), timeoutMs);
  });

  return Promise.race([fetchPromise, timeoutPromise]);
};

export { fetchWithTimeout };
