import React, {useState} from "react";
import { act } from "react-dom/test-utils";


const Accordion = ({items}) => {
    const [activeIndex, setActiveIndex] = useState(null); 

    const onTitleClick = (index) => {
        setActiveIndex(index);
    }

    const renderedItems = items.map((item, idx) => {
        
        const active = idx === activeIndex ? 'active' : '';


        return <React.Fragment key={item.tittle}>
            <div className={`title ${active}`} 
                 onClick={()=> {onTitleClick(idx)}}
            >
                <i className="dropdown icon"></i>
                {item.title}
            </div>
            <div className={`content ${active}`}>
                <p>{item.content}</p>
            </div>
        </React.Fragment>
    })

    return <div className="ui styled accordion">
        {renderedItems}
        </div>
}

export default Accordion;

