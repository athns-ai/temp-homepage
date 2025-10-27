import logo from '../../assets/logo.jpeg'
import logoText from '../../assets/logo_text.png'

// Homepage component
const Homepage = () => {
  const handleRedirect = () => {
    window.location.href = 'https://waitlist.athens-ai.tech'
  }

  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#000000',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem 1rem 6rem 1rem',
      position: 'relative'
    },
    content: {
      width: '100%',
      maxWidth: '28rem',
      textAlign: 'center'
    },
    logoSection: {
      marginBottom: '2rem'
    },
    logoBox: {
      width: '7rem',
      height: '7rem',
      margin: '0 auto 0rem',
      borderRadius: '0.5rem',
      overflow: 'hidden'
    },
    logoImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    },
    logoTextImage: {
      height: '1.75rem',
      objectFit: 'contain'
    },
    heading: {
      color: 'white',
      fontSize: 'clamp(2.5rem, 6vw, 3.5rem)',
      fontWeight: '300',
      marginBottom: '2.5rem',
      lineHeight: '1.1',
      fontFamily: 'Helvetica, Arial, sans-serif',
      whiteSpace: 'nowrap'
    },
    formContainer: {
      marginBottom: '2rem',
      display: 'flex',
      justifyContent: 'center',
      width: '100%'
    },
    button: {
      backgroundColor: '#FFF4EB',
      color: 'black',
      padding: '0.75rem 2rem',
      fontWeight: '600',
      fontSize: '0.875rem',
      letterSpacing: '0.05em',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      fontFamily: 'Helvetica, Arial, sans-serif',
      borderRadius: '9999px'
    },
    buttonHover: {
      backgroundColor: 'black',
      color: '#FFF4EB'
    },
    footer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      padding: '1rem',
      backgroundColor: '#FFF4EB'
    },
    footerText: {
      textAlign: 'center',
      color: 'black',
      fontSize: '0.875rem',
      letterSpacing: '0.1em'
    },
    footerBold: {
      fontWeight: 'bold'
    }
  }

  return (
    <div style={styles.container} className="mobile-container">
      <div style={styles.content} className="mobile-content">
        {/* Logo */}
        <div style={styles.logoSection}>
          <div style={styles.logoBox} className="mobile-logo-box">
            <img src={logo} alt="Athens Logo" style={styles.logoImage} />
          </div>
          <img src={logoText} alt="Athens" style={styles.logoTextImage} className="mobile-logo-text" />
        </div>

        {/* Redirect button */}
        <div style={styles.formContainer}>
          <button
            onClick={handleRedirect}
            style={styles.button}
            className="mobile-button"
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = styles.buttonHover.backgroundColor
              e.target.style.color = styles.buttonHover.color
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#FFF4EB'
              e.target.style.color = 'black'
            }}
          >
            <span className="desktop-button-text">JOIN WAITLIST</span>
            <span className="mobile-button-text">JOIN</span>
          </button>
        </div>
      </div>

      {/* Bottom tagline with beige stripe */}
      <div style={styles.footer} className="mobile-footer">
        <p style={styles.footerText}>
          PIVOTING TECHNOLOGY TO LEARN <span style={styles.footerBold}>PERFECTLY</span>
        </p>
      </div>
    </div>
  )
}

// Main component
export default function HomepageApp() {
  return <Homepage />
}