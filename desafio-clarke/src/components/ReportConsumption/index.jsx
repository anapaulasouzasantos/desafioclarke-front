import './styles.css';
import api from '../../services/api';
import useConsumption from '../../hooks/useConsumption';

const ReportConsumption = () => {

    const { consumption,
        setConsumption,
        setSupplier,
        setShowTable } = useConsumption()

    const handleClick = async (e) => {
        e.preventDefault()

        if (!consumption) {
            alert('Necessario informar o valor.')
        }

        if (isNaN(consumption)) {
            alert('Informar apenas numeros')
        }

        try {
            const response = await api.get(`/fornecedores?consumption=${consumption}`);

            setSupplier(response.data)
            setShowTable(true);
            setConsumption('');
        } catch (error) {
           console.log(error)
        }
    }

    return (
        <div className='left'>
            <div className='container-consumption' >
                <div className='content-consumption'>
                <span>
                    Somos um marketplace especializado em conectar a sua empresa com mais de 50 fornecedores, dando a você os melhores preços de energia do mercado!
                </span>
                <form >
                    <h2>Informe seu cosumo em kWh:</h2>
                    <input
                        type='text'
                        placeholder='Ex.: 10000'
                        value={consumption}
                        onChange={(e) => setConsumption(e.target.value)}
                    >
                    </input>
                    <button
                        onClick={handleClick}
                    >
                        Confirmar
                    </button>
                </form>
                </div>
            </div>
        </div>
    )
}

export default ReportConsumption;