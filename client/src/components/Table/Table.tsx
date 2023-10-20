import './Table.css'

const Table = (props) => {
    return (
        <div className='table-container'>
            <table>
                <tr>
                    <th>State</th>
                    <th>Obesity</th>
                </tr>
                {props.data.map(item => {
                    return <tr>
                        <td>{item.state}</td>
                        <td>{item.obesity}</td>
                    </tr>
                })}
            </table>
        </div>
    )
}

export default Table