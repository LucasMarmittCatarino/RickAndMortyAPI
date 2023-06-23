class Http {
    static instance = new Http();
  
    get = async (url) => {
      try {
        let request = await fetch(url);
        let json = await request.json();
  
        return json;

      } catch (error) {
        throw Error(error);
      }
    }

}
  
export default Http;
  