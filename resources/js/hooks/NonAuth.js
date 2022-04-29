import axios from "axios";

const NonAuth = () => {
    if(localStorage.getItem('token')) {
        axios({
            method: 'get',
            url: '/api/user',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        }).then(response => {
            if(response.status === 200) {
                window.location.href = '/';
            } else {
                localStorage.removeItem('token');
                localStorage.removeItem('user');
            }
        });
    }
}
export default NonAuth;
