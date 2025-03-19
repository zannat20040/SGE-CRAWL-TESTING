import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useChatData = (token:string | null) => {
    const axiosPublic = useAxiosPublic()
    const {data: chatData=[], refetch, isLoading:loading} =useQuery({
        queryKey:['chatData'],
        queryFn: async()=>{
                const res = await axiosPublic.get(`/chat/${token}`)
                return res.data
        },
    })
    return [chatData, refetch, loading]
};

export default useChatData;