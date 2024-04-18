import AuthContext from '../Context/AuthProvider';
import axios from '../api/Axios';
// import axios from '../api/axios';

import useAuth from './UseAuth';
import { useContext,useEffect } from 'react';
// AuthContext

const useRefreshToken = () => {
    const { setAuth ,auth} = useAuth();
    // const { setAuth,auth } = useContext(AuthContext);
    

    useEffect(() => {
        console.log("auth inside useEffect:", auth);
      }, [setAuth]);

    const refresh = async () => {
        const response = await axios.get('/api/auth/refresh', {
        // const response = await axios.get('/refresh', {
            withCredentials: true
        });
        console.log(response)
        console.log("In use refresh",auth)
        if (response?.data?.status == "ok"){
            // setAuth({});
            // setAuth({
            //     user, roles : [roles,"test role"], accessToken, foundUser
            // });
            //  setAuth({user: "hi"});
            //  setAuth({user: "jiyaaa", roles : [response.data.roles ,"test role"], accessToken: response.data.accessToken });

            // console.log("test here",test)

            const user = response?.data?.Userdata[0]?.Email;
            const accessToken = response?.data?.accessToken;
            const roles = response?.data?.Userdata[0]?.Role;
            const UserID = response?.data?.Userdata[0]?.UserID;
            const FName = response?.data?.Userdata[0]?.FName;
            const LName = response?.data?.Userdata[0]?.LName;
            const Email = response?.data?.Userdata[0]?.Email;
            const NRC = response?.data?.Userdata[0]?.NRC;

            console.log("User data here",  response)
           


           

            setAuth(prev => {
                console.log("Pre",JSON.stringify(prev));
                console.log("roles",response.data.accessToken);
                console.log(response.data.roles);
                return { ...prev,
                    user: response.data.email, 
                    roles : [response.data.roles ,"test role"],
                     accessToken: response.data.accessToken,
                     dat : response.data ,
                     foundUser: response.data.foundUser, UserID,FName,LName,Email,NRC
                    }
                     

            });
            console.log("auths",auth)
            return response.data.accessToken;

        }
   
    }
    return refresh;
};

export default useRefreshToken;