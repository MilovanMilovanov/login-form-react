import axios from 'axios';
const userData = () => {
    return axios.get("https://run.mocky.io/v3/09e642b5-b52f-43c1-837b-8ebf70c10813")
        .then(({ data }) => {
            return data;
        })
        .catch(err => {
            console.log(err);
        });
}

export default userData;