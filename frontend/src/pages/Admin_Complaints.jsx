import React, { useState } from 'react'
import DashboardSidebar from '../components/dashboardSidebar'
import './Admin_Dashboard.css'
import SortSearchGroup from '../components/SortSearchGroup';
import NotifyAdminForm from '../components/forms/NotifyAdminForm';
import IssueComplaintForm from '../components/forms/IssueComplaintForm';
import TableComplaints from '../components/TableComplaints';

const Admin_Complaints = () => {
    const linkTitles = [
        "Manage Products",
        "Manage Warehouses",
        "Manage Complaints"
    ];
    const links = [
      '/AdminDash/Products',
      '/AdminDash/Warehouses',
      '/AdminDash/Complaints'
    ];
    const numOfShownLinks = 3;

    const [showNotifyadmin, setShowNotifyAdmin] = useState(false)
    const handleCloseNotifyAdmin = () => setShowNotifyAdmin(false)
    
    const [showIssueComplaint, setShowIssueComplaint] = useState(false)
    const handleCloseIssueComplaint = () => setShowIssueComplaint(false)

  return (
    <div className='dashboardContainer flex overflow-hidden'>
        <DashboardSidebar numOfLinks={numOfShownLinks} linkTitles={linkTitles} links={links}/>
        <div className='pl-[100px] bg-background contentContainer flex px-20'>
            <div className='contentSide'>
            <h1 className='text-displayText mt-[10px] mb-14'>Complaints</h1>
            <SortSearchGroup/>
             <button onClick={() => setShowIssueComplaint(true)} className='flex items-end p-2 w-72 mt-[400px] bg-primary rounded-full hover:bg-primary/50'>
                <p className='p-2 text-black'>Notify User on Complaint Ticket</p>
                </button>
             <button onClick={() => setShowNotifyAdmin(true)} className='flex items-end p-2 w-72 mt-5 bg-primary rounded-full hover:bg-primary/50 '>
                <p className='p-2 text-black'>Issue Notification to Warehouse</p>
                </button>
            </div> 
          <div className='m-20'>
           <TableComplaints/>
           </div>
        </div>
        <NotifyAdminForm onClose={handleCloseNotifyAdmin} visible={showNotifyadmin}/>
        <IssueComplaintForm onClose={handleCloseIssueComplaint} visible={showIssueComplaint}/>
    </div>
  );
}
;
export default Admin_Complaints;