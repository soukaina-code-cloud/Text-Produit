export default function Listing({products}){
    
    return(<>
    <table border={1}>
        <thead>
            <tr>
                <th>code</th>
                <th>name</th>
                <th>prix</th>
                <th>qualtiy</th>
            </tr>
        </thead>
        <tbody>
            {props.products.map((index,p)=>(
                <tr key={index}>
                    <td>{p.code}</td>
                    <td>{p.name}</td>
                    <td>{p.prix}</td>
                    <td>{p.quality}</td>

                </tr>
            )
            )}
        </tbody>
    </table>
    </>)

}

