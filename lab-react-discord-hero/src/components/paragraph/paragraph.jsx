import './paragraph.css';
function Paragraph ({className='', text}) {

    return (
    <p className = {className}>{text}</p>
    )
}

export default Paragraph