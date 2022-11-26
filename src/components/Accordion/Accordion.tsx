import { useState } from "react";
import { AccordionIcon } from "./AccordionIcon";

interface Props {
    title: string;
    content: any;
}

export const Accordion = ({ title, content }: Props) => {
    const [open, setOpen] = useState(window.localStorage.getItem(title) === "open" ? true : false);
    console.log(window.localStorage.getItem(title))
    return (
        <div className={open ? "accordion open" : "accordion"}>
            <div className="accordion-title" onClick={() => {
                setOpen(!open)
                window.localStorage.setItem(title, open.toString());
            }}>
                <h2 className="title"> {title} </h2>
                <div>
                    <AccordionIcon />
                </div>
            </div>
            {open &&
                <div className="accordion-content">
                    {content}
                </div>}
        </div>
    )
}
