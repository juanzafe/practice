import { useState } from "react";



export default function Accordion({ title, content }) {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };
  return (
    <div>
      <div>
        <button className="accordion-header" onClick={() => toggleAccordion('html')}>
        HTML{' '}
        <span
          aria-hidden={true} 
          className={`accordion-icon ${openId === 'html' ? 'accordion-icon--rotated' : ''}`}>
          
        </span>
      </button>
        {openId === 'html' && <div>
          The HyperText Markup Language or HTML is the
          standard markup language for documents designed to
          be displayed in a web browser.
        </div>}
      </div>
    
      <div>
        <div>
        <button className="accordion-header" onClick={() => toggleAccordion('css')}>
          CSS{' '}
          <span
            aria-hidden={true}
            className={`accordion-icon ${openId === 'css' ? 'accordion-icon--rotated' : ''}`}>
          </span>
       </button> 
        </div>
        {openId === 'css' && <div>
          Cascading Style Sheets is a style sheet language
          used for describing the presentation of a document
          written in a markup language such as HTML or XML.
        </div>}
      </div>
      <div>
        <div>
        <button className="accordion-header" onClick={() => toggleAccordion('js')}> 
          JavaScript{' '}
          <span
            aria-hidden={true}
            className={`accordion-icon ${openId === 'js' ? 'accordion-icon--rotated' : ''}`}>
          </span>
        </button> 
        </div>
        {openId === 'js' && <div>
          JavaScript, often abbreviated as JS, is a
          programming language that is one of the core
          technologies of the World Wide Web, alongside HTML
          and CSS.
        </div>}
      </div>
    </div>
  );
}
