import React,{useState} from 'react'

export default function Categoryes() {
    const [category, setcategory] = useState({
        categoryActive : "Chocolates",
        categoryObj : ["Chocolates","Cake","Loose cookies","Donuts and cocoa","Cake pieces","Dragee","Assorted chocolate","Ice-cream","Chocolate bars","Hard candy","Biscuits","Wafers","Coffee and Tea","Fruit jelly and souffle","Rahat - lokum","Popcorn, salty sticks and nuts","Toffee and nougat","Chocolate cream and halva","Cocoa products","Flour and bread","Exclusive products","Other"]
    })
    const toggleActive = (ind) => {
        setcategory({...category , categoryActive : category.categoryObj[ind]})
    }
    const activeStyle = (ind) => {
        if(category.categoryObj[ind] === category.categoryActive)
        {return "categoryesBigpart active"}
        else{return "categoryesBigpart"}
    }
    return (
        <div className = "allfirstmidelPart">
            <div>
                <div className = "nameCategory">categories</div>
                <div className = "AllCategoryesPart">
                    {category.categoryObj.map((el,ind) => 
                        <div key = {ind} className = {activeStyle(ind)} onClick = {() => {toggleActive(ind)}}>
                            <div className = "categoriesNAME">{el}</div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
