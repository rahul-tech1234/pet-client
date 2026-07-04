'use client'



const FilterAndSort = () => {
  const handleFilter=(e)=>{
    e.preventDefault();

  }
  const handleSorted=(e)=>{
    e.preventDefault();
    const  data=e.target.value;
    if (data=='high') {
      console.log('high')
      return
    }else if (data== 'low') {
      console.log('low')
      return
    }
    //console.log(data);
  }
  return (
    <div>
       <form className="flex justify-center items-center gap-5 my-3">
            <input onClick={handleFilter} type="text" className="border shadow-md p-2 rounded-md" placeholder="Enter your name" />
           
            <select
              onClick={handleSorted}
              name="species"
              className="rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              
            >
              <option value={''} >sort</option>
              <option value={'high'} >high</option>
              <option value={'low'} >low</option>
              
            </select>
          </form>
    </div>
  );
};

export default FilterAndSort;