import './styles.css';
// import Icon from '../../assets/icon.jpg';
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
                                <tr>
                                    <th>Nome da empresa</th>
                                    <th>Estado</th>
                                    <th>Custo Kwh</th>
                                </tr>
                            </thead>
                            <tbody>

                                {supplier.length && supplier.map((item) => (
                                    <tr key={item.id}>
                                        <td>{item.nome}</td>
                                        <td>{item.uf}</td>
                                        <td>{item.custo_kwh}</td>
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