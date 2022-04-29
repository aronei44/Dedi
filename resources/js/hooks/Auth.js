import axios from "axios";

const Auth = () => {
    if(localStorage.getItem('token')) {
        axios({
            method: 'get',
            url: '/api/user',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        }).then(response => {
            if(response.status !== 200) {
                localStorage.removeItem('token');
                localStorage.removeItem('user');
                window.location.href = '/auth';
            }
        });
    } else {
        window.location.href = '/auth';
    }
}
export default Auth;
