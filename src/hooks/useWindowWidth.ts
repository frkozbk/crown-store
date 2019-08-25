import { useState, useEffect } from 'react';
import _ from 'lodash'
function useWindowsWidth() {
    const isClient = typeof window === 'object'

    function getWidth(){
        return isClient ? window.innerWidth : undefined
    }
    const [windowWidth,setWindownWidth] = useState(getWidth)

    useEffect(() => {
        const handleResize= _.debounce(()=>{
            setWindownWidth(getWidth())
        },30) 
            
        
        window.addEventListener('resize',handleResize)
        return ()=>window.addEventListener('resize',handleResize)
    },[])
    return windowWidth
}
export default useWindowsWidth