import { Link } from 'react-router-dom';

import Card from './Card';

const HomeCards = () => {
  return (
    <section className='py-4'>
      <div className='container-xl lg:container m-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg'>
          <Card>
            <h2 className='text-2xl font-bold'>For Developers</h2>
            <p className='mt-2 mb-4'>
              Browse our React jobs and start your career today
            </p>
            <Link
               to='/jobs'
            className='h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm'
          >
           Browse Jobs
          </Link>
             
         
          </Card>
          <Card bg='bg-indigo-100'>
            <h2 className='text-2xl font-bold'>For Employers</h2>
            <p className='mt-2 mb-4'>
              List your job to find the perfect developer for the role
            </p>
            <Link
               to='/add-job'
            className='h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm'
          >
           Add Job
          </Link>
             
             
       
          </Card>
        </div>
      </div>
    </section>
  );
};
export default HomeCards;