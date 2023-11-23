export function timeAgo(date:string):string {
    const now  = new Date();
    
    const diffInMs = now.getTime() - new  Date(date).getTime();

    const diffInScs = Math.floor(diffInMs / 1000);
    const diffInMins = Math.floor(diffInScs / 60);
    const diffInHours = Math.floor(diffInMins / 60);
    const diffInDays = Math.floor(diffInHours / 24);

    if(  diffInScs < 60) {
        return diffInScs + "s";
    } else if (
        
    )

}