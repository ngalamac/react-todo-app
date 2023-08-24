const TodoItem = ({ itemProp }) => (
  <li>
    <input type="checkbox" />
    {itemProp.title}
  </li>
);
export default TodoItem;
