import React from 'react'

const ErrorPage = () => {
  return (
    <div className='errorPage'>
        <main style={{marginTop:"-180px"}} className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8 ">
        <div className="text-center">
          <p className="text-base font-semibold  text-gray-500">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-teal-700 sm:text-5xl">Page not found</h1>
          <p className="mt-6 text-base leading-7 text-gray-400">Sorry, we couldn’t find the page you’re looking for.</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/"
              className="rounded-md bg-teal-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Go back home
            </a>
            <a href="#"     className="rounded-md border border-solid border-gray-400 font-semibold text-gray-400 px-3.5 py-2.5 text-sm text-center shadow-sm hover:bg-teal-900"
            >
              Contact support <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </main>
    </div>
  )
}

export default ErrorPage