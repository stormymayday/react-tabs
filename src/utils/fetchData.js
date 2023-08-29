const fetchData = async (url, setIsLoading, setIsError, setData) => {

    setIsLoading(true);

    try {

        const response = await fetch(url);

        // If not using AXIOS
        if (!response.ok) {
            setIsError(true);
            setIsLoading(false);
            return;
        }

        const data = await response.json();
        setData(data);
        // console.log(data);

    } catch (error) {
        // console.error(error);
        setIsError(true);
    }

    setIsLoading(false);

}

export default fetchData;