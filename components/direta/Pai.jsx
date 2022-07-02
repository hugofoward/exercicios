import Filho from './Filho'

export default function Pai(props){
    return (
        <div>
            <Filho nome="Pedro" familia={props.familia} />
            <Filho nome="Joana" familia={props.familia} />
            <Filho {...props} nome="Gabriel"  />
        </div>
    )
}