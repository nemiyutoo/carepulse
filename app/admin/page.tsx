import StateCard from '@/components/StateCard';
import { columns } from '@/components/table/columns';
import { DataTable } from '@/components/table/DataTable';
import { getRecentAppointmentList } from '@/lib/actions/appointment.actions';
import Image from 'next/image';
import Link from 'next/link';

const Admin = async () => {
  const appointments = await getRecentAppointmentList();

  return (
    <div className='mx-auto flex max-w-7xl flex-col space-y-14'>
      <header className='admin-header'>
        <Link href='/' className='cursor-pointer'>
          <Image
            src='/assets/icons/logo-full.svg'
            width={162}
            height={32}
            alt='logo'
            className='h-8 w-fit'
          />
        </Link>
        <p className='text-16-semibold'>Admin Dashboard</p>
      </header>
      <main className='admin-main'>
        <section className='w-full space-y-4'>
          <h1 className='header'>Welcome</h1>
          <p className='text-dark-700'>
            Start the day with managing new appointments
          </p>
        </section>
        <section className='admin-stat'>
          <StateCard
            type='appointments'
            count={appointments.scheduledCount}
            label='Scheduled Appointments'
            icon='/assets/icons/appointments.svg'
          />
          <StateCard
            type='pending'
            count={appointments.pendingCount}
            label='Pending Appointments'
            icon='/assets/icons/pending.svg'
          />
          <StateCard
            type='cancelled'
            count={appointments.cancelledCount}
            label='Cancelled Appointments'
            icon='/assets/icons/cancelled.svg'
          />
        </section>

        <DataTable columns={columns} data={appointments.documents} />
        {/* <DataTable columns={columns} data={data} /> */}
      </main>
    </div>
  );
};

export default Admin;
