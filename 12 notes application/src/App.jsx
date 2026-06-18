import React, { useState } from 'react'
import { Trash2 } from 'lucide-react';

const App = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [indexToDelete, setIndexToDelete] = useState(null);

  const [note, setNote] = useState(() => {
    const savedNotes = localStorage.getItem('notes')
    return savedNotes ? JSON.parse(savedNotes) : []
  })

  const submitHandle = (e) => {
    e.preventDefault()

    const copyNote = [...note]
    copyNote.push({ title, details })
    setNote(copyNote)
    localStorage.setItem('notes', JSON.stringify(copyNote))

    setTitle('')
    setDetails('')
  }
  const deleteNote = (i) => {
    setIndexToDelete(i);
    setShowModal(true);
  };
  const handleConfirmDelete = () => {
    if (indexToDelete !== null) {
      const copyNote = [...note]
      copyNote.splice(indexToDelete, 1)
      setNote(copyNote)
      localStorage.setItem('notes', JSON.stringify(copyNote))
    }
    setShowModal(false)
    setIndexToDelete(null)
  }
  const handleCancelDelete =()=>{
    setShowModal(false)
    setIndexToDelete(null)
  }

  return (
    <div className='min-h-screen lg:flex bg-gray-900 text-white'>
      <form onSubmit={(e) => {
        submitHandle(e)
      }} className='flex flex-col gap-4 lg:w-1/2 p-5 lg:p-10 items-start'>
        <h1 className='text-3xl font-bold'>Add Notes</h1>
        <input
          type="text"
          placeholder='Enter note heading...'
          className='w-full px-3 py-2 font-medium border-2 outline-none rounded'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        />
        <textarea
          name=""
          id=""
          placeholder='Write details....'
          className='w-full px-3 h-32 py-3 font-medium border-2 outline-none rounded'
          value={details}
          onChange={(e) => {
            setDetails(e.target.value)
          }}
        />
        <button
          className='w-full px-5 py-4 bg-white text-black font-medium border-2 outline-none rounded-lg active:scale-[0.99] active:bg-gray-200'>
          Add Note
        </button>
      </form>
      <div className=' p-10 lg:w-1/2 border-t lg:border-l border-gray-600'>
        <h1 className='text-3xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap items-start justify-start gap-6 py-5 h-full overflow-y-scroll scrollbar-none'>
          {note.length === 0 ? (
            <h3 className='text-xl flex justify-center text-center items-center ml-2 mt-6 font-medium text-red-500' > No Recent Notes.</h3>
          ) : (
            note.map(function (e, i) {
              return (
                <div key={i} className={`group overflow-hidden relative flex flex-col justify-between h-50 w-40 rounded-xl pt-7 p-3 bg-cover text-black bg-[url('https://images.all-free-download.com/images/graphiclarge/note_pad_clip_art_25802.jpg')]
                  ${hoveredIndex === i ? 'opacity-80' : 'opacity-100'}`}>
                  <div className='max-h-38 overflow-y-scroll scrollbar-none'>
                    <h3 className='leading-tight text-xl font-bold mb-1'>{e.title}</h3>
                    <p className='leading-6 font-medium overflow-x-hidden text-gray-500'>{e.details}</p>
                  </div>
                  <button
                    onMouseEnter={() => setHoveredIndex(i)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    onClick={() => deleteNote(i)}
                    className='absolute top-6 right-2 transform translate-x-10 opacity-0 scale-75 transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-100 group-hover:scale-100 cursor-pointer hover:scale-150 active:scale-140'><Trash2 color="#ff0000" />
                  </button>
                </div>
              )
            })
          )}
        </div>
      </div>
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm transition-all">
          <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700 w-80 text-center shadow-2xl scale-100 transition-all animate-in fade-in zoom-in-95 duration-200">
            <h3 className="text-xl font-bold text-white mb-2">Delete Note?</h3>
            <p className="text-gray-400 text-sm mb-6">Are you sure you want to remove this note? This action cannot be undone.</p>

            <div className="flex gap-4 justify-center">
              <button
                onClick={handleCancelDelete}
                className="px-4 py-2 bg-gray-700 hover:bg-gray-600 active:scale-95 text-white font-medium rounded-lg transition-all cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmDelete}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 active:scale-95 text-white font-medium rounded-lg transition-all cursor-pointer"
              >
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App