const apiKey = process.env.NEWS_API_Key;
const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`

async function fetchNews(){
    try{
        const response =await fetch(url);
        const data = await response.json();
        console.log(data);
    } catch(error){
        console.error(`There was an error!`, error);
    }
}
fetchNews();