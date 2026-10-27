const Footer = () => {
  return (
    <section>
      <footer className="bg-body-tertiary text-center text-md-start">
        <div className="container p-4">
          <div className="row">
            <div className="col-lg-6 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Links</h5>
              <ul className="list-unstyled mb-0">
                <li>Home</li>
                <li>Computer Science</li>
                <li>Courses</li>
                <li></li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Contact Info</h5>
              <ul className="list-unstyled mb-0">
                <li><a href="#!" className="text-body">Contact Us</a></li>
                <li><a href="#!" className="text-body">+92 1234567</a></li>
                <li><a href="#!" className="text-body">bsse2480270@szabist.pk</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
          © 2026 Copyright:{' '}
          <a className="text-body" href="/">Usaid.Inc</a>
        </div>
      </footer>
    </section>
  )
}

export default Footer