import React, { useState, useEffect } from "react";

const Checkbox2 = ({ ele, completedArray, setCompletedArray }) => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    // Update checked state based on completedArray changes
    setChecked(completedArray.some((item) => item.id === ele.id));
  }, [completedArray, ele]);

  const handleCheck = () => {
    const isCheckedUpdated = !checked;
    setChecked(isCheckedUpdated);

    if (isCheckedUpdated) {
      // Add item to completedArray
      setCompletedArray([...completedArray, ele]);
    } else {
      // Remove item from completedArray
      const updatedArray = completedArray.filter((item) => item.id !== ele.id);
      setCompletedArray(updatedArray);
    }
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={checked}
        onChange={handleCheck}
      />
    </div>
  );
};

export default Checkbox2;
