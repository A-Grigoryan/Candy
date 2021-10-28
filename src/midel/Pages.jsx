import React,{useState} from 'react'

export default function Pages() {
    const [pages, setpages] = useState({
        pagesActive : 1,
        pagesNumbrs :[1,2,3,4,5,6]
    })
    const togglePagesActive = (ind) => {
        setpages({...pages , pagesActive : pages.pagesNumbrs[ind]})
    }
    const togglePagesActiveStyle = (ind) => {
        if(pages.pagesActive === pages.pagesNumbrs[ind]){
            return "PagesButton Active"
        }else{
            return "PagesButton"
        }
    }
    return (
        <div className = "PagesFlex">
            <div className="pagenumbers">
                <div className = "PageNumbersDiv">
                    <ul className = "ulPagesFlex">
                        {pages.pagesNumbrs.map((el,ind) => 

                            <li key = {ind} className = "pagesLi">
                                <button className = {togglePagesActiveStyle(ind)} onClick = {() => {togglePagesActive(ind)}}>
                                    {el}
                                    <span ></span>
                                </button>
                            </li>
                        
                        )}
                        <li>
                            <button className = "PagesButton btnPAgesIcon">
                                <div className ="PagesIcon">
                                <i class="fas fa-angle-right"></i>
                                </div>
                                <span></span>
                            </button>
                        </li>
                    </ul>                    
                </div>                
            </div>            
        </div>
    )
}
