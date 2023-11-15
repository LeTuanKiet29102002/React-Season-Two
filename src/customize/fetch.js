import { useEffect ,useState} from "react";
import axios from "axios";

const useFetch =(url)=>{
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        let fetchData = async () => {
            try {
                let res = await axios.get(url);
                let data = res && res.data && res.data.data ? res.data.data : [];
                setData(data.reverse());
                setLoading(false);
            } catch (error) {
                alert('check error:'+ error.message);
            }
        };
    
        fetchData().catch(error => {
            console.log('check error outside try-catch:', error.message);
        });
    }, []);

    return {
        data,isLoading
    }
}


export default useFetch;