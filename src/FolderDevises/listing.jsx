export default function listing({devisesFilted}){
    return(<>
    <table>
        <thead>
            <tr>
                <th>code</th>
                <th>nom</th>
                <th>taux</th>
            </tr>
        </thead>
        <tbody>
            {devisesFilted.map((index,d)=>(
                <tr key={index}>
                    <td>{d.code}</td>
                    <td>{d.nom}</td>
                    <td>{d.teux}</td>

                </tr>
            )
            )}
        </tbody>
    </table>
    </>)

}