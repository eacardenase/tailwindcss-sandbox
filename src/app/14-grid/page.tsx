import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Grid',
};

const Grid = () => {
  return (
    <main>
      {/* Grid cols and rows  */}

      {/* Col and row span  */}
    </main>
  );
};

export default Grid;

`
<!-- 
  Grid Template Columns
  grid-cols-1	    grid-template-columns: repeat(1, minmax(0, 1fr));
  grid-cols-2	    grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-cols-3	    grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-cols-4	    grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-cols-5	    grid-template-columns: repeat(5, minmax(0, 1fr));
  grid-cols-6	    grid-template-columns: repeat(6, minmax(0, 1fr));
  grid-cols-7	    grid-template-columns: repeat(7, minmax(0, 1fr));
  grid-cols-8	    grid-template-columns: repeat(8, minmax(0, 1fr));
  grid-cols-9	    grid-template-columns: repeat(9, minmax(0, 1fr));
  grid-cols-10	  grid-template-columns: repeat(10, minmax(0, 1fr));
  grid-cols-11	  grid-template-columns: repeat(11, minmax(0, 1fr));
  grid-cols-12	  grid-template-columns: repeat(12, minmax(0, 1fr));
  grid-cols-none	grid-template-columns: none;
-->

<!-- Grid Template Rows
  grid-rows-1	    grid-template-rows: repeat(1, minmax(0, 1fr));
  grid-rows-2	    grid-template-rows: repeat(2, minmax(0, 1fr));
  grid-rows-3	    grid-template-rows: repeat(3, minmax(0, 1fr));
  grid-rows-4	    grid-template-rows: repeat(4, minmax(0, 1fr));
  grid-rows-5	    grid-template-rows: repeat(5, minmax(0, 1fr));
  grid-rows-6	    grid-template-rows: repeat(6, minmax(0, 1fr));
  grid-rows-none	grid-template-rows: none;
  -->
`;
