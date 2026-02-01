import React from 'react'

const CreateTask = () => {
  return (
      <div className="p-6 bg-[#1c1c1c] mt-7 rounded-lg">
          <form className="flex flex-wrap gap-6 justify-between">

              {/* LEFT COLUMN */}
              <div className="w-full md:w-[48%] space-y-4">
                  <div>
                      <h3 className="text-sm text-gray-300 mb-1">Task Title</h3>
                      <input
                          className="w-full rounded bg-[#2a2a2a] text-white px-3 py-2 outline-none"
                          type="text"
                          placeholder="Task title"
                      />
                  </div>

                  <div>
                      <h3 className="text-sm text-gray-300 mb-1">Date</h3>
                      <input
                          className="w-full rounded bg-[#2a2a2a] text-white px-3 py-2 outline-none"
                          type="date"
                      />
                  </div>

                  <div>
                      <h3 className="text-sm text-gray-300 mb-1">Assign to</h3>
                      <input
                          className="w-full rounded bg-[#2a2a2a] text-white px-3 py-2 outline-none"
                          type="text"
                          placeholder="Employee name"
                      />
                  </div>

                  <div>
                      <h3 className="text-sm text-gray-300 mb-1">Category</h3>
                      <input
                          className="w-full rounded bg-[#2a2a2a] text-white px-3 py-2 outline-none"
                          type="text"
                          placeholder="Dev / Design"
                      />
                  </div>
              </div>

              {/* RIGHT COLUMN */}
              <div className="w-full md:w-[48%] space-y-4">
                  <div>
                      <h3 className="text-sm text-gray-300 mb-1">Description</h3>
                      <textarea
                          className="w-full rounded bg-[#2a2a2a] text-white px-3 py-2 outline-none resize-none"
                          rows="10"
                          placeholder="Task description"
                      />
                  </div>
              </div>

              {/* BUTTON */}
              <div className="w-full flex justify-end">
                  <button
                      className="bg-emerald-600 hover:bg-emerald-700 transition px-6 py-2 rounded text-white font-medium"
                  >
                      Create Task
                  </button>
              </div>

          </form>
      </div>
  )
}

export default CreateTask
