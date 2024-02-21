import { Badge } from "react-bootstrap";
import {  useDispatch } from "react-redux";
import { updateStatus } from "./redux/slice/todo";

export default TodoItem({id, name, isDone, createdAt, updateAt, onClickRemove}) {
    const dispatch = useDispatch()
    const handleClick = ({id}) => {
     dispatch(updateStatus({id}))
    }
    return(
    <tr>
    <td>
    <p className={`todo-item ${isDone && 'done'}`}>{name}</p>
    <Badge bg="secondary">{createdAt}</Badge>
    </td>
    <td>
    <Badge bg={isDone ? 'succes' : 'danger'}>{isDone ? "Done" : 'Pending'}</Badge>
    {isDone && <p>{updateAt}</p>}
    </td>
    {!isDone && 
    <td>
    <div style={{color: "green"}} onClick={() => handleClick({id})}>
    <FaCheck/>
    </div>
    </td>
}
<td colSpan={isDone ? 2 : 1}>
<div style={{color: "red"}} onClick={() => onClickRemove({id})}>
<FaTimes/>
</div>
</td>
    </tr>
    )
}
