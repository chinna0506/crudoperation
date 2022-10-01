import react from "react";

export const Table = (props) => {
    const {data, deleteHandler, editRow} = props;
    return(
        <div>
            <table style={{border:"1px solid black"}}>
                <tr>
                    <th style={{border:"1px solid black"}}>User Name</th>
                    <th style={{border:"1px solid black"}}>Age</th>
                    <th style={{border:"1px solid black"}}>Phone Number</th>
                </tr>
                {data.map((item, index)=>{
                return(<tr>
                            <td style={{border:"1px solid black"}}>{item.firstName} {item.lastName}</td>
                            <td style={{border:"1px solid black"}}>{item.age}</td>
                            <td style={{border:"1px solid black"}}>{item.phoneNumber}</td>
                            <td style={{border:"1px solid black"}}>
                                <button type="button" onClick={() => editRow(item)}>Edit</button>
                                <button type="button" onClick={() => deleteHandler(index)}>Delete</button>
                            </td>
                        </tr>)})}
            </table>
        </div>
    )
}