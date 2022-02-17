function All() {
  const { pathname } = useLocation()

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold"><code>404</code> - Not Found</h1>
      <p className="mt-2">We couldn&apos;t find any routes that matches <code className="p-1 text-sm text-blue-600 rounded bg-gray-50">{pathname}</code>.</p>
      <Link className="px-4 py-2 mt-4 text-white transition-colors bg-blue-600 rounded hover:bg-blue-500" to="/">Go to home</Link>
    </div>
  )
}

export default All
