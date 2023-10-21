import { useState } from 'react'
import './Table.css'

const Table = (props) => {
    const [sorted, setSorted] = useState('alpha')
    const [sortedData, setSortedData] = useState(props.data)

    const setSort = (e) => {
        setSorted(e.target.value)

        if (e.target.value === 'alpha') {
            setSortedData(sortedData.sort((a, b) => a.state.localeCompare(b.state)))
        } else {
            setSortedData(sortedData.sort((a, b) => b.obesity - a.obesity))
        }
    }

    return (
        <>
            <div className='sort-by'>
                <div>Sort By:</div>
                <input id='alphaSort' type='radio' checked={sorted === 'alpha'} onChange={setSort} value='alpha' />
                <label htmlFor='alphaSort'>State (A-Z)</label>
                <input id='dataSort' type='radio' checked={sorted === 'data'} onChange={setSort} value='data' />
                <label htmlFor='dataSort'>Obesity</label>
            </div>
            <div className='table-container'>
                <table>
                    <thead>
                        <tr>
                            <th>State</th>
                            <th>Obesity (% of Population)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedData.map(item => {
                            return <tr key={item.state}>
                                <td>{item.state}</td>
                                <td className='obesity-stat'>{item.obesity}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Table