import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import useAxiosSecure from './useAxiosSecure';

const useSelectedClass=()=>{
    const {user,loading}=useContext(AuthContext);
    const [axiosSecure]=useAxiosSecure();
    const {   data: selected=[],refetch,} = useQuery({
        queryKey: ['selected', user?.email],
        enabled: !loading,
        queryFn: async ()=>{
            const response=await axiosSecure(`/selected?email=${user?.email}`);
            console.log('res from axios',response)
             return response.data
        },
      })
return [selected,refetch]
}
export default useSelectedClass;