import React from 'react'
import Header from '../other/Header'
import TaskListNumber from '../other/TaskListNumber'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = () => {
  return (
    <div className='bg-[#1c1c1c] h-screen p-10'>
      <Header />
      <TaskListNumber/>
      <TaskList/>
    </div>
  )
}

export default EmployeeDashboard
