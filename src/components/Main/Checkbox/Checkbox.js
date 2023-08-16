import React,{useState} from 'react';
import './Checkbox.css'
const Checkbox = (props) => {
   const [isChecked, setIsChecked] = useState(false);
   const handleCheckboxChange = () => {
      setIsChecked(prevState => !prevState);
   };

props.checkState(isChecked);

   return (
      <div className="round">
         <input type="checkbox" id="checkbox"
         disabled={false} checked={isChecked} onChange={handleCheckboxChange} />
         <label htmlFor="checkbox"></label>
      </div>
   );
}
export default Checkbox;