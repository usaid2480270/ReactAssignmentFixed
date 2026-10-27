const BreadCrumb = () => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item active" aria-current="page">
          Home
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          Students
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          Directory
        </li>
      </ol>
    </nav>
  )
}

export default BreadCrumb