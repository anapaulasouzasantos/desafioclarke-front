import './styles.css';
import useConsumption from '../../hooks/useConsumption';


const SupplierCompanies = () => {

    const { supplier, showTable } = useConsumption();

    return (
        <div className='right'>
            {
                showTable &&
                     <div className='table'>
                        <table>
                            <thead>
                                <tr style={{display:"flex"}}>
                                    <th className="cel-logo">Logo</th>
                                    <th className='company-title'>Nome da empresa</th>
                                    <th className='status-column' >Estado</th>
                                    <th className='cost-column'>Custo Kwh</th>
                                </tr>
                            </thead>
                            <tbody>

                                {supplier.length && supplier.map((item) => (
                                    <tr key={item.id}>
                                        <td className="cel-logo">
                                            <img
                                            className="logoTabela"
                                                src={item.logo}
                                                alt='logo'
                                            />
                                        </td>
                                        <td className='company-column text-style'>{item.nome}</td>
                                        <td className='status-column text-style' >{item.uf}</td>
                                        <td className='cost-column text-style' >{item.custo_kwh}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
            }
        </div >
    )
}

export default SupplierCompanies;