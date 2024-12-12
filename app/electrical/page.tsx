'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { uploadProject } from '../../utils/api'
import { useAppContext } from '../context/AppContext';

export default function Electrical() {
  const [phase, setPhase] = useState('single')
  const [loadType, setLoadType] = useState('inductive')
  const [ampere, setAmpere] = useState('')
  const [sldFile, setSldFile] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()
  const { theme, isOpen } = useAppContext();

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    const formData = new FormData()
    if (sldFile) {
      formData.append('sld_file', sldFile)
    }
    formData.append('phase', phase)
    formData.append('load_type', loadType)
    formData.append('ampere', ampere)

    try {
      const response = await uploadProject(formData)
      const projectId = response.data.id
      router.push(`/electrical/results?projectId=${projectId}`)
    } catch (error) {
      console.error('Error submitting project:', error)
      setError('There was a problem submitting your project. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const marginLeft = isOpen ? 'md:ml-64' : 'md:ml-20';
  const themeClass = theme === 'dark' ? 'bg-black' : 'bg-white';
  const themeClass2 = theme === 'dark' ? 'text-white' : 'text-black';

  return (
    <section className={`${themeClass} ${marginLeft} transition-all duration-300 m-auto overflow-hidden mt-20 mr-8`}>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="sldFile" className="block text-sm font-medium text-gray-700 mb-1">
            SLD File
          </label>
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
            <div className="space-y-1 text-center">
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 48 48"
                aria-hidden="true"
              >
                <path
                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="flex text-sm text-gray-600">
                <label
                  htmlFor="sldFile"
                  className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                >
                  <span>Upload a file</span>
                  <input
                    id="sldFile"
                    name="sldFile"
                    type="file"
                    className="sr-only"
                    onChange={(e) => setSldFile(e.target.files?.[0] || null)}
                  />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs text-gray-500">PDF, DWG, or DXF up to 10MB</p>
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="phase" className="block text-sm font-medium text-gray-700 mb-1">
            Phase
          </label>
          <select
            id="phase"
            value={phase}
            onChange={(e) => setPhase(e.target.value)}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          >
            <option value="single">Single Phase</option>
            <option value="three">Three Phase</option>
          </select>
        </div>

        <div>
          <label htmlFor="loadType" className="block text-sm font-medium text-gray-700 mb-1">
            Load Type
          </label>
          <select
            id="loadType"
            value={loadType}
            onChange={(e) => setLoadType(e.target.value)}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          >
            <option value="inductive">Inductive</option>
            <option value="capacitive">Capacitive</option>
          </select>
        </div>

        <div>
          <label htmlFor="ampere" className="block text-sm font-medium text-gray-700 mb-1">
            Ampere Rating
          </label>
          <input
            type="number"
            id="ampere"
            value={ampere}
            onChange={(e) => setAmpere(e.target.value)}
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
          >
            {isLoading ? 'Submitting...' : 'Submit'}
          </button>
        </div>
      </form>
    </section>
  )
}
