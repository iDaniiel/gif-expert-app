export const getGif = async (category) =>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=vt6cE8IGDfs7nH4adwdLsAjGAfNc6yOZ&q=${category}&limit=20`;
    const res = await fetch( url );
    const { data } = await res.json();

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    return gifs;
}