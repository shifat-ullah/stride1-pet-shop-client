import { ScaleLoader } from 'react-spinners'

const Spiner = () => {
    return (
        <div
          className='
          h-[70vh]
          flex 
          flex-col 
          justify-center 
          items-center 
        '
        >
          <ScaleLoader size={100} color='red' />
        </div>
      )
    }

export default Spiner;