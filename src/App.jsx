import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import './App.css'
import profileImage from './assets/profile.jpeg'

function App() {
  const formRef = useRef(null)
const [sending, setSending] = useState(false)
const [status, setStatus] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = async (e) => {
  e.preventDefault()
  setSending(true)
  setStatus('')

  try {
    await emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formRef.current,
      {
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      }
    )

    setStatus('success')
    alert('Success state activated!')
    formRef.current.reset()

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })

  } catch (error) {
    console.error(error)
    setStatus('error')
  } finally {
    setSending(false)
  }
}
  return (
    <>
      {/* Navigation */}
      <nav>
        <h2>MADAD ALI</h2>

        <div>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Home Section */}
      <section id="home">
        <div className="hero-content">
          <p className="tagline">
            DIGITAL MARKETING PROFESSIONAL
          </p>

          <h1>
            Grow Your Business
            <br />
            With <span>Digital Marketing.</span>
          </h1>

          <p className="description">
            I help businesses build a strong online presence,
            attract potential customers and grow their brands
            through digital marketing strategies.
          </p>

          <div className="hero-buttons">
            <a href="#services">Explore Services</a>

            <a href="#contact" className="secondary-btn">
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img
            src={profileImage}
            alt="Madad Ali Profile"
            className="profile-photo"
          />
        </div>
      </section>

      {/* About Section */}
      <section id="about">
        <div className="section-heading">
          <p className="section-tag">WHO I AM</p>
          <h2>
            About <span>Me</span>
          </h2>
        </div>

        <p className="section-description">
          I am a digital marketing enthusiast passionate
          about helping businesses grow online. I am
          continuously learning SEO, Google Ads and
          Social Media Marketing.
        </p>
      </section>

      {/* Services Section */}
      <section id="services">
        <div className="section-heading">
          <p className="section-tag">WHAT I DO</p>
          <h2>
            My <span>Services</span>
          </h2>
          <p>Digital solutions to help businesses grow.</p>
        </div>

        <div className="services-container">
          <div className="service-card">
            <div className="service-icon">🔍</div>
            <h3>SEO Optimization</h3>
            <p>
              Improve website visibility and organic traffic.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">📱</div>
            <h3>Social Media Marketing</h3>
            <p>
              Build brand awareness and reach your audience.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">📊</div>
            <h3>Google Ads</h3>
            <p>
              Reach potential customers through targeted ads.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills">
        <div className="section-heading">
          <p className="section-tag">MY EXPERTISE</p>
          <h2>
            My <span>Skills</span>
          </h2>
          <p>Technologies and skills I am learning.</p>
        </div>

        <div className="skills-container">
          <div className="skill-card">
            <h3>Digital Marketing</h3>
            <ul>
              <li>Search Engine Optimization (SEO)</li>
              <li>Social Media Marketing</li>
              <li>Google Ads</li>
              <li>Content Marketing</li>
              <li>Email Marketing</li>
            </ul>
          </div>

          <div className="skill-card">
            <h3>Web Development</h3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <div className="section-heading">
          <p className="section-tag">MY RECENT WORK</p>
          <h2>
            My <span>Projects</span>
          </h2>
          <p>Some projects I have worked on.</p>
        </div>

        <div className="projects-container">
          <div className="project-card">
            <div className="project-image">
              Marketing Dashboard
            </div>
            <div className="project-info">
              <h3>Marketing Dashboard</h3>
              <p>
                Digital marketing analytics and performance tracking.
              </p>
              <span>Digital Marketing</span>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">
              Portfolio Website
            </div>
            <div className="project-info">
              <h3>Personal Portfolio</h3>
              <p>
                A responsive personal portfolio website.
              </p>
              <span>Web Development</span>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">
              Social Media Campaign
            </div>
            <div className="project-info">
              <h3>Social Media Campaign</h3>
              <p>
                Creative social media marketing campaign.
              </p>
              <span>Digital Marketing</span>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">
              E-commerce Website
            </div>
            <div className="project-info">
              <h3>E-commerce Website</h3>
              <p>
                A modern online shopping website design.
              </p>
              <span>Web Development</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials">
        <div className="section-heading">
          <p className="section-tag">CLIENT FEEDBACK</p>
          <h2>
            What People <span>Say</span>
          </h2>
          <p>Sample testimonial designs.</p>
        </div>

        <div className="testimonials-container">
          <div className="testimonial-card">
            <h2>“</h2>
            <p>
              Great work on the website design.
              The layout is clean and professional.
            </p>
            <h3>Sample Client</h3>
            <span>Website Project</span>
          </div>

          <div className="testimonial-card">
            <h2>“</h2>
            <p>
              The marketing strategy helped us
              understand our online audience better.
            </p>
            <h3>Sample Client</h3>
            <span>Marketing Project</span>
          </div>
        </div>
      </section>

      
{/* Contact Section */}
<section id="contact">
  <div className="section-heading">
    <p className="section-tag">GET IN TOUCH</p>
    <h2>
      Contact <span>Me</span>
    </h2>
    <p>Let's discuss your next project.</p>
  </div>

  <div className="contact-container">

    <div className="contact-info">
      <h3>Let's Work Together</h3>
      <p>
        Have a project or an idea? Send me a message.
        I'd be happy to hear from you.
      </p>

      <p>📧 madadalinohri60@gmail.com</p>
      <p>📍 Umerkot, Sindh, Pakistan</p>
    </div>

    <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Your Email"
        required
      />

      <input
        type="text"
        name="subject"
        placeholder="Subject"
        required
      />

      <textarea
  name="message"
  placeholder="Your Message"
  rows="6"
  required
></textarea>

      <button type="submit" disabled={sending}>
      {sending ? 'Sending...' : 'Send Message'}
      </button>

      {status === 'success' && (
  <p className="form-success">
    Message sent successfully! Thank you for contacting me.
  </p>
)}

{status === 'error' && (
  <p className="form-error">
    Something went wrong. Please try again.
  </p>
)}
    </form>
  </div>
  
</section>

      {/* Footer */}
      <footer className="footer">
        <h2>
          MyPortfolio<span>.</span>
        </h2>

        <p>
          Building my skills in Digital Marketing
          and Web Development.
        </p>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <p className="copyright">
          © 2026 MyPortfolio. All rights reserved.
        </p>
      </footer>
    </>
  )
}

export default App
