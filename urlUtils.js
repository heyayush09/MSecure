const extractUrls = (text) => {
    // Regular expression to match URLs
    const urlRegex = /((https?:\/\/)|(www\.))[^\s]+|\b(\w+\.[a-zA-Z]{2,})\b/g;
  
    // Extract URLs using the regex
    const urls = text.match(urlRegex) || [];
  
    return urls;
  };
  
  export default extractUrls;
  