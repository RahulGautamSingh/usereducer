import './styles.css'

export default function Sidebar(props)
{
return (
<div className="sidebar-container">
    <h1>SideBars</h1>
{props.children}

</div>
)
}